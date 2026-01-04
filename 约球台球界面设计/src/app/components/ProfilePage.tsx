import {
  Wallet,
  Activity,
  UserPlus,
  Heart,
  MapPin,
  CreditCard,
  Award,
  FileText,
  Headphones,
  Settings,
  Users,
  Monitor,
  Store,
  LayoutGrid,
  TriangleAlert,
  ShoppingBag,
  Venus,
  ClipboardList,
  Bell,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function ProfilePage() {
  const stats = [
    { label: '我的报名', value: 6, hasNotification: true },
    { label: '我的约球', value: 0 },
    { label: '我的发布', value: 0 },
    { label: '我的订单', value: 0 },
  ];

  const moreFeatures = [
    { icon: UserPlus, label: '球搭子', color: 'text-pink-500' },
    { icon: Heart, label: '我的收藏', color: 'text-red-500' },
    { icon: MapPin, label: '常用场馆', color: 'text-orange-500' },
    { icon: CreditCard, label: '会员卡', color: 'text-yellow-600' },
    { icon: Award, label: '证书', color: 'text-blue-500' },
    { icon: FileText, label: '台球规则', color: 'text-green-600' },
    { icon: Headphones, label: '帮助反馈', color: 'text-purple-500' },
    { icon: TriangleAlert, label: '赛事投诉', color: 'text-red-600' },
    { icon: Users, label: '我的俱乐部', color: 'text-cyan-500' },
    { icon: Monitor, label: '场馆管理', color: 'text-gray-500' },
    { icon: Store, label: '商家入驻', color: 'text-orange-500' },
    { icon: LayoutGrid, label: '赛事管理', color: 'text-red-600' },
  ];

  return (
    <div className="pb-6">
      {/* 顶部导航栏 */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4 -mt-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>杭州</span>
          </button>
          <h1 className="text-base font-semibold">个人中心</h1>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>

      {/* 用户信息卡片 */}
      <Card className="mb-4 hover:shadow-md transition-shadow bg-gradient-to-br from-yellow-50 to-green-50">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-3xl">
                  8
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full border-2 border-pink-500 flex items-center justify-center">
                  <Venus className="w-4 h-4 text-pink-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">群主</span>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300 px-3 py-1">
                    萌新
                  </Badge>
                </div>
                <p className="text-gray-500">ID: 88889999</p>
              </div>
            </div>
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-2">
                  <span className="text-3xl">{stat.value}</span>
                  {stat.hasNotification && (
                    <div className="absolute -top-1 -right-3 w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 更多功能 */}
      <Card className="hover:shadow-md transition-shadow mb-4">
        <CardContent className="p-6">
          <h3 className="mb-4">更多功能</h3>
          <div className="grid grid-cols-4 gap-6">
            {moreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 group"
                >
                  <Icon
                    className={`w-6 h-6 ${feature.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm text-gray-700 whitespace-nowrap">{feature.label}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 场馆入驻 */}
      <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-400 p-1 shadow-lg">
        <div className="flex items-center justify-center gap-4 px-6 py-3">
          <span className="text-gray-900 font-bold text-2xl" style={{ fontStyle: 'italic', transform: 'skewX(-8deg)' }}>场馆入驻</span>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors whitespace-nowrap">
            立即联系
          </button>
        </div>
      </div>
    </div>
  );
}