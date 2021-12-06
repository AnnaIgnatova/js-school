import News from './news/news';
import Sources, { ISource } from './sources/sources';
import { IArticle } from './news/news';

export interface IData {
  articles: Array<IArticle>,
  sources: Array<ISource>,
}

export class AppView {
  news: News;
  sources: Sources;
    
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData, letter: string) {
    const values = data?.sources ? data?.sources.filter(source => source.name[0] === letter) : [];
    this.sources.draw(values);
  }
}

export default AppView;
