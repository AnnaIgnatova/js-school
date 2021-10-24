let Translation = {
  en: {
    greeting: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    placeholder: '[Enter name]',
    city: 'Minsk',
    weather: ['Wind speed', 'm/s', 'Humidity'],
    error: 'Incorrect value',
    settingsNav: ['Settings', 'Language', 'Image source', 'Hide/show blocks'],
    settingsLang: ['Choose language', 'English', 'Russian'],
    settingsImg: ['Choose images source', 'tags'],
  },
  ru: {
    greeting: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
    placeholder: '[Введите имя]',
    city: 'Минск',
    weather: ['Скорость ветра', 'м/c', 'Влажность'],
    error: 'Некорректное значение',
    settingsNav: [
      'Настройки',
      'Язык',
      'Источник картинок',
      'Спрятать/показать блоки',
    ],
    settingsLang: ['Выберите язык', 'Английский', 'Русский'],
    settingsImg: ['Выберите источник картинок', 'теги'],
  },
};

let lang = 'en';

let changeLang = (language) => {
  lang = language;
};

export { Translation, lang, changeLang };
