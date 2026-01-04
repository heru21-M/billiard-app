import { MapPin, Star, Users, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VenueCardProps {
  id: number;
  name: string;
  address: string;
  rating: number;
  price: string;
  image: string;
  tables: number;
  distance: string;
  openTime: string;
  onBook: (id: number) => void;
}

export function VenueCard({
  id,
  name,
  address,
  rating,
  price,
  image,
  tables,
  distance,
  openTime,
  onBook,
}: VenueCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-green-500">
          {openTime}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="flex-1">{name}</h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{address} · {distance}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{tables} 张球台</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{price}</span>
          </div>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-sm hover:shadow-md rounded-full h-10 transition-all font-medium text-sm" 
          onClick={() => onBook(id)}
        >
          立即预约
        </button>
      </CardContent>
    </Card>
  );
}