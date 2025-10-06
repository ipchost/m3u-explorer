import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacts" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для получения помощи или дополнительной информации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telegram Card */}
          <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Telegram-бот</CardTitle>
              <CardDescription>
                Самый быстрый способ получить актуальные плейлисты и помощь в настройке
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="hero" 
                className="w-full group"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                Открыть бот
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Email поддержка</CardTitle>
              <CardDescription>
                Для деловых предложений и сложных технических вопросов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:support@iptv-hub.com'}
              >
                <Mail className="w-4 h-4" />
                Написать письмо
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Часто задаваемые вопросы
          </h3>
          <p className="text-muted-foreground">
            Большинство ответов на популярные вопросы вы найдете в разделе "Как установить IPTV". 
            Если не нашли ответ - обращайтесь в Telegram-бот!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
