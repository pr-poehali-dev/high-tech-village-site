import { Feature, House, PricingPlan } from "@/types";

export const features: Feature[] = [
  {
    icon: "Zap",
    title: "Умный дом",
    description:
      "Полная автоматизация освещения, климата и безопасности через мобильное приложение",
  },
  {
    icon: "Leaf",
    title: "Экологичность",
    description:
      "Солнечные панели, геотермальное отопление и система переработки воды",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description:
      "Периметральная охрана с ИИ-камерами и биометрическим доступом",
  },
  {
    icon: "Wifi",
    title: "Гигабитный интернет",
    description: "Оптоволоконная сеть 10 Гбит/с для работы и развлечений",
  },
  {
    icon: "Car",
    title: "Зарядка электрокаров",
    description: "Tesla Supercharger и универсальные станции в каждом доме",
  },
  {
    icon: "Sparkles",
    title: "AR/VR зоны",
    description:
      "Общественные пространства с технологиями дополненной реальности",
  },
];

export const houses: House[] = [
  {
    title: "Вилла Альфа",
    price: "от 45 млн ₽",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
  },
  {
    title: "Дом Бета",
    price: "от 32 млн ₽",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
  },
  {
    title: "Коттедж Гамма",
    price: "от 28 млн ₽",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
  },
  {
    title: "Особняк Дельта",
    price: "от 55 млн ₽",
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500",
  },
  {
    title: "Резиденция Омега",
    price: "от 38 млн ₽",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=500",
  },
  {
    title: "Пентхаус Сигма",
    price: "от 62 млн ₽",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Стартер",
    price: "от 25 млн ₽",
    features: [
      "Участок 10 соток",
      "Базовый умный дом",
      "Подключение коммуникаций",
      "Доступ к общим зонам",
    ],
  },
  {
    title: "Премиум",
    price: "от 45 млн ₽",
    features: [
      "Участок 15 соток",
      "Полный умный дом",
      "Индивидуальный дизайн",
      "VIP-сервис",
      "Частный садовник",
    ],
    featured: true,
  },
  {
    title: "Люкс",
    price: "от 75 млн ₽",
    features: [
      "Участок 25 соток",
      "AI-дворецкий",
      "Частный SPA",
      "Вертолетная площадка",
      "Персональный консьерж",
    ],
  },
];
