import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IData } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    let alphabetBlock = document.querySelector('.alphabet');
    let sphere = document.querySelector('.stage');

    alphabetBlock?.addEventListener('click', (e) => {
      const target =  e.target as HTMLElement;
      this.controller.getSources((data) => this.view.drawSources(data as IData, target.innerText))
    });
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) => {
      this.controller.getNews(e, (data) => this.view.drawNews(data as IData));
      (sphere as HTMLElement).style.display = 'none';
    });
    this.controller.getSources((data) => this.view.drawSources(data as IData, 'A'));
  }
}

export default App;
