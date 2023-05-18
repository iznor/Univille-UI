import * as process from "process";

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';
// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://univille.of-el.com' : 'http://localhost:5000';
// const baseUrl = 'http://univille.of-el.com/:5000';
// const baseUrl = 'https://comment-on-everything.herokuapp.com';

export const get = async (url, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};
export const apiDelete = async (url, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};

export const put = async (url, body, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'application/json',
    },
  });
};

export const patch = async (url, body, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'application/json',
    },
  });
};

export const post = async (url, body, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${auth}`,
      'Content-Type': 'application/json',
    },
  });
};
export const postFile = (url, body, auth = '') => {
  return fetch(baseUrl + url, {
    method: 'POST',
    body,
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};

export const handleError = res => {
  if (res.data && res.data[0].msg) return res.data[0].msg;
  if (res.message) return res.message;
  return res;
};

export const handleResult = async (
  res,
  errSrc = '  Internal error',
  customMessage = null,
) => {
  const resData = await res.json();
  if (res && resData && res.status < 400) {
    return resData;
  }
  if (customMessage) throw new Error(customMessage);
  else if (!res) throw new Error(`${errSrc}: Server not responding`);
  else if (!resData) throw new Error(`${errSrc}: Server response was empty`);
  else throw new Error(handleError(resData));
};
