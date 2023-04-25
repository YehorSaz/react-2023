const baseURL = 'https://jsonplaceholder.typicode.com';


const comments = '/comments';
const posts = '/posts';
const albums = '/albums';
const todos = '/todos';
const users = '/users';

const urls = {
    comments,
    posts: {
        posts,
        byId: (id: string): string => `${posts}/${id}`
    },
    albums,
    todos,
    users: {
        byId: (id: number): string => `${users}/${id}`}
};

export {
    baseURL,
    urls
}