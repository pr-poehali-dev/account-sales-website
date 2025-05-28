import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
