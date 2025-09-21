import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Clock, 
  Star,
  ChevronRight,
  PlayCircle
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Entrega instantânea em 2 minutos!
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Sua Loja
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                Preferida
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Produtos premium, entrega instantânea e suporte 24/7. 
                Descubra por que somos a escolha de milhares de clientes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-white/80">Produtos Premium</div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-white">2min</div>
                <div className="text-sm text-white/80">Entrega Máxima</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl font-semibold transition-all hover:scale-105 shadow-2xl"
              >
                Explorar Produtos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold backdrop-blur-sm"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Como Funciona
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium text-white">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">5.0 Avaliação</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Produtos Populares
                    </h3>
                    <p className="text-gray-600">Mais vendidos hoje</p>
                  </div>

                  {/* Product List */}
                  <div className="space-y-4">
                    {[
                      { name: "Netflix Premium", price: "500.00 MT", icon: "🎬" },
                      { name: "Free Fire 💎", price: "250.00 MT", icon: "🔥" },
                      { name: "Spotify Premium", price: "300.00 MT", icon: "🎵" }
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{product.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-600">Entrega instantânea</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{product.price}</div>
                          <div className="text-xs text-gray-500">2 min</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full gradient-primary text-primary-foreground font-semibold py-3 rounded-xl">
                    Ver Todos os Produtos
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg animate-bounce">
                <Zap className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg animate-pulse">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}