import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CartProvider, useCart } from "@/contexts/CartContext";
import { Product } from "@/components/products/ProductCard";

function IndexContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { addItem, totalItems } = useCart();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        cartItems={totalItems}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main>
        <HeroSection />
        <ProductsSection onAddToCart={handleAddToCart} />
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <CartProvider>
      <IndexContent />
    </CartProvider>
  );
};

export default Index;
