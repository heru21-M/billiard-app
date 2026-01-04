import { Search, MapPin, Bell, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ClubCard } from './ClubCard';
import { toast } from 'sonner';
import clubImage1 from 'figma:asset/4d878dc62c33fac6cc409f89c61deca602821d25.png';

export function ClubsPage() {
  const clubs = [
    {
      id: 1,
      name: 'Q-Zone 24h 自助台球',
      image: 'https://images.unsplash.com/photo-1757031694671-03df56cb97b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwaGFsbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzI4NDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      distance: '1.5KM',
      pricePerHour: '39',
      tags: ['24小时', '全程自助', '高性价比'],
      status: 'open24h' as const,
    },
    {
      id: 2,
      name: '绅士台球竞技中心',
      image: 'https://images.unsplash.com/photo-1686523090965-8d570b6cf68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMHBvb2wlMjB0YWJsZXxlbnwxfHx8fDE3NjcyNDMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      distance: '2.3KM',
      pricePerHour: '65',
      tags: ['美女陪教', '专业斯诺克', '免费停车'],
      status: 'open24h' as const,
    },
    {
      id: 3,
      name: '星辉台球俱乐部',
      image: 'https://images.unsplash.com/photo-1764212694920-bee4f5b162ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB2ZW51ZSUyMG5pZ2h0fGVufDF8fHx8MTc2NzI4NDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      distance: '3.8KM',
      pricePerHour: '88',
      tags: ['高端场馆', '专业教练', '会员优惠'],
      status: 'open' as const,
    },
    {
      id: 4,
      name: 'Q-Zone 市中心店',
      image: 'https://images.unsplash.com/photo-1757031694671-03df56cb97b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwaGFsbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzI4NDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      distance: '1.2KM',
      pricePerHour: '45',
      tags: ['新店开业', '环境优雅', '交通便利'],
      status: 'open' as const,
    },
  ];

  const handleBook = (clubId: number) => {
    const club = clubs.find((c) => c.id === clubId);
    if (club) {
      toast.success('预订成功！', {
        description: `已预订 ${club.name}`,
      });
    }
  };

  return (
    <div>
      {/* 顶部导航栏 */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4 -mt-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>杭州</span>
          </button>
          <h1 className="text-base font-semibold">台球场馆</h1>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="搜索场馆名称、地点..."
            className="pl-10 bg-white border-0 rounded-full shadow-sm"
          />
        </div>

        {/* 筛选标签 */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          <Badge className="bg-green-100 text-green-700 cursor-pointer hover:bg-green-200 whitespace-nowrap">
            全部场馆
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            24小时
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            距离最近
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            高性价比
          </Badge>
          <button className="flex items-center gap-1 text-gray-600 text-sm whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" />
            <span>筛选</span>
          </button>
        </div>
      </div>

      {/* 场馆列表 */}
      <div className="space-y-4">
        {clubs.map((club) => (
          <ClubCard key={club.id} {...club} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
}