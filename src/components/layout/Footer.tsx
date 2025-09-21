import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Shield,
  Clock
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">MZ</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                MozStore.Virtual
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua loja digital confiável para produtos e serviços premium. 
              Entrega rápida em até 2 minutos, suporte 24/7 e os melhores preços do mercado.
            </p>
            <div className="flex items-center space-x-2 text-sm text-success">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Entrega em 2 minutos</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-success">
              <Shield className="h-4 w-4" />
              <span className="font-medium">100% Seguro e Confiável</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="space-y-2">
              {[
                "Início",
                "Produtos", 
                "Como Comprar",
                "Status do Pedido",
                "Promoções",
                "Programa de Fidelidade"
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Suporte</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">mozstoredigitalv1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+258 84 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Maputo, Moçambique</span>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Central de Ajuda
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Chat em Tempo Real
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Receba ofertas exclusivas e novidades diretamente no seu email.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Seu email..."
                className="bg-background"
              />
              <Button className="w-full gradient-primary text-primary-foreground font-medium">
                Inscrever-se
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Siga-nos</p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={href} aria-label={label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MozStore.Virtual. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Site 100% Seguro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}