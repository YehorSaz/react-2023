const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars';

const urls = {
    carAPI: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    }
};

export {
    carsBaseURL,
    urls
}