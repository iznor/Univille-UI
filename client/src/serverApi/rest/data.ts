import * as serverApi from '../serverApi';

export const dataApi = {
  getSchools: async () => {
    const res = await serverApi.get('/api/v2/data/schools');
    return serverApi.handleResult(res, 'Get Schools Error');
  },
  getSchool: async (schoolId) => {
    const res = await serverApi.get(`/api/v2/data/school/${schoolId}`);
    return serverApi.handleResult(res, 'Get School Error');
  },
  getClasses: async (schoolId) => {
    const res = await serverApi.get(`/api/v2/data/school/${schoolId}`);
    return serverApi.handleResult(res, 'Get Classes Error');
  },
  getServerInfo: async () => {
    const res = await serverApi.get('/test');
    return serverApi.handleResult(res, 'Get Server Info Error');
  }
};
