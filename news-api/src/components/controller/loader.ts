import { type Options, type Callback, type Endpoints, Statuses } from '../../utils/types';

class Loader {
    private baseLink: string | undefined;
    private options: Options;

    constructor(baseLink: string | undefined, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: Options },
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === Statuses['Unauthorized'] || res.status === Statuses['Not Found'])
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: Endpoints): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: 'GET', endpoint: Endpoints, callback: Callback<T>, options: Options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then(callback)
            .catch(console.error);
    }
}

export default Loader;
