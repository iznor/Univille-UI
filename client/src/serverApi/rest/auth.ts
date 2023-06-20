import * as serverApi from '../serverApi';

export const authApi = {
  login: async (email, password) => {
    const res = await serverApi.post('/api/v2/auth/teacher/login', {
      email,
      password,
    });
    return serverApi.handleResult(res, 'SignIn Error');
  },
  signup: async ({ firstName, lastName, email, password, school }) => {
    const res = await serverApi.post('/api/v2/auth/teacher/signup', {
      firstName,
      lastName,
      email,
      password,
      school,
    });
    return serverApi.handleResult(res, 'Signup Error');
  },
};
