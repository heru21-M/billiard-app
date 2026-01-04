import { Calendar, MapPin, Users, Trophy, ArrowRight, Flame, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventCardProps {
  id: number;
  clubName: string;
  clubAvatar: string;
  eventType: string;
  eventTag?: string;
  title: string;
  prize: string;
  entryFee: string;
  date: string;
  venue: string;
  currentParticipants: number;
  maxParticipants: number;
  eventImage?: string;
  gameType: string;
  onRegister: (id: number) => void;
}

export function EventCard({
  id,
  clubName,
  clubAvatar,
  eventType,
  eventTag,
  title,
  prize,
  entryFee,
  date,
  venue,
  currentParticipants,
  maxParticipants,
  eventImage,
  gameType,
  onRegister,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden mb-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        {/* 顶部：俱乐部信息和标签 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img
              src={clubAvatar}
              alt={clubName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h3 className="text-base">{clubName}</h3>
          </div>
          {eventTag && (
            <Badge className="bg-red-50 text-red-500 border-transparent flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-red-500" />
              {eventTag}
            </Badge>
          )}
        </div>

        {/* 主体内容区域：左侧图片 + 右侧信息 */}
        <div className="flex gap-4 mb-3">
          {/* 左侧：赛事图片 */}
          {eventImage && (
            <div className="flex-shrink-0">
              <div className="w-32 h-24 rounded-2xl overflow-hidden relative bg-gray-100">
                <ImageWithFallback
                  src={eventImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* 右侧：赛事信息 */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* 赛事标题 */}
            <h2 className="text-base font-bold leading-snug mb-3 line-clamp-2">{title}</h2>
            
            {/* 奖金和报名费 */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div>
                <div className="text-xs text-gray-500 mb-1">最高奖金</div>
                <div className="font-medium">¥{prize}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">报名费</div>
                <div className="font-medium">¥{entryFee}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 时间和地点 */}
        <div className="flex items-center gap-6 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{venue}</span>
          </div>
        </div>

        {/* 底部：报名进度和按钮 */}
        <div className="flex items-center gap-3">
          {/* 报名进度 */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Users className="w-3.5 h-3.5" />
                <span>名额报满即止</span>
              </div>
              <span className="text-xs font-medium">
                {currentParticipants}/{maxParticipants}人
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{
                  width: `${(currentParticipants / maxParticipants) * 100}%`,
                }}
              />
            </div>
          </div>
          
          {/* 报名按钮 */}
          <Button
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 h-11 rounded-full shadow-sm hover:shadow-md flex-shrink-0"
            onClick={() => onRegister(id)}
          >
            立即报名
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}