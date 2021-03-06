import axios from 'axios';

import { API_HOST } from '@/config';
import { IApiResponse } from '@/types/apis/apiResponse';

const axiosInstance = axios.create({
  baseURL: API_HOST
});

export const get = async <T>(path: string, config?: any): Promise<IApiResponse<T>> => {
  try {
    const res = await axiosInstance.get<T>(path, config);
    // console.log(res);
    return { data: res.data, code: 200 };
  } catch (e) {
    return { data: {} as any, code: 500 };
  }
};

export const post = async <T>(path: string, form: FormData, config?: any): Promise<IApiResponse<T>> => {
  try {
    const res = await axiosInstance.post<T>(path, form, config);
    // console.log(res);
    return { data: res.data, code: 200 };
  } catch (e) {
    return { data: {} as any, code: 500 };
  }
};
