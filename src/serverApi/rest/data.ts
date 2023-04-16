import * as serverApi from '../serverApi';

export const dataApi = {
    getKeywords: async () => {
        const res = await serverApi.get('/api/data/keywords');
        return serverApi.handleResult(res, 'Get Keywords Error');
    },
    createKeyword: async (name) => {
        const res = await serverApi.post('/api/data/keywords', {name});
        return serverApi.handleResult(res, 'Create Keyword Error');
    },
    deleteKeyword: async (id) => {
        const res = await serverApi.apiDelete(`/api/data/keywords/${id}`);
        return serverApi.handleResult(res, 'Delete Keyword Error');
    },
    getListings: async () => {
        const res = await serverApi.get('/api/data/listings');
        return serverApi.handleResult(res, 'Get Listings Error');
    },
    deleteListing: async (id) => {
        const res = await serverApi.apiDelete(`/api/data/listings/${id}`);
        return serverApi.handleResult(res, 'Delete Listing Error');
    },
    searchListings: async () => {
        const res = await serverApi.get('/api/data/search');
        return serverApi.handleResult(res, 'Search Listings Error');
    }
}
