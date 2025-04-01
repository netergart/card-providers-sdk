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

  private getErrorMessage(err: any): string {
    if (!err) return "Unknown error occurred";

    // Check if error is directly the response object
    if (err.response) {
      err = err.response;
    }

    // Check nested response structure
    if (err.data) {
      const data = err.data;
      let message = data.message || "Unknown error occurred";

      if (Array.isArray(data.errors) && data.errors.length > 0) {
        const errorDetails = data.errors
          .map((e: any) => `${e.key}: ${e.description}`)
          .join("; ");
        message += ` - ${errorDetails}`;
      }

      return message;
    }

    // Directly check for message
    if (err.message) {
      return err.message;
    }

    return "Unknown error occurred";
  }

  private _request = <T>(options: AxiosRequestConfig): Promise<T> => {
    return axios
      .request(options)
      .then(({ data }) => data)
      .catch((err) => {
        // console.error("Error in request:", err);
        return Promise.reject(err);
      });
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
