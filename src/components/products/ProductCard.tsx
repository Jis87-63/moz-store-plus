import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { 
  Star, 
  ShoppingCart, 
  Eye, 
  Heart,
  Zap,
  Crown
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isPopular?: boolean;
  isPremium?: boolean;
  badges?: string[];
  deliveryTime: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group cursor-pointer shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary to-accent">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isPopular && (
              <Badge className="gradient-primary text-primary-foreground border-0 shadow-lg">
                <Crown className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="shadow-lg">
                -{discountPercentage}%
              </Badge>
            )}
            {product.badges?.map((badge) => (
              <Badge key={badge} variant="secondary" className="shadow-lg">
                {badge}
              </Badge>
            ))}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-lg backdrop-blur"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-destructive text-destructive' : ''}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-lg backdrop-blur"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Premium Badge */}
          {product.isPremium && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-warning text-warning-foreground border-0 shadow-lg">
                <Zap className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Zap className="h-3 w-3 text-success" />
            <span>{product.deliveryTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews} avaliações)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-primary">
            {product.price.toFixed(2)} MT
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toFixed(2)} MT
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gradient-primary text-primary-foreground font-medium group-hover:shadow-glow transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}