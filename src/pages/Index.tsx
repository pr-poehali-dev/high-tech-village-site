import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-400/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
            QUANTUM
            <br />
            <span className="text-4xl md:text-6xl">RESIDENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Коттеджный поселок будущего с технологией умный дом, экологичными
            решениями и премиум-архитектурой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg"
            >
              Забронировать участок
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-4 text-lg"
            >
              Виртуальный тур
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Технологии будущего
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                description:
                  "Оптоволоконная сеть 10 Гбит/с для работы и развлечений",
              },
              {
                icon: "Car",
                title: "Зарядка электрокаров",
                description:
                  "Tesla Supercharger и универсальные станции в каждом доме",
              },
              {
                icon: "Sparkles",
                title: "AR/VR зоны",
                description:
                  "Общественные пространства с технологиями дополненной реальности",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-purple-500/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Архитектура будущего
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Вилла Альфа",
                price: "от 45 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
              },
              {
                title: "Дом Бета",
                price: "от 32 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
              },
              {
                title: "Коттедж Гамма",
                price: "от 28 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
              },
              {
                title: "Особняк Дельта",
                price: "от 55 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=500",
              },
              {
                title: "Резиденция Омега",
                price: "от 38 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=500",
              },
              {
                title: "Пентхаус Сигма",
                price: "от 62 млн ₽",
                image:
                  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
              },
            ].map((house, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {house.title}
                  </h3>
                  <p className="text-cyan-400 text-lg font-semibold">
                    {house.price}
                  </p>
                </div>
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Инвестиционные планы
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, index) => (
              <Card
                key={index}
                className={`${plan.featured ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-400 scale-105" : "bg-white/5 border-gray-700"} backdrop-blur-xl hover:scale-110 transition-all duration-300`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">
                    {plan.title}
                  </CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-400 mr-3"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.featured ? "bg-gradient-to-r from-purple-600 to-cyan-600" : "bg-gray-700 hover:bg-gray-600"}`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Готовы жить в будущем? Наши эксперты помогут выбрать идеальный дом
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Phone"
                  size={32}
                  className="text-purple-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <Icon
                  name="MapPin"
                  size={32}
                  className="text-cyan-400 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">Локация</h3>
                <p className="text-gray-300">
                  Московская область, 25 км от МКАД
                </p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 text-lg"
          >
            Записаться на просмотр
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
