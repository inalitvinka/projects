import './news.css';
import { type ArticlesData, assertCondition } from '../../../utils/types';

class News {
    public draw(data: ArticlesData[]): void {
        const news: ArticlesData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');
        if (!newsItemTemp) {
            return;
        }

        news.forEach((item: Readonly<ArticlesData>, idx): void => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            assertCondition(newsClone instanceof DocumentFragment);

            if (idx % 2) {
                const newsItem = newsClone.querySelector<HTMLDivElement>('.news__item');
                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            const newsMetaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
            const newsMetaAuthor = newsClone.querySelector<HTMLLIElement>('.news__meta-author');
            const newsMetaDate = newsClone.querySelector<HTMLLIElement>('.news__meta-date');
            const newsDescriptionTitle = newsClone.querySelector<HTMLHeadingElement>('.news__description-title');
            const newsDescriptionSource = newsClone.querySelector<HTMLHeadingElement>('.news__description-source');
            const newsDescriptionContent = newsClone.querySelector<HTMLParagraphElement>('.news__description-content');
            const newsReadMoreLink = newsClone.querySelector<HTMLLinkElement>('.news__read-more a');
            if (
                !newsMetaPhoto ||
                !newsMetaAuthor ||
                !newsMetaDate ||
                !newsDescriptionTitle ||
                !newsDescriptionSource ||
                !newsDescriptionContent ||
                !newsReadMoreLink
            ) {
                return;
            }
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            newsMetaAuthor.textContent = item.author || item.source.name;

            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            newsDescriptionTitle.textContent = item.title;
            newsDescriptionSource.textContent = item.source.name;

            newsDescriptionContent.textContent = item.description;

            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsNode = document.querySelector<HTMLDivElement>('.news');
        if (!newsNode) {
            return;
        }
        newsNode.innerHTML = '';
        newsNode.appendChild(fragment);
    }
}

export default News;
