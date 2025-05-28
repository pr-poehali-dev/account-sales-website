import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Account {
  id: number;
  game: string;
  platform: string;
  level: number;
  price: number;
  currency: string;
  rating: number;
  seller: string;
  image: string;
  features: string[];
}

const mockAccounts: Account[] = [
  {
    id: 1,
    game: "Fortnite",
    platform: "PC",
    level: 145,
    price: 2500,
    currency: "₽",
    rating: 4.9,
    seller: "ProGamer123",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    features: ["Редкие скины", "Battle Pass", "V-Bucks"],
  },
  {
    id: 2,
    game: "CS2",
    platform: "Steam",
    level: 87,
    price: 4200,
    currency: "₽",
    rating: 4.8,
    seller: "SkinTrader",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    features: ["Дорогие скины", "Prime статус", "Медали"],
  },
  {
    id: 3,
    game: "Valorant",
    platform: "Riot",
    level: 234,
    price: 3800,
    currency: "₽",
    rating: 4.7,
    seller: "ValorantPro",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=250&fit=crop",
    features: ["Radiant ранг", "Эксклюзивные скины", "Коллекции"],
  },
  {
    id: 4,
    game: "League of Legends",
    platform: "Riot",
    level: 156,
    price: 1900,
    currency: "₽",
    rating: 4.6,
    seller: "LoLMaster",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    features: ["Challenger", "Престижные скины", "Чемпионы"],
  },
  {
    id: 5,
    game: "Dota 2",
    platform: "Steam",
    level: 198,
    price: 5600,
    currency: "₽",
    rating: 4.9,
    seller: "DotaLegend",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
    features: ["Immortal ранг", "Аркана", "Турнирные предметы"],
  },
  {
    id: 6,
    game: "Apex Legends",
    platform: "Origin",
    level: 189,
    price: 3200,
    currency: "₽",
    rating: 4.5,
    seller: "ApexChamp",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=250&fit=crop",
    features: ["Predator ранг", "Наследственные скины", "Значки"],
  },
];

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<string>("Все игры");
  const [priceRange, setPriceRange] = useState<string>("Любая цена");

  const games = [
    "Все игры",
    "Fortnite",
    "CS2",
    "Valorant",
    "League of Legends",
    "Dota 2",
    "Apex Legends",
  ];
  const priceRanges = [
    "Любая цена",
    "До 2000₽",
    "2000₽ - 4000₽",
    "Свыше 4000₽",
  ];

  const filteredAccounts = mockAccounts.filter((account) => {
    const gameMatch =
      selectedGame === "Все игры" || account.game === selectedGame;
    let priceMatch = true;

    if (priceRange === "До 2000₽") priceMatch = account.price < 2000;
    else if (priceRange === "2000₽ - 4000₽")
      priceMatch = account.price >= 2000 && account.price <= 4000;
    else if (priceRange === "Свыше 4000₽") priceMatch = account.price > 4000;

    return gameMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white font-montserrat">
                GameAccounts
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Как купить
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Поддержка
              </a>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Продать аккаунт
              </Button>
            </nav>

            <Button variant="ghost" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            Лучшие игровые
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              аккаунты
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покупайте и продавайте игровые аккаунты безопасно. Более 10,000+
            довольных игроков уже с нами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти аккаунт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/10 text-lg px-8"
            >
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Продать аккаунт
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Игра</label>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="bg-slate-800 text-white border border-purple-500/30 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                >
                  {games.map((game) => (
                    <option key={game} value={game}>
                      {game}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Цена</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-slate-800 text-white border border-purple-500/30 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-gray-300">
              Найдено:{" "}
              <span className="text-purple-400 font-semibold">
                {filteredAccounts.length}
              </span>{" "}
              аккаунтов
            </div>
          </div>
        </div>
      </section>

      {/* Accounts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccounts.map((account) => (
              <Card
                key={account.id}
                className="bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="relative">
                  <img
                    src={account.image}
                    alt={account.game}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white">
                    {account.platform}
                  </Badge>
                  <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/60 rounded-full px-2 py-1">
                    <Icon
                      name="Star"
                      size={14}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-white text-sm">{account.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-lg">
                        {account.game}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Уровень {account.level} • {account.seller}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">
                        {account.price.toLocaleString()}
                        {account.currency}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {account.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-900/30 text-purple-300 border-purple-500/30"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-montserrat">
                  GameAccounts
                </h3>
              </div>
              <p className="text-gray-400">
                Надежный маркетплейс игровых аккаунтов с гарантией безопасности
                сделок.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Популярные игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fortnite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CS2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Valorant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dota 2
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как продать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Гарантии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Icon name="Users" size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <Icon name="Globe" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            © 2025 GameAccounts. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
