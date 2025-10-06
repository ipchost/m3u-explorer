import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей М.",
      role: "Smart TV пользователь",
      rating: 5,
      text: "Отличный гид по настройке IPTV! Все инструкции понятные и подробные. Настроил за 10 минут на своем Samsung TV. Telegram-бот очень помогает с поиском плейлистов.",
      avatar: "AM"
    },
    {
      name: "Мария К.",
      role: "Android TV Box",
      rating: 5,
      text: "Давно искала нормальные инструкции по IPTV. Здесь все четко и по делу. Особенно понравилась поддержка в Telegram - отвечают быстро и помогают с настройкой.",
      avatar: "МК"
    },
    {
      name: "Дмитрий П.",
      role: "iOS пользователь",
      rating: 5,
      text: "Пользуюсь сервисом уже месяц. M3U плейлисты работают стабильно, качество отличное. Рекомендую всем, кто хочет смотреть онлайн ТВ на мобильных устройствах.",
      avatar: "ДП"
    },
    {
      name: "Елена С.",
      role: "LG Smart TV",
      rating: 5,
      text: "Спасибо за проект! Наконец-то нашла полную информацию о настройке IPTV в одном месте. Все работает как часы. Безопасно и легально - именно то, что искала.",
      avatar: "ЕС"
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы пользователей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят наши пользователи о IPTV Playlists Hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">
                      {review.avatar}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
