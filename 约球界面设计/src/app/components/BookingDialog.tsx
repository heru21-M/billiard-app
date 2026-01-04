import { Calendar, Clock, MapPin, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useState } from 'react';

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  venue: {
    id: number;
    name: string;
    address: string;
  } | null;
  onConfirm: (booking: {
    venueId: number;
    date: string;
    time: string;
    duration: number;
    players: number;
  }) => void;
}

export function BookingDialog({ open, onClose, venue, onConfirm }: BookingDialogProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(2);
  const [players, setPlayers] = useState(4);

  const dates = [
    { value: '2026-01-02', label: '今天', day: '1月2日' },
    { value: '2026-01-03', label: '明天', day: '1月3日' },
    { value: '2026-01-04', label: '后天', day: '1月4日' },
    { value: '2026-01-05', label: '周日', day: '1月5日' },
    { value: '2026-01-06', label: '周一', day: '1月6日' },
  ];

  const times = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  const durations = [1, 2, 3, 4];
  const playerCounts = [2, 4, 6, 8];

  const handleConfirm = () => {
    if (venue && selectedDate && selectedTime) {
      onConfirm({
        venueId: venue.id,
        date: selectedDate,
        time: selectedTime,
        duration,
        players,
      });
      onClose();
    }
  };

  if (!venue) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>预约台球</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p>{venue.name}</p>
                <p className="text-sm text-gray-500">{venue.address}</p>
              </div>
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4" />
              选择日期
            </Label>
            <div className="grid grid-cols-5 gap-2">
              {dates.map((date) => (
                <button
                  key={date.value}
                  onClick={() => setSelectedDate(date.value)}
                  className={`p-3 rounded-lg text-center transition-all ${
                    selectedDate === date.value
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <div className="text-sm">{date.label}</div>
                  <div className="text-xs opacity-75">{date.day}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4" />
              选择时间
            </Label>
            <div className="grid grid-cols-6 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg text-sm transition-all ${
                    selectedTime === time
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4" />
              时长（小时）
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`p-3 rounded-lg transition-all ${
                    duration === d
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {d} 小时
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4" />
              参与人数
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {playerCounts.map((count) => (
                <button
                  key={count}
                  onClick={() => setPlayers(count)}
                  className={`p-3 rounded-lg transition-all ${
                    players === count
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {count} 人
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              取消
            </Button>
            <Button
              className="flex-1"
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
            >
              确认预约
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}