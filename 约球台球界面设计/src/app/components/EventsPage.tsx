import { Search, MapPin, Bell, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { EventCard } from './EventCard';
import { toast } from 'sonner';
import eventImage from 'figma:asset/d2d6bc5b210194a0945d99f8fa8a49c4d6fa437e.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function EventsPage() {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'finished'>('ongoing');

  const events = [
    {
      id: 1,
      clubName: '星辉台球俱乐部',
      clubAvatar: 'https://images.unsplash.com/photo-1669545794980-c71adcb93979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGNsdWIlMjBsb2dvfGVufDF8fHx8MTc2NzUxMzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      eventType: '俱乐部公开赛',
      eventTag: '火热报名',
      title: '悦动杯·杭州业余斯诺克挑战赛',
      prize: '5000',
      entryFee: '98',
      date: '12月20日·18:30',
      venue: '星辉台球俱乐部',
      currentParticipants: 28,
      maxParticipants: 32,
      eventImage: 'https://images.unsplash.com/photo-1703531297357-ab23f011e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGNoYW1waW9uc2hpcHxlbnwxfHx8fDE3NjcyODUzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gameType: 'SNOOKER',
    },
    {
      id: 2,
      clubName: 'Q-Zone台球社',
      clubAvatar: 'https://images.unsplash.com/photo-1763830915835-98ab48194d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwYmFsbHMlMjByYWNrfGVufDF8fHx8MTc2NzUxMzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      eventType: '俱乐部公开赛',
      eventTag: '火热报名',
      title: '社区中式台球·让球排名赛(第12季)',
      prize: '2000',
      entryFee: '50',
      date: '12月22日·14:00',
      venue: 'Q-Zone台球运动馆',
      currentParticipants: 18,
      maxParticipants: 24,
      eventImage: 'https://images.unsplash.com/photo-1686523090965-8d570b6cf68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMHBvb2wlMjB0YWJsZXxlbnwxfHx8fDE3NjcyNDMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gameType: 'POOL',
    },
    {
      id: 3,
      clubName: '冠军台球会馆',
      clubAvatar: 'https://images.unsplash.com/photo-1761591847985-2184afaab747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NzUxMzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      eventType: '城市联赛',
      title: '2026年度台球城市联赛·杭州站',
      prize: '10000',
      entryFee: '188',
      date: '1月5日·10:00',
      venue: '冠军台球会馆',
      currentParticipants: 45,
      maxParticipants: 64,
      eventImage: 'https://images.unsplash.com/photo-1703531297357-ab23f011e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGNoYW1waW9uc2hpcHxlbnwxfHx8fDE3NjcyODUzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gameType: 'SNOOKER',
    },
  ];

  const handleRegister = (eventId: number) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      toast.success('报名成功！', {
        description: `已成功报名 ${event.title}`,
      });
    }
  };

  const handleBannerClick = () => {
    toast.success('查看详情', {
      description: '正在打开赛事详情页面...',
    });
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
          <h1 className="text-base font-semibold">赛事活动</h1>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="搜索赛事名称、场馆..."
            className="pl-10 bg-white border-0 rounded-full shadow-sm"
          />
        </div>

        {/* 筛选标签 */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          <Badge className="bg-green-100 text-green-700 cursor-pointer hover:bg-green-200 whitespace-nowrap">
            全部赛事
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            斯诺克
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            中式台球
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 whitespace-nowrap">
            美式九球
          </Badge>
          <button className="flex items-center gap-1 text-gray-600 text-sm whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" />
            <span>筛选</span>
          </button>
        </div>
      </div>

      {/* Banner 宣传海报 */}
      <div 
        className="mb-4 rounded-2xl overflow-hidden shadow-lg cursor-pointer active:scale-98 transition-transform"
        onClick={handleBannerClick}
      >
        <div className="relative aspect-[2.5/1] bg-gradient-to-br from-green-700 to-green-900">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1534463868211-1203a5c900a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYmlsbGlhcmQlMjB0b3VybmFtZW50JTIwcG9vbHxlbnwxfHx8fDE3Njc1MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="台球比赛宣传海报"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/50 to-green-700/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <div className="inline-block px-3 py-1 bg-orange-500 rounded-full mb-2 shadow-lg">
              <span className="text-xs font-semibold flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                </svg>
                重磅赛事
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                </svg>
              </span>
            </div>
            <h3 className="font-bold text-xl text-center mb-1.5 drop-shadow-lg whitespace-nowrap">
              2026年冠军杯·全国台球邀请赛
            </h3>
            <p className="text-base text-center text-white drop-shadow-md whitespace-nowrap">
              奖金池¥50,000 • 1月15日开赛
            </p>
          </div>
        </div>
      </div>

      {/* 状态标签 - 进行中/已结束 */}
      <div className="flex items-center gap-6 mb-4 mt-8">
        <button
          onClick={() => setActiveTab('ongoing')}
          className={`font-medium transition-all ${
            activeTab === 'ongoing'
              ? 'text-green-600'
              : 'text-gray-400'
          }`}
        >
          进行中
        </button>
        <button
          onClick={() => setActiveTab('finished')}
          className={`font-medium transition-all ${
            activeTab === 'finished'
              ? 'text-gray-600'
              : 'text-gray-400'
          }`}
        >
          已结束
        </button>
      </div>

      {/* 赛事列表 */}
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} {...event} onRegister={handleRegister} />
        ))}
      </div>
    </div>
  );
}