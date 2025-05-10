import type { ArticlesData, SourcesData } from './index';

export interface Template {
    draw(arg: ArticlesData[] | SourcesData[]): void;
}
