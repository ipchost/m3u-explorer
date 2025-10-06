import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tv, Smartphone, Monitor, Wifi } from "lucide-react";

const Playlists = () => {
  const playlists = [
    {
      icon: Tv,
      title: "Smart TV плейлисты",
      description: "M3U списки для Samsung, LG, Sony и других Smart TV. Поддержка 4K и HD качества.",
      tags: ["Smart TV", "4K", "HD"],
      quality: "Высокое качество"
    },
    {
      icon: Smartphone,
      title: "Android & iOS",
      description: "Плейлисты для мобильных устройств. Совместимость с популярными IPTV плеерами.",
      tags: ["Android", "iOS", "Mobile"],
      quality: "Оптимизировано"
    },
    {
      icon: Monitor,
      title: "OTT приставки",
      description: "Настройка для Android TV Box, Apple TV, Amazon Fire TV и других OTT платформ.",
      tags: ["OTT", "Android TV", "Apple TV"],
      quality: "Универсально"
    },
    {
      icon: Wifi,
      title: "Онлайн просмотр",
      description: "Веб-плееры для просмотра IPTV прямо в браузере без установки дополнительных программ.",
      tags: ["Web", "Online", "Browser"],
      quality: "Быстрый доступ"
    }
  ];

  return (
    <section id="playlists" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Лучшие плейлисты 2024
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Подборка актуальных M3U плейлистов для всех популярных платформ и устройств
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playlists.map((playlist, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <playlist.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/20 border-secondary/30">
                    {playlist.quality}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4">{playlist.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {playlist.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {playlist.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Playlists;
