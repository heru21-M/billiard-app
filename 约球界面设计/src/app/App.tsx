import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { EventsPage } from './components/EventsPage';
import { ClubsPage } from './components/ClubsPage';
import { MatchesPage } from './components/MatchesPage';
import { ShopPage } from './components/ShopPage';
import { ProfilePage } from './components/ProfilePage';
import { FloatingButton } from './components/FloatingButton';
import { StatusBar } from './components/StatusBar';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeTab, setActiveTab] = useState('events');

  const renderPage = () => {
    switch (activeTab) {
      case 'events':
        return <EventsPage />;
      case 'clubs':
        return <ClubsPage />;
      case 'matches':
        return <MatchesPage />;
      case 'shop':
        return <ShopPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <EventsPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      
      {/* 状态栏 */}
      <StatusBar />

      {/* 主内容区域 */}
      <main className="max-w-md mx-auto px-4 pt-12 py-6 pb-24 bg-gray-50 min-h-screen">
        {renderPage()}
      </main>

      {/* 悬浮按钮 */}
      <FloatingButton />

      {/* 底部导航栏 */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}