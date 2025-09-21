import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Clock, 
  Headphones,
  CreditCard,
  Star,
  Users,
  CheckCircle,
  Smartphone,
  Globe
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Entrega Instantânea",
      description: "Receba seus produtos em até 2 minutos após a confirmação do pagamento",
      color: "from-yellow-500 to-orange-500",
      stats: "< 2 min"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Transações protegidas com criptografia de ponta e garantia total",
      color: "from-green-500 to-emerald-500",
      stats: "SSL"
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento especializado disponível a qualquer hora do dia",
      color: "from-blue-500 to-cyan-500",
      stats: "24/7"
    },
    {
      icon: CreditCard,
      title: "Pagamento Fácil",
      description: "Aceita M-Pesa e outros métodos populares em Moçambique",
      color: "from-purple-500 to-violet-500",
      stats: "M-Pesa"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Apenas produtos originais e de alta qualidade para nossos clientes",
      color: "from-pink-500 to-rose-500",
      stats: "5.0 ⭐"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Mais de 10.000 clientes satisfeitos e crescendo a cada dia",
      color: "from-indigo-500 to-blue-500",
      stats: "10K+"
    }
  ];

  const achievements = [
    {
      number: "99.9%",
      label: "Uptime",
      description: "Disponibilidade do serviço"
    },
    {
      number: "10K+",
      label: "Clientes",
      description: "Usuários ativos mensais"
    },
    {
      number: "50+",
      label: "Produtos",
      description: "Itens disponíveis"
    },
    {
      number: "2min",
      label: "Entrega",
      description: "Tempo médio de entrega"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-primary text-primary-foreground border-0">
            Por que escolher a MozStore?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Melhor <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Experiência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um serviço premium com as melhores práticas do mercado digital
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.stats}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Garantido</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 gradient-hero opacity-10 rounded-3xl" />
          <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Números que Impressionam</h3>
              <p className="text-muted-foreground">
                Nossa performance fala por si só
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl shadow-card">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <Smartphone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">App Mobile</div>
              <div className="text-sm text-muted-foreground">Compatível com todos os dispositivos</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl shadow-card">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold">Moçambique</div>
              <div className="text-sm text-muted-foreground">Empresa 100% nacional</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl shadow-card">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold">Verificado</div>
              <div className="text-sm text-muted-foreground">Empresa licenciada e registrada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}