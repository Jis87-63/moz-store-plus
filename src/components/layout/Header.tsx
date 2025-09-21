import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  User, 
  Search,
  Moon,
  Sun
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  cartItems: number;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ cartItems, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#" },
    { label: "Produtos", href: "#produtos" },
    { label: "Suporte", href: "#suporte" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">MZ</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MozStore.Virtual
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center max-w-md w-full mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Toggle - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-accent"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative hover:bg-accent">
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs gradient-primary">
                {cartItems}
              </Badge>
            )}
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">MZ</span>
                  </div>
                  <span className="text-lg font-bold">MozStore.Virtual</span>
                </div>
                
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-4 border-t space-y-3">
                  <Button className="w-full gradient-primary text-primary-foreground font-medium">
                    Fazer Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Registrar
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden border-t px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}