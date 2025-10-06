import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Settings, Play, CheckCircle } from "lucide-react";

const HowToInstall = () => {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Скачайте IPTV плеер",
      description: "Установите подходящее приложение для вашего устройства: IPTV Smarters, Perfect Player, VLC или другой плеер из нашего списка рекомендаций."
    },
    {
      icon: Settings,
      number: "02",
      title: "Добавьте M3U плейлист",
      description: "Откройте настройки приложения и добавьте URL плейлиста или загрузите M3U файл. Наш Telegram-бот поможет найти актуальные ссылки."
    },
    {
      icon: Play,
      number: "03",
      title: "Запустите трансляцию",
      description: "Выберите канал из списка и начните просмотр. Настройте качество видео и другие параметры по вашему желанию."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Наслаждайтесь просмотром",
      description: "Готово! Теперь вы можете смотреть онлайн ТВ на любом устройстве. При возникновении проблем обращайтесь в нашу поддержку."
    }
  ];

  return (
    <section id="how-to-install" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Как установить IPTV
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простая пошаговая инструкция по настройке IPTV на любом устройстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group relative overflow-hidden"
            >
              {/* Number Background */}
              <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>

              <CardHeader className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">Важно:</span> Убедитесь, что ваше устройство подключено к стабильному интернет-соединению. 
            Для комфортного просмотра HD контента рекомендуется скорость не менее 10 Мбит/с.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToInstall;
