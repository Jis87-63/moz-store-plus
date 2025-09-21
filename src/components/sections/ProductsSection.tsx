import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, Product } from "@/components/products/ProductCard";
import { 
  Gamepad2, 
  Music, 
  Tv, 
  BookOpen,
  Gift,
  Smartphone,
  Crown,
  Filter
} from "lucide-react";

import netflixIcon from "@/assets/netflix-icon.jpg";
import freefireIcon from "@/assets/freefire-icon.jpg";
import spotifyIcon from "@/assets/spotify-icon.jpg";
import disneyIcon from "@/assets/disney-icon.jpg";
import pubgIcon from "@/assets/pubg-icon.jpg";
import ebookIcon from "@/assets/ebook-icon.jpg";

// Mock products data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Netflix Premium",
    description: "Acesso completo a todos os filmes e séries em HD e 4K",
    price: 500.00,
    originalPrice: 650.00,
    image: netflixIcon,
    category: "Streaming",
    rating: 4.9,
    reviews: 1250,
    isPopular: true,
    badges: ["Mais Vendido"],
    deliveryTime: "2 min"
  },
  {
    id: "2", 
    name: "Free Fire 💎 12000",
    description: "12.000 diamantes para Free Fire - entrega instantânea",
    price: 250.00,
    originalPrice: 300.00,
    image: freefireIcon,
    category: "Gaming",
    rating: 4.8,
    reviews: 980,
    isPremium: true,
    badges: ["Oferta"],
    deliveryTime: "1 min"
  },
  {
    id: "3",
    name: "Spotify Premium",
    description: "Música sem anúncios, qualidade superior e downloads offline",
    price: 300.00,
    image: spotifyIcon,
    category: "Streaming",
    rating: 4.7,
    reviews: 750,
    deliveryTime: "2 min"
  },
  {
    id: "4",
    name: "Disney+ Premium",
    description: "Todo o universo Disney, Marvel, Star Wars e mais",
    price: 400.00,
    originalPrice: 500.00,
    image: disneyIcon, 
    category: "Streaming",
    rating: 4.8,
    reviews: 600,
    badges: ["Novo"],
    deliveryTime: "2 min"
  },
  {
    id: "5",
    name: "PUBG Mobile UC",
    description: "8100 UC para PUBG Mobile - skins e itens exclusivos",
    price: 350.00,
    image: pubgIcon,
    category: "Gaming", 
    rating: 4.6,
    reviews: 420,
    deliveryTime: "1 min"
  },
  {
    id: "6",
    name: "As 48 Leis do Poder",
    description: "Ebook completo - estratégias de poder e influência",
    price: 150.00,
    originalPrice: 200.00,
    image: ebookIcon,
    category: "Ebooks",
    rating: 4.9,
    reviews: 300,
    badges: ["Bestseller"],
    deliveryTime: "Instantâneo"
  }
];

const categories = [
  { id: "all", label: "Todos", icon: Crown },
  { id: "streaming", label: "Streaming", icon: Tv },
  { id: "gaming", label: "Gaming", icon: Gamepad2 },
  { id: "ebooks", label: "Ebooks", icon: BookOpen },
  { id: "music", label: "Música", icon: Music },
  { id: "giftcards", label: "Gift Cards", icon: Gift },
  { id: "mobile", label: "Mobile", icon: Smartphone }
];

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = mockProducts.filter(product => {
    if (selectedCategory === "all") return true;
    return product.category.toLowerCase() === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    }
  });

  const handleViewDetails = (product: Product) => {
    console.log("View details for:", product.name);
    // TODO: Navigate to product details page
  };

  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gradient-primary text-primary-foreground border-0">
            Produtos Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção cuidadosa de produtos digitais premium com entrega instantânea
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1">
            <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full bg-card shadow-card">
              {categories.map(({ id, label, icon: Icon }) => (
                <TabsTrigger 
                  key={id} 
                  value={id}
                  className="flex items-center space-x-2 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border bg-card text-card-foreground"
            >
              <option value="popular">Mais Populares</option>
              <option value="price-low">Menor Preço</option>
              <option value="price-high">Maior Preço</option>
              <option value="rating">Melhor Avaliação</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 border-2 hover:gradient-primary hover:text-primary-foreground hover:border-transparent transition-all"
          >
            Carregar Mais Produtos
          </Button>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              title: "Streaming Premium",
              description: "Netflix, Disney+, Spotify e mais",
              icon: Tv,
              count: "15+ serviços",
              color: "from-red-500 to-pink-500"
            },
            {
              title: "Gaming",
              description: "Diamantes, UC, V-Bucks e créditos",
              icon: Gamepad2,
              count: "20+ jogos",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Ebooks",
              description: "Livros digitais e manuais premium",
              icon: BookOpen,
              count: "50+ títulos",
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Gift Cards",
              description: "Google Play, App Store e mais",
              icon: Gift,
              count: "10+ lojas",
              color: "from-purple-500 to-violet-500"
            }
          ].map((category, index) => (
            <div 
              key={index}
              className="relative group p-6 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer border border-border hover:border-primary/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{category.count}</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Explorar →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}