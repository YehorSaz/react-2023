const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const comments = '/comments';
const posts = '/posts';
const albums = '/albums';
const todos = '/todos';

const urls = {
    users: {
        users,
        byId: (id: string): string => `${users}/${id}`
    },
    comments,
    posts: {
        posts,
        byId: (id: string): string => `${posts}/${id}`
    },
    albums,
    todos
};

export {
    baseURL,
    urls
}