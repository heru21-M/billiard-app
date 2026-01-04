import { Plus } from 'lucide-react';

export function FloatingButton() {
  return (
    <button
      className="fixed right-6 bottom-32 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center z-50 hover:scale-110 transition-transform"
      style={{
        boxShadow: '0 8px 32px rgba(251, 146, 60, 0.4), 0 4px 16px rgba(234, 179, 8, 0.3)',
      }}
    >
      <Plus className="w-7 h-7 text-white" strokeWidth={3} />
    </button>
  );
}
