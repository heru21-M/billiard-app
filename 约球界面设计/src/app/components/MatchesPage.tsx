import { Search, MapPin, Bell } from 'lucide-react';
import { Input } from './ui/input';
import { MatchCard } from './MatchCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import matchImage from 'figma:asset/68b0966a53f58e10549cdf9b547a2ad657f4cae3.png';

export function MatchesPage() {
  const matches = [
    {
      id: 1,
      userName: '冷静的杆头',
      userAvatar: 'https://images.unsplash.com/flagged/photo-1596479042555-9265a7fa7983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ5ODY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: '精英',
      time: '今天 19:30',
      description: '练切球，不赌博，环境好的来，球员AA。',
      venue: '星辉台球馆',
      currentPlayers: 1,
      maxPlayers: 2,
      distance: '0.5KM',
      isOnline: true,
    },
    {
      id: 2,
      userName: '杭州奥沙利文',
      userAvatar: 'https://images.unsplash.com/photo-1633707167372-f485cd0d5035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXRobGV0ZSUyMGZhY2V8ZW58MXx8fHwxNzY3NTEzMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: '大师',
      time: '今天 20:00',
      description: '寻找能打斯诺克147的高手交流。',
      venue: '绅士台球竞技中心',
      currentPlayers: 1,
      maxPlayers: 4,
      distance: '2.3KM',
      isOnline: true,
    },
    {
      id: 3,
      userName: '一杆清台',
      userAvatar: 'https://images.unsplash.com/photo-1672462478040-a5920e2c23d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NDcwMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: '业余',
      time: '今天 21:00',
      description: '爱鸟求带，主要想练习一下发力。',
      venue: 'Q-Zone台球',
      currentPlayers: 2,
      maxPlayers: 4,
      distance: '1.5KM',
      isOnline: false,
    },
    {
      id: 4,
      userName: '台球小王子',
      userAvatar: 'https://images.unsplash.com/photo-1633177188754-980c2a6b6266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ1NzY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: '精英',
      time: '明天 14:00',
      description: '周末组局，打中式八球，水平不限欢迎新手。',
      venue: '星辉台球俱乐部',
      currentPlayers: 3,
      maxPlayers: 6,
      distance: '3.8KM',
      isOnline: true,
    },
  ];

  const handleJoin = (matchId: number) => {
    const match = matches.find((m) => m.id === matchId);
    if (match) {
      toast.success('申请成功！', {
        description: `已向 ${match.userName} 发送加入申请`,
      });
    }
  };

  return (
    <div>
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4 -mt-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>杭州</span>
          </button>
          <h1 className="text-base font-semibold">约球组局</h1>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="搜索场馆、赛事或球友..."
            className="pl-10 bg-white border-0 rounded-full shadow-sm"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <Badge className="bg-green-100 text-green-700 cursor-pointer hover:bg-green-200">
            最新
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
            距离
          </Badge>
        </div>
      </div>

      {/* 约球列表 */}
      <div className="space-y-4">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} onJoin={handleJoin} />
        ))}
      </div>
    </div>
  );
}