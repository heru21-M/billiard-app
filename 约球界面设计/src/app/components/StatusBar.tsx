import { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

export function StatusBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 px-6 py-2 flex items-center justify-between text-xs max-w-md mx-auto">
      {/* 左侧：时间 */}
      <div className="font-semibold text-gray-900">
        {formatTime(currentTime)}
      </div>

      {/* 右侧：网络、WiFi、电量 */}
      <div className="flex items-center gap-2">
        {/* WiFi */}
        <Wifi className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />

        {/* 电量 */}
        <div className="flex items-center gap-0.5">
          <span className="text-gray-900 font-semibold">95%</span>
          <Battery className="w-4 h-4 text-gray-900" strokeWidth={2.5} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}