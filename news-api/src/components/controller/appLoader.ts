import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '09523e0bfa8d483ebb206e7d53d6d796', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
