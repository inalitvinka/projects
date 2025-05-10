import type { ResponseObject } from './index';

export type ResponseArticlesObj = Omit<ResponseObject, 'sources'>;
