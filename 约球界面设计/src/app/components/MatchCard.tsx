import { MapPin, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface MatchCardProps {
  id: number;
  userName: string;
  userAvatar: string;
  level: string;
  time: string;
  description: string;
  venue: string;
  currentPlayers: number;
  maxPlayers: number;
  distance: string;
  isOnline?: boolean;
  onJoin: (id: number) => void;
}

export function MatchCard({
  id,
  userName,
  userAvatar,
  level,
  time,
  description,
  venue,
  currentPlayers,
  maxPlayers,
  distance,
  isOnline = false,
  onJoin,
}: MatchCardProps) {
  // 根据水平返回不同的徽章颜色
  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case '大师':
        return 'bg-purple-100 text-purple-700';
      case '精英':
        return 'bg-blue-100 text-blue-700';
      case '业余':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-green-100 text-green-700';
    }
  };

  return (
    <Card className="overflow-hidden mb-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        {/* 用户信息 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={userAvatar}
                alt={userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              {isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span>{userName}</span>
                <Badge className={`${getLevelBadgeStyle(level)} text-xs`}>
                  {level}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <span className="text-orange-500">🕐</span>
                <span>{time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4 text-blue-500" />
            <span>
              {currentPlayers}/{maxPlayers}
            </span>
          </div>
        </div>

        {/* 约球描述 */}
        <p className="text-gray-700 bg-gray-50 p-3 rounded-lg mb-3 text-sm">
          "{description}"
        </p>

        {/* 场馆和距离信息 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>{venue}</span>
            <span className="text-gray-400">·</span>
            <span>{distance}</span>
          </div>

          <Button
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 h-10 rounded-full shadow-sm hover:shadow-md"
            onClick={() => onJoin(id)}
          >
            申请加入
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}