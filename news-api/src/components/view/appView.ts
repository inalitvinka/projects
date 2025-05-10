import News from './news/news';
import Sources from './sources/sources';
import type { Template, ResponseArticlesObj, ResponseSourcesObj } from '../../utils/types';

export class AppView {
    private news: Template;
    private sources: Template;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ResponseArticlesObj): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseSourcesObj): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
