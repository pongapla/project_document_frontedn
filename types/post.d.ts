// define type of post for typescript wordpress rest api
export interface Post {

    id: number;
    date: string;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        readered: string
    };
    link: string;
    author: unmber;
    _embedded: any;
    content: {
        rendered: string;
    }
}