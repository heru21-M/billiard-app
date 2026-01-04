import { ShoppingBag, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  brand: string;
  sales: number;
  isPro?: boolean;
  isLarge?: boolean;
  onAddToCart: (id: number) => void;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  brand,
  sales,
  isPro = false,
  isLarge = false,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-0">
        <div className={`relative overflow-hidden bg-gray-50 ${isLarge ? 'h-80' : 'h-48'}`}>
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`${isLarge ? 'p-3' : 'p-2'}`}>
          <h3 className={`mb-2 line-clamp-2 text-sm ${isLarge ? 'min-h-[2.5rem]' : 'min-h-[2rem]'}`}>{name}</h3>

          <div className={`flex items-end justify-between ${isLarge ? 'mb-2' : 'mb-1'}`}>
            <div>
              <span className="text-green-600">¥{price}</span>
            </div>
            <button
              onClick={() => onAddToCart(id)}
              className={`${isLarge ? 'w-8 h-8' : 'w-7 h-7'} rounded-lg bg-pink-400 flex items-center justify-center hover:bg-pink-500 transition-colors`}
            >
              <ShoppingBag className={`${isLarge ? 'w-4 h-4' : 'w-3.5 h-3.5'} text-white`} />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{brand}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span>已售 {sales}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}