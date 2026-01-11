import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Лечение проблемной кожи",
      description: "Акне, воспаления, постакне — подбор комплексного ухода и процедур.",
      icon: "Sparkles"
    },
    {
      title: "Удаление папиллом, родинок и новообразований",
      description: "Безопасно, аккуратно, с рекомендациями по уходу после процедуры.",
      icon: "Shield"
    },
    {
      title: "Инъекционная косметология",
      description: "Процедуры для увлажнения, тонуса и коррекции возрастных изменений.",
      icon: "Syringe"
    },
    {
      title: "Контурная пластика лица и тела",
      description: "Коррекция объёма и форм, гармонизация черт.",
      icon: "Smile"
    },
    {
      title: "Передовые нитевые технологии",
      description: "Лифтинг-эффект и укрепление каркаса кожи по показаниям.",
      icon: "Layers"
    },
    {
      title: "Все виды уходовых процедур",
      description: "Очищение, увлажнение, питание, восстановление, сезонные программы.",
      icon: "Heart"
    },
    {
      title: "Инновационная аппаратная косметология",
      description: "Работа с качеством кожи, тонусом, рельефом и контуром.",
      icon: "Zap"
    },
    {
      title: "Аппаратный массаж лица и тела",
      description: "Улучшение микроциркуляции, лимфодренаж, тонус и рельеф.",
      icon: "Wind"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Сертифицированные специалисты",
      description: "Опытные врачи с медицинским образованием"
    },
    {
      icon: "ShieldCheck",
      title: "Стерильность и безопасность",
      description: "Соблюдение всех медицинских стандартов"
    },
    {
      icon: "Cpu",
      title: "Современное оборудование",
      description: "Инновационные технологии и препараты"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональный план для каждого пациента"
    },
    {
      icon: "MapPin",
      title: "Удобное расположение",
      description: "В центре города, легко добраться"
    },
    {
      icon: "MessageCircle",
      title: "Честная консультация",
      description: "Прозрачность в процедурах и ценах"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Прекрасная клиника! Врачи настоящие профессионалы, всё объясняют, подбирают процедуры индивидуально. Результат превзошёл ожидания!",
      rating: 5
    },
    {
      name: "Мария С.",
      text: "Обратилась с проблемой акне. После курса процедур кожа преобразилась! Спасибо огромное специалистам клиники.",
      rating: 5
    },
    {
      name: "Елена П.",
      text: "Делала контурную пластику губ. Результат естественный и красивый, именно то, что хотела. Очень довольна!",
      rating: 5
    },
    {
      name: "Ольга В.",
      text: "Отличная клиника с современным оборудованием. Чистота, профессионализм, внимательное отношение. Рекомендую!",
      rating: 5
    }
  ];

  const specialists = [
    {
      name: "Доктор Иванова Е.А.",
      specialty: "Врач-косметолог, дерматолог",
      experience: "Опыт работы более 10 лет. Специализация: инъекционная косметология, аппаратные методики.",
      image: "https://cdn.poehali.dev/projects/15cd0673-16f6-47eb-8eb1-30af8e460da0/files/8d9c4c66-7b63-466b-8332-608c39625e23.jpg"
    }
  ];

  const handleDirectClick = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+79241375075';
  };

  const handleMapClick = () => {
    window.open('https://yandex.ru/maps/?text=Находка, ул. Ленинская, 3', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-blue-200/30 to-purple-200/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjAwLDIyMCwwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="text-6xl mb-4">✨</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Клиника эстетической медицины «Улыбка»
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Красота и здоровье вашей кожи — наша забота. Современные методики и индивидуальный подход.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all"
              onClick={handleDirectClick}
            >
              <Icon name="Instagram" className="mr-2" size={24} />
              Записаться в Direct
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-pink-300 hover:bg-pink-50 shadow-md"
              onClick={handleCallClick}
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Icon name="MapPin" size={20} className="text-pink-500" />
            <span>Находка, ул. Ленинская, 3</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Услуги клиники
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Подберём процедуры под ваш запрос и особенности кожи — безопасно и индивидуально
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/30"
              >
                <div className="mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="w-full text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                  onClick={handleDirectClick}
                >
                  Записаться
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 italic">
            * Имеются противопоказания. Необходима консультация специалиста.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              onClick={handleDirectClick}
            >
              Записаться на консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-pink-300"
              onClick={handleCallClick}
            >
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Наши специалисты
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={specialist.image} 
                    alt={specialist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-pink-50/30">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{specialist.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{specialist.specialty}</p>
                  <p className="text-gray-600 text-sm">{specialist.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              О клинике
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Клиника эстетической медицины «Улыбка» — это современный центр красоты и здоровья в Находке. Мы специализируемся на инновационных методиках омоложения и ухода за кожей.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Наши специалисты регулярно проходят обучение и сертификацию по новейшим технологиям в области эстетической медицины. Мы используем только сертифицированные препараты и оборудование.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Индивидуальный подход к каждому пациенту, честная консультация и прозрачность в работе — наши главные принципы.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={handleDirectClick}
              >
                Узнать больше
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/15cd0673-16f6-47eb-8eb1-30af8e460da0/files/cf908e8b-41a5-4ac8-97fc-502d7951077e.jpg"
                alt="Клиника Улыбка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Отзывы наших клиентов
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-800">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Запишитесь на консультацию
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Подберём индивидуальную программу процедур специально для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={handleDirectClick}
            >
              <Icon name="Instagram" className="mr-2" size={24} />
              Написать в Direct
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={handleCallClick}
            >
              <Icon name="Phone" className="mr-2" size={24} />
              +7 924 137-50-75
            </Button>
          </div>
          <p className="text-sm opacity-75">
            Работаем ежедневно с 9:00 до 20:00
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Контакты
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">Находка, ул. Ленинская, 3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a href="tel:+79241375075" className="text-pink-600 hover:text-pink-700">
                    +7 924 137-50-75
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно с 9:00 до 20:00</p>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  onClick={handleMapClick}
                >
                  <Icon name="Navigation" className="mr-2" />
                  Проложить маршрут
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-200">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=132.889095,42.813056&z=16&l=map&pt=132.889095,42.813056,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="grayscale-[0.2]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Клиника эстетической медицины «Улыбка»
            </h3>
            <p className="text-gray-400">Красота и здоровье вашей кожи</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-pink-400"
              onClick={handleDirectClick}
            >
              <Icon name="Instagram" size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-pink-400"
              onClick={handleCallClick}
            >
              <Icon name="Phone" size={24} />
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Клиника «Улыбка». Все права защищены.
          </p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 md:hidden">
        <Button 
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          onClick={handleDirectClick}
        >
          <Icon name="Instagram" size={28} />
        </Button>
        <Button 
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          onClick={handleCallClick}
        >
          <Icon name="Phone" size={28} />
        </Button>
        <Button 
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          onClick={handleMapClick}
        >
          <Icon name="MapPin" size={28} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
