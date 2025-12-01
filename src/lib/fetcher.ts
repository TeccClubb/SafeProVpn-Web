import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getSession } from "next-auth/react";

export const fetcher = async <
  T,
  R extends AxiosResponse<T> = AxiosResponse<T>,
  D = object
>(
  url: string,
  config?: AxiosRequestConfig<D>
) => await axios.get<T, R, D>(url, config).then((res) => res.data);

export const fetcherWithToken = async <
  T,
  R extends AxiosResponse<T> = AxiosResponse<T>,
  D = object
>(
  url: string,
  config?: AxiosRequestConfig<D>
) => {
  const session = await getSession();
  return await axios<T, R, D>(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session?.user.access_token}`,
      ...config?.headers,
    },
    ...config,
  }).then((res) => res.data);
};
