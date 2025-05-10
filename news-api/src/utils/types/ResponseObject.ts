import type { ArticlesData, SourcesData } from './index';

export interface ResponseObject {
    status: string;
    totalResults: number;
    articles: ArticlesData[];
    sources: SourcesData[];
}
