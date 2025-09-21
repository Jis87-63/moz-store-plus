import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Scale, Calendar } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      <div className="container px-4 py-8">
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao início
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gradient-primary text-primary-foreground border-0">
            <FileText className="h-3 w-3 mr-1" />
            Documentos Legais
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Termos e <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Condições</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossos termos de uso e condições de serviço
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Última atualização: 21 de Setembro de 2024</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>Termos de Uso - MozStore.Virtual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao utilizar os serviços da MozStore.Virtual, você concorda com estes termos e condições. 
                  Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A MozStore.Virtual é uma plataforma digital que oferece:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Venda de produtos digitais (contas premium, créditos de jogos, ebooks)</li>
                  <li>Entrega instantânea de produtos digitais</li>
                  <li>Suporte ao cliente 24/7</li>
                  <li>Sistema de pagamento seguro via M-Pesa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Cadastro e Conta do Usuário</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Para utilizar nossos serviços, você deve:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ter pelo menos 18 anos de idade</li>
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Manter a segurança de suas credenciais de login</li>
                    <li>Ser responsável por todas as atividades em sua conta</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Produtos e Serviços</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>4.1 Produtos Digitais:</strong> Todos os produtos oferecidos são digitais e serão entregues em até 2 minutos após a confirmação do pagamento.</p>
                  <p><strong>4.2 Disponibilidade:</strong> Nos esforçamos para manter todos os produtos disponíveis, mas não garantimos disponibilidade contínua.</p>
                  <p><strong>4.3 Preços:</strong> Os preços estão sujeitos a alterações sem aviso prévio.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Pagamentos</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>5.1 Métodos de Pagamento:</strong> Aceitamos pagamentos via M-Pesa e outros métodos aprovados.</p>
                  <p><strong>5.2 Processamento:</strong> Todos os pagamentos são processados de forma segura através de provedores certificados.</p>
                  <p><strong>5.3 Reembolsos:</strong> Devido à natureza dos produtos digitais, reembolsos só são possíveis em casos específicos definidos em nossa política de reembolso.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Entrega e Garantias</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>6.1 Tempo de Entrega:</strong> Comprometemo-nos a entregar produtos digitais em até 2 minutos após confirmação do pagamento.</p>
                  <p><strong>6.2 Garantia de Funcionamento:</strong> Garantimos que todos os produtos funcionam conforme descrito no momento da entrega.</p>
                  <p><strong>6.3 Suporte:</strong> Oferecemos suporte técnico para todos os produtos vendidos.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Uso Proibido</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  É expressamente proibido:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Usar produtos adquiridos para atividades ilegais</li>
                  <li>Revender produtos sem autorização</li>
                  <li>Tentar hackear ou comprometer nossos sistemas</li>
                  <li>Criar múltiplas contas para contornar limitações</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Privacidade e Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Respeitamos sua privacidade e protegemos seus dados conforme nossa 
                  <Link to="/privacy" className="text-primary hover:underline mx-1">Política de Privacidade</Link>. 
                  Coletamos apenas informações necessárias para fornecer nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A MozStore.Virtual não se responsabiliza por danos indiretos, lucros cessantes ou 
                  consequências resultantes do uso de nossos produtos e serviços, exceto conforme exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Alterações nos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamos o direito de modificar estes termos a qualquer momento. 
                  Usuários serão notificados sobre mudanças significativas por email ou através da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos pelas leis de Moçambique. 
                  Qualquer disputa será resolvida nos tribunais competentes de Maputo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                  <p><strong>Email:</strong> mozstoredigitalv1@gmail.com</p>
                  <p><strong>Telefone:</strong> +258 84 123 4567</p>
                  <p><strong>Endereço:</strong> Maputo, Moçambique</p>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}