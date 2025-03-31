import { VaultV3SDKOptions } from "../../interfaces/vault.v3.interface";
import { VaultProviderV3Base } from "../VaultProviderBase";
import { ISubscription, ISubscriptionDetails, ICreateSubscriptionRequest, ICreateSubscriptionResponse } from "./interfaces/subscription.interface";
export declare class Subscription extends VaultProviderV3Base {
    constructor(options: VaultV3SDKOptions);
    getSubscriptions(): Promise<ISubscription[]>;
    createSubscription(body: ICreateSubscriptionRequest): Promise<ICreateSubscriptionResponse>;
    getAvailableSubscriptionDetails(): Promise<ISubscriptionDetails[]>;
}
