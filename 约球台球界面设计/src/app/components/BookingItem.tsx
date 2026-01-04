import { Calendar, Clock, MapPin, Users, MoreVertical } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface BookingItemProps {
  id: number;
  venueName: string;
  address: string;
  date: string;
  time: string;
  duration: number;
  players: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  onCancel?: (id: number) => void;
}

export function BookingItem({
  id,
  venueName,
  address,
  date,
  time,
  duration,
  players,
  status,
  onCancel,
}: BookingItemProps) {
  const statusColors = {
    upcoming: 'bg-green-100 text-green-700',
    completed: 'bg-gray-100 text-gray-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const statusLabels = {
    upcoming: '即将进行',
    completed: '已完成',
    cancelled: '已取消',
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekday = weekdays[date.getDay()];
    return `${month}月${day}日 ${weekday}`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3>{venueName}</h3>
              <Badge className={statusColors[status]}>
                {statusLabels[status]}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{address}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{time} · {duration}小时</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{players}人</span>
          </div>
        </div>

        {status === 'upcoming' && onCancel && (
          <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
            <Button variant="outline" size="sm" className="flex-1">
              修改预约
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-red-600 hover:text-red-700"
              onClick={() => onCancel(id)}
            >
              取消预约
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}