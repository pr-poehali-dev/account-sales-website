import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
