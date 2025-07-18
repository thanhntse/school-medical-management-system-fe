import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Icons } from '@/components/ui/icons';
import { Link, useSearchParams } from 'react-router-dom';
import DataTable from '@/components/shared/data-table';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  MedicalEventResponse,
  useGetMedicalEvents
} from '@/queries/medical-events.query';
import * as XLSX from 'xlsx';
import __helpers from '@/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const evenTypeMap = {
  Accident: 'Tai nạn',
  Fall: 'Té ngã',
  Fever: 'Sốt',
  Illness: 'Bệnh khác',
  InfectiousDisease: 'Dịch bệnh',
  Injury: 'Chấn thương',
  MedicationGiven: 'Đã cho dùng thuốc',
  Other: 'Khác'
};

// Định nghĩa cột cho bảng
const columns = [
  {
    accessorKey: 'studentFullName',
    header: 'Học sinh',
    cell: ({ row }: { row: { original: MedicalEventResponse } }) => (
      <div className="font-medium text-teal-900">
        {row.original.studentFullName}
      </div>
    )
  },
  {
    accessorKey: 'eventType',
    header: 'Loại sự kiện',
    cell: ({ row }: { row: { getValue: (key: string) => string } }) => (
      <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
        {evenTypeMap[row.getValue('eventType') as keyof typeof evenTypeMap]}
      </span>
    )
  },
  {
    accessorKey: 'date',
    header: 'Ngày',
    cell: ({ row }: { row: { original: MedicalEventResponse } }) => (
      <div className="text-gray-600">
        {new Date(row.original.date).toLocaleDateString('vi-VN')}
      </div>
    )
  },
  {
    accessorKey: 'description',
    header: 'Mô tả',
    cell: ({ row }: { row: { original: MedicalEventResponse } }) => (
      <div className="max-w-[200px] truncate text-gray-600">
        {row.original.description || 'Không có mô tả'}
      </div>
    )
  },
  {
    accessorKey: 'nurseFullName',
    header: 'Người xử lý',
    cell: ({ row }: { row: { getValue: (key: string) => string } }) => (
      <div className="text-gray-600">{row.getValue('nurseFullName')}</div>
    )
  },
  {
    id: 'actions',
    cell: ({ row }: { row: { original: MedicalEventResponse } }) => {
      const event = row.original;
      return (
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
            asChild
          >
            <Link to={`/dashboard/medical-events/${event.medicalEventId}`}>
              <Icons.eye className="h-4 w-4" />
              <span className="sr-only">Xem chi tiết</span>
            </Link>
          </Button>
        </div>
      );
    }
  }
];

export default function MedicalEventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState<string | undefined>(
    undefined
  );
  const [searchParams] = useSearchParams();
  const role = __helpers.cookie_get('R');
  const auth = useSelector((state: RootState) => state.auth);

  // Get page and limit from URL
  const page = searchParams?.get('page') ?? '1';
  const limit = searchParams?.get('limit') ?? '10';
  const pageNumber = Number(page);
  const pageSize = Number(limit);

  const { data: medicalEventsData, isLoading } = useGetMedicalEvents(
    pageNumber,
    pageSize
  );

  // Lọc dữ liệu sự kiện y tế dựa trên các bộ lọc
  const filteredEvents = (
    (medicalEventsData?.items as MedicalEventResponse[]) || []
  ).filter((event) => {
    const matchesSearch =
      event.studentFullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEventType =
      !eventTypeFilter ||
      eventTypeFilter === 'all' ||
      event.eventType === eventTypeFilter;
    if (role === 'Parent') {
      return (
        matchesSearch &&
        matchesEventType &&
        event.student.parentId === auth.userInfo.accountId
      );
    }
    return matchesSearch && matchesEventType;
  });

  // Danh sách loại sự kiện duy nhất
  const uniqueEventTypes = Array.from(
    new Set(
      ((medicalEventsData?.items as MedicalEventResponse[]) || []).map(
        (event) => event.eventType
      )
    )
  );

  if (isLoading) {
    return (
      <Card className="border-none shadow-md">
        <CardHeader className="border-b bg-gradient-to-r from-teal-50 to-cyan-50 pb-2">
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Skeleton className="h-10 w-[250px]" />
              <Skeleton className="h-10 w-[150px]" />
            </div>
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="border-none shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b bg-gradient-to-r from-teal-50 to-cyan-50 pb-4">
          <CardTitle className="text-teal-900">Sự kiện y tế</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => {
                // Prepare data for Excel
                const excelData = filteredEvents.map((event) => ({
                  'Học sinh': event.studentFullName,
                  'Loại sự kiện':
                    evenTypeMap[event.eventType as keyof typeof evenTypeMap],
                  Ngày: new Date(event.date).toLocaleDateString('vi-VN'),
                  'Mô tả': event.description || 'Không có mô tả',
                  'Người xử lý': event.nurseFullName,
                  'Ngày tạo': new Date(event.createAt).toLocaleDateString(
                    'vi-VN'
                  )
                }));

                // Create workbook and worksheet
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.json_to_sheet(excelData);

                // Set column widths
                const columnWidths = [
                  { wch: 25 }, // Học sinh
                  { wch: 15 }, // Loại sự kiện
                  { wch: 12 }, // Ngày
                  { wch: 30 }, // Mô tả
                  { wch: 20 }, // Người xử lý
                  { wch: 25 }, // Triệu chứng
                  { wch: 25 }, // Cách xử lý
                  { wch: 25 }, // Ghi chú
                  { wch: 12 }, // Ngày tạo
                  { wch: 12 } // Ngày cập nhật
                ];
                ws['!cols'] = columnWidths;

                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Sự kiện y tế');

                // Generate Excel file
                XLSX.writeFile(
                  wb,
                  `su-kien-y-te-${new Date().toISOString().split('T')[0]}.xlsx`
                );
              }}
            >
              <Icons.download className="mr-2 h-4 w-4" />
              Xuất Excel
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link to="/dashboard/medical-events/add">
                <Icons.plus className="mr-2 h-4 w-4" />
                Thêm sự kiện mới
              </Link>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Bộ lọc và tìm kiếm */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Icons.search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm theo tên học sinh hoặc loại sự kiện..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:max-w-[300px]"
                />
              </div>
              <Select
                value={eventTypeFilter}
                onValueChange={setEventTypeFilter}
              >
                <SelectTrigger className="sm:max-w-[200px]">
                  <SelectValue placeholder="Loại sự kiện" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại sự kiện</SelectItem>
                  {uniqueEventTypes.map((type, index) => (
                    <SelectItem key={index} value={type}>
                      {evenTypeMap[type as keyof typeof evenTypeMap]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bảng dữ liệu */}
            <DataTable
              columns={columns}
              data={filteredEvents}
              pageCount={Math.ceil(
                (medicalEventsData?.totalRecords || 0) / pageSize
              )}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
