import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { houses, pricingPlans } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      <HeroSection />
      <FeaturesSection />

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Архитектура будущего
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house, index) => (
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
            {pricingPlans.map((plan, index) => (
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
