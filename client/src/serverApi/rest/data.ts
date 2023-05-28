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
    addClass: async (schoolId, className,auth = '') => {
    const res = await serverApi.post(`/api/v2/data/school/${schoolId}/class`, { className },auth);
    return serverApi.handleResult(res, 'Add Class Error');
    },
  getServerInfo: async () => {
    const res = await serverApi.get('/test');
    return serverApi.handleResult(res, 'Get Server Info Error');
  },
    getMeta: async () => {
    const res = await serverApi.get('/api/v2/data/meta');
    return serverApi.handleResult(res, 'Get Meta Error');
    }
};
