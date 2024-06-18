import { ResponseType } from "axios";
import { Observable, defer, map, catchError } from "rxjs";
import api from "./config";

const get = <T>(
    url: string,
    params?: object,
    baseURL?: string,
    responseType: ResponseType = "json",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    token?: any
  ): Observable<T> => {
    return defer(() =>
      api(baseURL, token).get<T>(url, { params, responseType })
    ).pipe(map((result) => result.data), catchError((error) => {
      console.error('Erro na requisição GET:', error);
      throw error; // Re-throw para propagar o erro
    })
  )
  };
  
  const post = <T>(
    url: string,
    body: object,
    params?: object,
    baseURL?: string
  ): Observable<T | void> => {
    return defer(() => api(baseURL).post<T>(url, body, {...params})).pipe(
        map((result) => result.data),
        catchError((error) => {
          console.error('Erro na requisição POST:', error);
          throw error; // Re-throw para propagar o erro
        })
    );
  };

  const patch = <T>(
    url: string,
    body: object,
    params?: object,
    baseURL?: string
  ): Observable<T | void> => {
    return defer(() => api(baseURL).patch<T>(url, body, {...params})).pipe(
        map((result) => result.data),
        catchError((error) => {
          console.error('Erro na requisição PATCH:', error);
          throw error; // Re-throw para propagar o erro
        })
    );
  };

  const deleteR = <T> (
    url: string,
    baseURL?: string
  ): Observable<T | void> => {
    return defer(() => api(baseURL).delete(`${url}`)).pipe(
        map((result) => result.data),
        catchError((error) => {
          console.error('Erro na requisição DELETE:', error);
          throw error; // Re-throw para propagar o erro)
      })
    );
  };

  export default {get, post, patch, delete: deleteR, catchError}