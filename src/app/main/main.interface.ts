export interface Blogs {
    id: number;
    postedBy: string;
    topic: string;
    date: any;
    message: string;

}
export interface Users {
    id: number;
    username: string;
    email: string;
    password: string | number;
}