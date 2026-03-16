import axios from "axios";

export class PokeApidFetchAdapter {

  async get<T>(url: string): Promise<T> {

    const resp = await fetch(url);

    const data: T = await resp.json();

    return data;
  }

}


export class PokeApiAdapter {

  private readonly axios = axios

  async get<T>(url: string): Promise<T> {

    const { data } = await this.axios.get<T>(url);

    return data;

  }

  async post(url: string, data: any) {

  }

  async put(url: string, data: any) {

  }

  async delete(url: string) {

  }

}