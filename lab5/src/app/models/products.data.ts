import { Product } from './product.model';

export const PRODUCTS: Product[] = [

  // ───── Смартфоны (categoryId: 1) ─────
  {
    id: 1,
    categoryId: 1,
    name: 'Apple iPhone 15 128GB',
    description: 'Смартфон с чипом A16 Bionic, камерой 48 МП и Dynamic Island. Экран Super Retina XDR 6.1", поддержка USB-C.',
    price: 389990,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h18/84527695282206.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h18/84527695282206.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hd8/hf1/84527695314974.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h4c/h17/84527695347742.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-106821078/?c=750000000'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Samsung Galaxy S24 256GB',
    description: 'Флагман Samsung с процессором Exynos 2400 и Galaxy AI. Камера 50 МП, экран Dynamic AMOLED 2X 6.2".',
    price: 329990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p93/pd4/86163684581406.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p93/pd4/86163684581406.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p5f/p61/86163684614174.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p6d/p32/86163684646942.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-256gb-chernyi-113509877/?c=750000000'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Xiaomi 14 256GB',
    description: 'Смартфон с камерой Leica и процессором Snapdragon 8 Gen 3. Экран AMOLED 6.36", зарядка 90W.',
    price: 279990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6b/86468994sovm.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6b/86468994sovm.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6b/86468994sovm.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6b/86468994sovm.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-14-12-256gb-chernyi-114027572/?c=750000000'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Google Pixel 8 128GB',
    description: 'Смартфон Google с чипом Tensor G3 и продвинутым AI-фото. Экран OLED 6.2", 7 лет обновлений Android.',
    price: 259990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/pd5/85950283218974.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p4e/pd5/85950283218974.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p4e/pd5/85950283218974.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p4e/pd5/85950283218974.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8-128gb-chernyi-112428050/?c=750000000'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'OnePlus 12 256GB',
    description: 'Мощный смартфон с Snapdragon 8 Gen 3 и камерой Hasselblad. Зарядка 100W SUPERVOOC, экран 6.82" LTPO AMOLED.',
    price: 299990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p2a/86055378829342.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p2a/86055378829342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p2a/86055378829342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p8c/p2a/86055378829342.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-12-12-256gb-chernyi-113009508/?c=750000000'
  },

  // ───── Ноутбуки (categoryId: 2) ─────
  {
    id: 6,
    categoryId: 2,
    name: 'Apple MacBook Air M2 256GB',
    description: 'Ноутбук с чипом M2 и экраном Liquid Retina 13.6". До 18 часов автономной работы, тонкий корпус без вентилятора.',
    price: 589990,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p86/p0d/85405804716062.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p86/p0d/85405804716062.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p79/p8a/85405804748830.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p0c/p52/85405804781598.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-256gb-serebrianyi-102592996/?c=750000000'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'ASUS ROG Zephyrus G14',
    description: 'Игровой ноутбук с AMD Ryzen 9 и RTX 4060. Экран QHD 144Hz, 16GB RAM, компактный корпус 14".',
    price: 649990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/p54/85975665549342.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/p54/85975665549342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/p54/85975665549342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/p54/85975665549342.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga403ui-113803263/?c=750000000'
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Бизнес-ноутбук с Intel Core i7 12-го поколения. Экран IPS 14", вес всего 1.12 кг, защита MIL-SPEC.',
    price: 579990,
    rating: 4.6,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p49/82814960615454.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p6a/p49/82814960615454.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p6a/p49/82814960615454.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p6a/p49/82814960615454.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-10-i7-1265u-16-512gb-chernyi-104122157/?c=750000000'
  },
  {
    id: 9,
    categoryId: 2,
    name: 'HP Pavilion 15 Intel i5',
    description: 'Универсальный ноутбук для учёбы и работы с Intel Core i5. Экран FHD 15.6", 16GB RAM, SSD 512GB.',
    price: 319990,
    rating: 4.4,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p05/85430418227230.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p9a/p05/85430418227230.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p9a/p05/85430418227230.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p9a/p05/85430418227230.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3037ci-108956501/?c=750000000'
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Samsung Galaxy Book4 Pro',
    description: 'Тонкий ноутбук с AMOLED экраном 14" и Intel Core Ultra 7. Вес 1.23 кг, автономность до 25 часов.',
    price: 549990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p46/86163877535774.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p46/86163877535774.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p46/86163877535774.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p46/86163877535774.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-book4-pro-360-16-intel-core-ultra-7-155h-16-512gb-serebrianyi-113509499/?c=750000000'
  },

  // ───── Наушники (categoryId: 3) ─────
  {
    id: 11,
    categoryId: 3,
    name: 'Apple AirPods Pro 2',
    description: 'Наушники с активным шумоподавлением H2 и пространственным звуком. До 6 часов воспроизведения, чехол MagSafe.',
    price: 129990,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p96/84965993840670.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p96/84965993840670.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p96/p19/84965993873438.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p73/pfa/84965993906206.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-belyj-104399340/?c=750000000'
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Sony WH-1000XM5',
    description: 'Накладные наушники с лучшим в классе шумоподавлением и LDAC. До 30 часов работы, быстрая зарядка 3 мин = 3 часа.',
    price: 119990,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p58/p80/83891575128094.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p58/p80/83891575128094.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p58/p80/83891575128094.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p58/p80/83891575128094.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-102834917/?c=750000000'
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Samsung Galaxy Buds3 Pro',
    description: 'TWS наушники с интеллектуальным ANC и звуком Hi-Fi. Эргономичный дизайн, до 6 часов на одном заряде.',
    price: 79990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3e/p86/86454954008606.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3e/p86/86454954008606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p3e/p86/86454954008606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p3e/p86/86454954008606.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-belyj-115289422/?c=750000000'
  },
  {
    id: 14,
    categoryId: 3,
    name: 'Bose QuietComfort 45',
    description: 'Премиальные наушники с шумоподавлением и мягкими амбушюрами. До 24 часов работы, режим Aware для окружающего звука.',
    price: 109990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p44/83267305472030.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p7b/p44/83267305472030.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p7b/p44/83267305472030.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p7b/p44/83267305472030.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102231515/?c=750000000'
  },
  {
    id: 15,
    categoryId: 3,
    name: 'JBL Tune 770NC',
    description: 'Беспроводные наушники с адаптивным шумоподавлением и басом JBL Pure. До 70 часов работы, складная конструкция.',
    price: 39990,
    rating: 4.4,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p62/p9c/85174720humble.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p62/p9c/85174720humble.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p62/p9c/85174720humble.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p62/p9c/85174720humble.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-109782725/?c=750000000'
  },

  // ───── Планшеты (categoryId: 4) ─────
  {
    id: 16,
    categoryId: 4,
    name: 'Apple iPad Pro 11" M4 256GB',
    description: 'Планшет с чипом M4 и ultra-thin OLED дисплеем 11". Поддержка Apple Pencil Pro и Magic Keyboard.',
    price: 549990,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/pd3/86351166308382.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p9e/pd3/86351166308382.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p9e/pd3/86351166308382.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p9e/pd3/86351166308382.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-m4-8-256gb-wi-fi-serebrianyi-114942085/?c=750000000'
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Samsung Galaxy Tab S9 256GB',
    description: 'Планшет с экраном Dynamic AMOLED 11" и чипом Snapdragon 8 Gen 2. Водозащита IP68, стилус S Pen в комплекте.',
    price: 349990,
    rating: 4.7,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd6/85755227013150.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd6/85755227013150.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd6/85755227013150.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd6/85755227013150.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-8-256gb-wi-fi-serebrianyi-111599066/?c=750000000'
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Xiaomi Pad 6 256GB',
    description: 'Планшет с экраном 144Hz 11" и процессором Snapdragon 870. 8600 мАч батарея, зарядка 33W, стерео звук.',
    price: 149990,
    rating: 4.5,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p6e/85174739648542.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p26/p6e/85174739648542.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p26/p6e/85174739648542.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p26/p6e/85174739648542.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-256gb-wi-fi-serebrianyi-109560203/?c=750000000'
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Lenovo Tab P12 Pro',
    description: 'Планшет с AMOLED экраном 12.6" 2K и Snapdragon 870. Звук Dolby Atmos, 10200 мАч, стилус Precision Pen 3.',
    price: 219990,
    rating: 4.4,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/p84/83527067820062.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p84/83527067820062.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p84/83527067820062.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p84/83527067820062.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-8-256gb-wi-fi-seryj-104678901/?c=750000000'
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Apple iPad Air 11" M2 128GB',
    description: 'Планшет с чипом M2 и экраном Liquid Retina 11". Поддержка Apple Pencil и Magic Keyboard, Touch ID.',
    price: 379990,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p93/86351234236446.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p93/86351234236446.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p93/86351234236446.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/p5e/p93/86351234236446.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-m2-8-128gb-wi-fi-seryj-114942071/?c=750000000'
  }
];
