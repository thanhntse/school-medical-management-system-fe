import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/ui/icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function ProfilePage() {
  const auth = useSelector((state: RootState) => state.auth);
  const roleMap = {
    Parent: 'Phụ huynh',
    SchoolNurse: 'Nhân viên y tế',
    Admin: 'Quản trị viên'
  };

  return (
    <>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Hồ sơ cá nhân</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  {auth?.userInfo?.accountInfo.avatar ? (
                    <img
                      src={auth?.userInfo?.accountInfo.avatar}
                      alt={auth?.userInfo?.accountInfo.fullName || 'User'}
                      className="h-24 w-24 rounded-full"
                    />
                  ) : (
                    <AvatarFallback className="bg-teal-100 text-2xl text-teal-900">
                      {auth?.userInfo?.accountInfo.fullName?.charAt(0) || 'U'}
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full bg-white"
                >
                  <Icons.pencil className="h-4 w-4" />
                  <span className="sr-only">Thay đổi ảnh đại diện</span>
                </Button>
              </div>
              <div className="flex-1 space-y-1 text-center md:text-left">
                <h3 className="text-2xl font-bold">
                  {auth?.userInfo?.accountInfo?.fullName || 'Người dùng'}
                </h3>
                <p className="text-sm text-gray-500">
                  {auth?.userInfo?.email || 'user@example.com'}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">
                    {roleMap[auth?.userInfo?.role as keyof typeof roleMap]}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList>
            <TabsTrigger value="account">Tài khoản</TabsTrigger>
            <TabsTrigger value="security">Bảo mật</TabsTrigger>
            <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin tài khoản</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Họ và tên</Label>
                    <Input
                      id="fullName"
                      placeholder="Nhập họ và tên"
                      defaultValue={auth?.userInfo?.accountInfo?.fullName}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={auth?.userInfo?.email}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      defaultValue={auth?.userInfo?.accountInfo?.phone}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Vai trò</Label>
                    <Input
                      id="role"
                      defaultValue={
                        roleMap[auth?.userInfo?.role as keyof typeof roleMap]
                      }
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Cập nhật thông tin
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Đổi mật khẩu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Nhập mật khẩu hiện tại"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Mật khẩu mới</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Đổi mật khẩu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt thông báo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Thông báo qua email</h4>
                      <p className="text-sm text-gray-500">
                        Nhận thông báo về các sự kiện y tế qua email
                      </p>
                    </div>
                    <Button variant="outline">Cấu hình</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Thông báo trên web</h4>
                      <p className="text-sm text-gray-500">
                        Hiển thị thông báo trực tiếp trên trình duyệt
                      </p>
                    </div>
                    <Button variant="outline">Cấu hình</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
