import { Shield, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-start gap-3 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Важная информация</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Сайт не распространяет и не хранит нелицензионные списки каналов, а предоставляет только 
                информацию о настройке IPTV. Все представленные материалы носят исключительно 
                образовательный характер. Пользователи несут полную ответственность за соблюдение 
                законодательства при использовании IPTV технологий.
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IPTV Playlists Hub
            </h3>
            <p className="text-sm text-muted-foreground">
              Информационный портал о настройке IPTV и OTT платформ
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Разделы</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О проекте
              </a>
              <a href="#playlists" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Плейлисты 2024
              </a>
              <a href="#how-to-install" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Как установить
              </a>
              <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
            </nav>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Ключевые слова</h4>
            <div className="flex flex-wrap gap-2">
              {['#IPTV', '#SmartTV', '#M3U', '#IPTVplaylist', '#OTT', '#OnlineTV'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} IPTV Playlists Hub. Все права защищены.
          </p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-primary fill-primary" /> для любителей IPTV
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
