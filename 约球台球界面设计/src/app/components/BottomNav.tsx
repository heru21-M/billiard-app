import { Trophy, House, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// 台球图标组件（数字8）
function BilliardBallIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <div className={className} style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={isActive ? "#1f2937" : "#9ca3af"} />
        <circle cx="12" cy="12" r="6" fill="white" />
        <text 
          x="12" 
          y="12" 
          textAnchor="middle" 
          dominantBaseline="central" 
          fill={isActive ? "#1f2937" : "#9ca3af"}
          fontSize="10"
          fontWeight="bold"
        >
          8
        </text>
      </svg>
    </div>
  );
}

// 奖杯图标组件（橙色色块）
function TrophyIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <div className={className} style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={isActive ? "#f97316" : "#9ca3af"} fillOpacity={isActive ? "1" : "0.3"} />
        <path 
          d="M6 9C6 8 6 8 7 8H8C8 6 9 5 11 5H13C15 5 16 6 16 8H17C18 8 18 8 18 9V10C18 11 17 12 16 12H16C16 14 14 15 13 16V17H14C15 17 15 17 15 18C15 19 15 19 14 19H10C9 19 9 19 9 18C9 17 9 17 10 17H11V16C10 15 8 14 8 12H8C7 12 6 11 6 10V9Z" 
          fill="white"
        />
      </svg>
    </div>
  );
}

// 房子图标组件（绿色色块）
function HouseIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <div className={className} style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={isActive ? "#22c55e" : "#9ca3af"} fillOpacity={isActive ? "1" : "0.3"} />
        <path 
          d="M12 6L6 11V18C6 19 7 19 7 19H10V15C10 14 11 14 11 14H13C14 14 14 14 14 15V19H17C18 19 18 19 18 18V11L12 6Z" 
          fill="white"
        />
      </svg>
    </div>
  );
}

// 购物袋图标组件（粉色色块）
function ShopIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <div className={className} style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={isActive ? "#f472b6" : "#9ca3af"} fillOpacity={isActive ? "1" : "0.3"} />
        <path 
          d="M8 10V8C8 6 10 4 12 4C14 4 16 6 16 8V10M6 10H18L17 19H7L6 10Z" 
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

// 用户图标组件（蓝色色块）
function UserIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <div className={className} style={{ width: '24px', height: '24px' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={isActive ? "#3b82f6" : "#9ca3af"} fillOpacity={isActive ? "1" : "0.3"} />
        <circle cx="12" cy="9" r="3" fill="white" />
        <path 
          d="M6 18C6 16 8 14 10 14H14C16 14 18 16 18 18" 
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'events', label: '赛事', icon: TrophyIcon, type: 'custom' as const, color: 'orange' },
    { id: 'clubs', label: '球房', icon: HouseIcon, type: 'custom' as const, color: 'green' },
    { id: 'matches', label: '约球', icon: BilliardBallIcon, type: 'custom' as const, color: 'black' },
    { id: 'shop', label: '器材', icon: ShopIcon, type: 'custom' as const, color: 'pink' },
    { id: 'profile', label: '我的', icon: UserIcon, type: 'custom' as const, color: 'blue' },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-500',
        border: 'border-green-500',
      },
      black: {
        bg: 'bg-gray-900',
        text: 'text-gray-900',
        border: 'border-gray-900',
      },
      pink: {
        bg: 'bg-pink-500',
        text: 'text-pink-500',
        border: 'border-pink-500',
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white z-50">
      <div className="max-w-md mx-auto px-2">
        <div className="grid grid-cols-5 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const colors = getColorClasses(tab.color);

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-3 transition-all duration-200 active:scale-95 ${
                  isActive ? colors.text : 'text-gray-400'
                }`}
              >
                <Icon 
                  className="mb-1 transition-all duration-200" 
                  isActive={isActive} 
                />
                
                <span
                  className={`text-[11px] transition-all duration-200 ${
                    isActive ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}