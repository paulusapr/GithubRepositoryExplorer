import axios, { AxiosResponse } from 'axios';

interface Headers {
  [key: string]: string | number;
}

const defaultHeaders: any = {
  'Content-Type': 'application/json',
};

export const get = <T = any, D = unknown>(
  url: string,
  params?: D,
  headers?: Headers,
) => {
  const thisUrl = new URL(url);
  if (params) {
    Object.keys(params).forEach((name: string) => {
      thisUrl.searchParams.set(name, (params[name as keyof typeof params] || '').toString());
    });
  }

  return axios.get<T, AxiosResponse<T>, D>(thisUrl.href, {
    headers: structuredClone({ ...defaultHeaders, ...headers }),
    params,
  });
};
