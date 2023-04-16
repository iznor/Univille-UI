import * as serverApi from '../serverApi';

export const authApi = {
    login: async (email, password) => {
        const res = await serverApi.post('/api/auth/login', {email, password});
        return serverApi.handleResult(res, 'SignIn Error');
    },
    signup: async ({firstName, lastName, email, password}) => {
        const res = await serverApi.post('/api/auth/signup', {firstName, lastName, email, password});
        return serverApi.handleResult(res, 'Signup Error');
    },
    tgAuth: async (phoneNumber, password,email) => {
        const res = await serverApi.post('/api/auth/tg', {phoneNumber, password, email});
        return serverApi.handleResult(res, 'Telegram Auth Error');
    },
    tgVerify: async (phoneNumber, code) => {
        const res = await serverApi.post('/api/auth/tg/verify', {phoneNumber, code});
        return serverApi.handleResult(res, 'Telegram Verify Error');
    },
}
