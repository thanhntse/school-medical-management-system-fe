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
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  MedicalSupplyResponse,
  useGetMedicalSupplies
} from '@/queries/medical-supplies.query';
import * as XLSX from 'xlsx';

// Define supply types
const supplyTypes = [
  { value: 'Medicine', label: 'Thuốc' },
  { value: 'Equipment', label: 'Thiết bị' },
  { value: 'FirstAid', label: 'Sơ cứu' },
  { value: 'Hygiene', label: 'Vệ sinh' },
  { value: 'Other', label: 'Khác' }
];

// Định nghĩa cột cho bảng
const columns = [
  {
    accessorKey: 'name',
    header: 'Tên thuốc/vật tư',
    cell: ({ row }: { row: { original: MedicalSupplyResponse } }) => (
      <div className="font-medium text-teal-900">{row.original.name}</div>
    )
  },
  {
    accessorKey: 'type',
    header: 'Loại',
    cell: ({ row }: { row: { getValue: (key: string) => string } }) => (
      <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
        {supplyTypes.find((type) => type.value === row.getValue('type'))
          ?.label || row.getValue('type')}
      </span>
    )
  },
  {
    accessorKey: 'instructions',
    header: 'Hướng dẫn',
    cell: ({ row }: { row: { original: MedicalSupplyResponse } }) => (
      <div className="max-w-[200px] truncate text-gray-600">
        {row.original.instructions || 'Không có'}
      </div>
    )
  },
  {
    accessorKey: 'quantityAvailable',
    header: 'Số lượng',
    cell: ({ row }: { row: { original: MedicalSupplyResponse } }) => {
      const quantity = row.original.quantityAvailable;
      const unit = row.original.unit || 'Đơn vị';
      return (
        <div className="font-medium">
          {quantity} {unit}
        </div>
      );
    }
  },
  {
    accessorKey: 'expiryDate',
    header: 'Hạn sử dụng',
    cell: ({ row }: { row: { original: MedicalSupplyResponse } }) => (
      <div className="text-gray-600">
        {row.original.expiryDate
          ? new Date(row.original.expiryDate).toLocaleDateString('vi-VN')
          : 'Không có'}
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Trạng thái',
    cell: ({ row }: { row: { getValue: (key: string) => string | null } }) => {
      const status = row.getValue('status') || 'Không xác định';
      const statusConfig: Record<
        string,
        { variant: 'success' | 'warning' | 'destructive' | 'default' }
      > = {
        Available: { variant: 'success' },
        Low: { variant: 'warning' },
        Out: { variant: 'destructive' },
        'Không xác định': { variant: 'default' }
      };
      const config = statusConfig[status] || statusConfig['Không xác định'];

      const displayStatus: Record<string, string> = {
        Available: 'Còn hàng',
        Low: 'Sắp hết',
        Out: 'Hết hàng',
        'Không xác định': 'Không xác định'
      };

      return (
        <Badge variant={config.variant}>
          {displayStatus[status] || status}
        </Badge>
      );
    }
  },
  {
    id: 'actions',
    cell: ({ row }: { row: { original: MedicalSupplyResponse } }) => {
      const supply = row.original;
      return (
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
            asChild
          >
            <Link to={`/dashboard/medications/edit/${supply.medicalSupplyId}`}>
              <Icons.pencil className="h-4 w-4" />
              <span className="sr-only">Chỉnh sửa</span>
            </Link>
          </Button>
        </div>
      );
    }
  }
];

export default function MedicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [statusFilter, setStatusFilter] = useState<string | undefined>(
    undefined
  );
  const [searchParams] = useSearchParams();

  // Get page and limit from URL
  const page = searchParams?.get('page') ?? '1';
  const limit = searchParams?.get('limit') ?? '10';
  const pageNumber = Number(page);
  const pageSize = Number(limit);

  const { data: suppliesData, isLoading } = useGetMedicalSupplies(
    pageNumber,
    pageSize
  );

  // Lọc dữ liệu thuốc dựa trên các bộ lọc
  const filteredSupplies = (
    (suppliesData?.items as MedicalSupplyResponse[]) || []
  ).filter((supply) => {
    const matchesSearch =
      supply.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supply.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      false;
    const matchesType =
      !typeFilter || typeFilter === 'all' || supply.type === typeFilter;
    const matchesStatus =
      !statusFilter || statusFilter === 'all' || supply.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Danh sách loại thuốc duy nhất
  const uniqueTypes = Array.from(
    new Set(
      ((suppliesData?.items as MedicalSupplyResponse[]) || []).map(
        (supply) => supply.type
      )
    )
  );

  // Danh sách trạng thái duy nhất
  const uniqueStatuses = Array.from(
    new Set(
      ((suppliesData?.items as MedicalSupplyResponse[]) || [])
        .map((supply) => supply.status)
        .filter(Boolean)
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
          <CardTitle className="text-teal-900">
            Quản lý thuốc và vật tư y tế
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => {
                // Prepare data for Excel
                const excelData = filteredSupplies.map((supply) => ({
                  'Tên thuốc/vật tư': supply.name,
                  Loại:
                    supplyTypes.find((type) => type.value === supply.type)
                      ?.label || supply.type,
                  'Mô tả': supply.description || 'Không có',
                  'Hướng dẫn': supply.instructions || 'Không có',
                  'Số lượng': `${supply.quantityAvailable} ${supply.unit || 'Đơn vị'}`,
                  'Hạn sử dụng': supply.expiryDate
                    ? new Date(supply.expiryDate).toLocaleDateString('vi-VN')
                    : 'Không có',
                  'Trạng thái':
                    supply.status === 'Available'
                      ? 'Còn hàng'
                      : supply.status === 'Low'
                        ? 'Sắp hết'
                        : supply.status === 'Out'
                          ? 'Hết hàng'
                          : 'Không xác định'
                }));

                // Create workbook and worksheet
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.json_to_sheet(excelData);

                // Set column widths
                const columnWidths = [
                  { wch: 30 }, // Tên thuốc/vật tư
                  { wch: 15 }, // Loại
                  { wch: 30 }, // Mô tả
                  { wch: 30 }, // Hướng dẫn
                  { wch: 15 }, // Số lượng
                  { wch: 15 }, // Hạn sử dụng
                  { wch: 12 } // Trạng thái
                ];
                ws['!cols'] = columnWidths;

                // Add the worksheet to the workbook
                XLSX.utils.book_append_sheet(wb, ws, 'Thuốc và vật tư y tế');

                // Generate Excel file
                XLSX.writeFile(
                  wb,
                  `thuoc-va-vat-tu-y-te-${new Date().toISOString().split('T')[0]}.xlsx`
                );
              }}
            >
              <Icons.download className="mr-2 h-4 w-4" />
              Xuất Excel
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link to="/dashboard/medications/add">
                <Icons.plus className="mr-2 h-4 w-4" />
                Thêm thuốc mới
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
                  placeholder="Tìm kiếm theo tên thuốc hoặc mô tả..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:max-w-[300px]"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="sm:max-w-[200px]">
                  <SelectValue placeholder="Loại" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại</SelectItem>
                  {uniqueTypes.map((type, index) => (
                    <SelectItem key={index} value={type || ''}>
                      {supplyTypes.find((t) => t.value === type)?.label || type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="sm:max-w-[200px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  {uniqueStatuses.map((status, index) => (
                    <SelectItem key={index} value={status || ''}>
                      {status === 'Available'
                        ? 'Còn hàng'
                        : status === 'Low'
                          ? 'Sắp hết'
                          : status === 'Out'
                            ? 'Hết hàng'
                            : status || 'Không xác định'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bảng dữ liệu */}
            <DataTable
              columns={columns}
              data={filteredSupplies}
              pageCount={Math.ceil(
                (suppliesData?.totalRecords || 0) / pageSize
              )}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
