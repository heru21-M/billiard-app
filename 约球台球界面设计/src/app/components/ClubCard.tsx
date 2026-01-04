import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ClubCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  distance: string;
  pricePerHour: string;
  tags: string[];
  status: 'open' | 'open24h' | 'closed';
  onBook: (id: number) => void;
}

export function ClubCard({
  id,
  name,
  image,
  rating,
  distance,
  pricePerHour,
  tags,
  status,
  onBook,
}: ClubCardProps) {
  const statusConfig = {
    open: { text: 'OPEN NOW', color: 'bg-green-500' },
    open24h: { text: '24 HOURS', color: 'bg-red-500' },
    closed: { text: 'CLOSED', color: 'bg-gray-500' },
  };

  return (
    <Card className="overflow-hidden mb-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative h-32 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          {/* 特色标签 - 移到图片左上角 */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[60%]">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-orange-50 text-orange-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
          {/* 评分 */}
          <Badge className="absolute top-3 right-3 bg-white text-gray-900">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
            {rating}
          </Badge>
        </div>

        <div className="px-4 pt-4 pb-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="mb-1.5">{name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{distance}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl">¥{pricePerHour}</p>
              <span className="text-sm text-gray-500">/H</span>
            </div>
          </div>

          {/* 预订按钮 */}
          <button
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-sm hover:shadow-md rounded-full h-10 transition-all font-medium text-sm"
            onClick={() => onBook(id)}
          >
            立即预订台位
          </button>
        </div>
      </CardContent>
    </Card>
  );
}