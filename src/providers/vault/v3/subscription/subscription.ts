import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { VaultProviderV3Base } from "../VaultProviderBase";
import {
  ISubscription,
  ISubscriptionDetails,
  ICreateSubscriptionRequest,
  ICreateSubscriptionResponse,
} from "./interfaces/subscription.interface";

export class Subscription extends VaultProviderV3Base {
  constructor(options: VaultV3SDKOptions) {
    super(options);
  }

  async getSubscriptions(): Promise<ISubscription[]> {
    const path = "/reg/subscription";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }

  async createSubscription(
    body: ICreateSubscriptionRequest
  ): Promise<ICreateSubscriptionResponse> {
    const path = "/reg/subscription";

    return await this.request(path, {
      method: "POST",
      headers: this.createHeaders(),
      data: body,
    });
  }

  async getAvailableSubscriptionDetails(): Promise<ISubscriptionDetails[]> {
    const path = "/reg/subscription/details/available";

    return await this.request(path, {
      method: "GET",
      headers: this.createHeaders(),
    });
  }
}
