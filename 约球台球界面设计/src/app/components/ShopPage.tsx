import { Search, MapPin, Bell } from 'lucide-react';
import { Input } from './ui/input';
import { ProductCard } from './ProductCard';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

export function ShopPage() {
  const products = [
    {
      id: 1,
      name: "O'Min手工黑檀台球杆",
      image: 'https://images.unsplash.com/photo-1766345655631-7efbdda8e13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGN1ZSUyMHN0aWNrfGVufDF8fHx8MTc2NzUxNTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '3288',
      brand: "O'MIN",
      sales: 52,
      isPro: false,
    },
    {
      id: 2,
      name: '专业防滑台球巧克',
      image: 'https://images.unsplash.com/photo-1651849309664-640c6ecb44e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY2hhbGslMjBibHVlfGVufDF8fHx8MTc2NzUxNTU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '15',
      brand: 'TAOM',
      sales: 3400,
      isPro: false,
    },
    {
      id: 3,
      name: 'Aramith 诺标赛专用球',
      image: 'https://images.unsplash.com/photo-1707012187193-5eff06614c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwYmFsbHMlMjBzZXR8ZW58MXx8fHwxNzY3NTE1NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '1280',
      brand: 'Aramith',
      sales: 156,
      isPro: false,
    },
    {
      id: 4,
      name: 'PREDATOR 战警系列球杆',
      image: 'https://images.unsplash.com/photo-1761012321415-b5218c57d428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGN1ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njc1MTU1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '5680',
      brand: 'PREDATOR',
      sales: 89,
      isPro: false,
    },
    {
      id: 5,
      name: '星牌台球 专业比赛用球 斯诺克球',
      image: 'https://images.unsplash.com/photo-1760276148671-0597f0ebec49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwYmFsbHMlMjByYWNrJTIwdHJpYW5nbGV8ZW58MXx8fHwxNzY3NTE1NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '680',
      brand: 'STAR',
      sales: 445,
      isPro: false,
    },
    {
      id: 6,
      name: '台球巧克 防滑粉 蓝钻巧粉',
      image: 'https://images.unsplash.com/photo-1758978685891-877affc82ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZCUyMGFjY2Vzc29yaWVzJTIwcG93ZGVyfGVufDF8fHx8MTc2NzUxNTU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      price: '65',
      brand: 'TAOM',
      sales: 1234,
      isPro: false,
    },
  ];

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      toast.success('已加入购物车', {
        description: product.name,
      });
    }
  };

  return (
    <div>
      {/* 顶部导航 */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4 -mt-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>杭州</span>
          </button>
          <h1 className="text-base font-semibold">器材交易</h1>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="台球杆"
            className="pl-10 bg-white border-0 rounded-full shadow-sm"
          />
        </div>

        {/* 分类标签 */}
        <div className="flex gap-2 mt-4">
          <Badge className="bg-green-100 text-green-700 cursor-pointer hover:bg-green-200">
            全部
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
            球杆
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-gray-50">
            巧克
          </Badge>
        </div>
      </div>

      {/* 产品网格 */}
      <div className="flex gap-3">
        {/* 左列 */}
        <div className="flex-1 flex flex-col gap-3">
          <ProductCard
            {...products[0]}
            isLarge={true}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            {...products[1]}
            isLarge={false}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            {...products[4]}
            isLarge={false}
            onAddToCart={handleAddToCart}
          />
        </div>
        
        {/* 右列 */}
        <div className="flex-1 flex flex-col gap-3">
          <ProductCard
            {...products[2]}
            isLarge={false}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            {...products[3]}
            isLarge={true}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            {...products[5]}
            isLarge={false}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}