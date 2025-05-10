import AppLoader from './appLoader';
import type { Callback, ResponseArticlesObj, ResponseSourcesObj } from '../../utils/types';

class AppController extends AppLoader {
    public getSources(callback: Callback<ResponseSourcesObj>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<ResponseArticlesObj>): void {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!newsContainer) {
            return;
        }

        while (target !== newsContainer) {
            if (target instanceof HTMLDivElement && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) {
                    return;
                }

                if (newsContainer instanceof HTMLDivElement && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target && target instanceof HTMLElement) {
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
