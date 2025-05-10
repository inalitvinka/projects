import type { ResponseObject } from './index';

export type ResponseSourcesObj = Pick<ResponseObject, 'status' | 'sources'>;
