import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Calendar, Lock } from "lucide-react";

export default function Privacy() {
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
            <Shield className="h-3 w-3 mr-1" />
            Proteção de Dados
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Privacidade</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Como protegemos e utilizamos suas informações pessoais
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
                <Eye className="h-5 w-5 text-primary" />
                <span>Política de Privacidade - MozStore.Virtual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A MozStore.Virtual respeita sua privacidade e está comprometida em proteger suas informações pessoais. 
                  Esta política explica como coletamos, usamos, armazenamos e protegemos seus dados quando você usa nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Informações que Coletamos</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">2.1 Informações Pessoais</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Nome completo</li>
                      <li>Endereço de email</li>
                      <li>Número de telefone</li>
                      <li>Informações de pagamento (número M-Pesa)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">2.2 Informações de Uso</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Histórico de compras</li>
                      <li>Produtos visualizados</li>
                      <li>Tempo gasto na plataforma</li>
                      <li>Dispositivo e navegador utilizados</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">2.3 Informações Técnicas</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Endereço IP</li>
                      <li>Cookies e tecnologias similares</li>
                      <li>Logs de atividade</li>
                      <li>Informações de geolocalização</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Como Usamos suas Informações</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>3.1 Prestação de Serviços:</strong> Para processar compras, entregar produtos digitais e fornecer suporte ao cliente.</p>
                  <p><strong>3.2 Comunicação:</strong> Para enviar confirmações de pedidos, atualizações de status e suporte técnico.</p>
                  <p><strong>3.3 Melhorias:</strong> Para analisar o uso da plataforma e melhorar nossos serviços.</p>
                  <p><strong>3.4 Segurança:</strong> Para detectar fraudes e proteger a segurança da plataforma.</p>
                  <p><strong>3.5 Marketing:</strong> Para enviar ofertas relevantes (com seu consentimento).</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Compartilhamento de Informações</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Não vendemos suas informações pessoais. Compartilhamos dados apenas quando:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Prestadores de Serviços:</strong> Com parceiros que nos ajudam a operar (processamento de pagamentos, entrega)</li>
                    <li><strong>Conformidade Legal:</strong> Quando exigido por lei ou autoridades competentes</li>
                    <li><strong>Proteção:</strong> Para proteger nossos direitos e segurança</li>
                    <li><strong>Consentimento:</strong> Quando você autoriza expressamente</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Proteção de Dados</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lock className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Medidas de Segurança</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                      <li>Criptografia SSL/TLS para todas as comunicações</li>
                      <li>Armazenamento seguro com Firebase</li>
                      <li>Autenticação de dois fatores disponível</li>
                      <li>Monitoramento contínuo de segurança</li>
                      <li>Backup regular e seguro de dados</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Seus Direitos</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Você tem o direito de:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Acesso:</strong> Solicitar cópia de seus dados pessoais</li>
                    <li><strong>Correção:</strong> Atualizar informações incorretas ou incompletas</li>
                    <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados (com algumas exceções legais)</li>
                    <li><strong>Portabilidade:</strong> Receber seus dados em formato legível</li>
                    <li><strong>Limitação:</strong> Restringir como usamos seus dados</li>
                    <li><strong>Objeção:</strong> Opor-se ao uso de seus dados para marketing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Cookies e Tecnologias Similares</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Utilizamos cookies para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Manter você logado na plataforma</li>
                    <li>Lembrar suas preferências</li>
                    <li>Analisar o tráfego e melhorar a experiência</li>
                    <li>Personalizar conteúdo e ofertas</li>
                  </ul>
                  <p>Você pode gerenciar cookies nas configurações do seu navegador.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                  <li>Fornecer nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Resolver disputas</li>
                  <li>Fazer cumprir nossos acordos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Transferências Internacionais</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alguns de nossos prestadores de serviços podem estar localizados fora de Moçambique. 
                  Garantimos que essas transferências atendam aos padrões adequados de proteção de dados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Menores de Idade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos serviços são destinados a pessoas com 18 anos ou mais. 
                  Não coletamos intencionalmente informações de menores de 18 anos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
                  por email ou através de avisos em nossa plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para questões sobre privacidade ou para exercer seus direitos, entre em contato:
                </p>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p><strong>Email de Privacidade:</strong> privacy@mozstore.virtual</p>
                  <p><strong>Email Geral:</strong> mozstoredigitalv1@gmail.com</p>
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