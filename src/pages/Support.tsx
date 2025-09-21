import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  ArrowLeft,
  Headphones,
  Clock,
  Star,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement support ticket system
    console.log("Support request:", formData);
  };

  const faqItems = [
    {
      question: "Quanto tempo demora a entrega?",
      answer: "Todos os nossos produtos digitais são entregues em até 2 minutos após a confirmação do pagamento."
    },
    {
      question: "Como funciona o pagamento via M-Pesa?",
      answer: "Você insere seu número M-Pesa, confirma o valor e recebe uma notificação para autorizar o pagamento."
    },
    {
      question: "Posso cancelar minha compra?",
      answer: "Devido à natureza instantânea dos produtos digitais, cancelamentos só são possíveis antes da entrega."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Você recebe atualizações por email e pode acompanhar no seu perfil na plataforma."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Header */}
      <div className="container px-4 pt-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao início
        </Link>

        <div className="text-center mb-12">
          <Badge className="mb-4 gradient-primary text-primary-foreground border-0">
            <Headphones className="h-3 w-3 mr-1" />
            Central de Suporte
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como podemos <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">ajudar?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para ajudar você com qualquer dúvida ou problema
          </p>
        </div>
      </div>

      <div className="container px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Enviar Mensagem</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Descreva seu problema ou dúvida e nossa equipe responderá em breve
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Descreva brevemente o assunto"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva detalhadamente sua dúvida ou problema..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full gradient-primary text-primary-foreground font-medium py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 text-primary">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Contatos Diretos</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Entre em contato conosco através dos canais abaixo
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">mozstoredigitalv1@gmail.com</div>
                    <div className="text-xs text-success">Resposta em até 2 horas</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">+258 84 123 4567</div>
                    <div className="text-xs text-success">Disponível 24/7</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                  <MessageCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Chat ao Vivo</div>
                    <div className="text-sm text-muted-foreground">Suporte instantâneo</div>
                    <Button size="sm" variant="outline" className="mt-2">
                      Iniciar Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horário de Atendimento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Chat apenas</span>
                </div>
                <div className="mt-4 p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-2 text-success text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Chat 24/7 sempre disponível</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-muted-foreground">Satisfação dos clientes</div>
                <div className="text-xs text-muted-foreground mt-1">Baseado em 1.200+ avaliações</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}