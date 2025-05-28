import { Account } from "@/types/Account";

export const mockAccounts: Account[] = [
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
