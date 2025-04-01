import axios, { AxiosRequestConfig } from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export interface ProviderBaseSDKOptions {
  url: string;
}

export class ProviderBaseSDK {
  protected options: Required<ProviderBaseSDKOptions> =
    {} as Required<ProviderBaseSDKOptions>;

  constructor(options?: Partial<ProviderBaseSDKOptions>) {
    if (!options) {
      return;
    }
    this.setOptions(options);
  }
  protected setOptions(options: Partial<ProviderBaseSDKOptions> = {}) {
    const { url } = options;

    Object.assign(this.options, {
      url,
    });
  }

  private _request = <T>(options: AxiosRequestConfig): Promise<T> => {
    return axios
      .request(options)
      .then(({ data }) => data)
      .catch((err) => Promise.reject(err));
  };

  protected request = <T>(
    path: string,
    options: AxiosRequestConfig
  ): Promise<T> => {
    if (!this.options.url) {
      return Promise.reject("Rest url is required.");
    }
    options.url = `${this.options.url}${path}`;
    return this._request<T>(options);
  };
}
