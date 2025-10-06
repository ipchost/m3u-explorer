import { Shield, Zap, Users, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Мы предоставляем только проверенную информацию о настройке IPTV и не распространяем нелицензионный контент"
    },
    {
      icon: Zap,
      title: "Простота настройки",
      description: "Пошаговые инструкции по установке M3U плейлистов на любые устройства - от Smart TV до мобильных"
    },
    {
      icon: Users,
      title: "Поддержка 24/7",
      description: "Наша команда всегда готова помочь с настройкой IPTV через Telegram-бот"
    },
    {
      icon: Lock,
      title: "Конфиденциальность",
      description: "Ваши данные в безопасности. Мы не храним и не передаем личную информацию третьим лицам"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            О проекте
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IPTV Playlists Hub - это информационный портал о настройке онлайн ТВ. 
            Мы помогаем разобраться с технологией IPTV и OTT платформами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
