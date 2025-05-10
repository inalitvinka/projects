import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller;
    private view;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        const mainSources = document.querySelector<HTMLDivElement>('.sources');
        const burger = <HTMLInputElement>document.getElementById('burger-checkbox');
        const body = <HTMLBodyElement>document.body;
        if (!mainSources || !burger || !body) {
            return;
        }

        mainSources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));

        burger.addEventListener('click', () => body.classList.toggle('lock'));
    }
}

export default App;
