export interface ISubscriptionDetails {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  initialPaymentAmount: number;
  subscriptionInterval: string;
  level: number;
  mostPopular: boolean;
  trialAvailable: boolean;
}

export interface IInvoice {
  id: string;
  amount: number;
  currency: string;
  nextPaymentDate: string;
  status: string;
}

export interface ISubscription {
  id: string;
  createdAt: string;
  lastModifiedDate: string;
  status: string;
  invoice: IInvoice;
  subscriptionDetails: ISubscriptionDetails;
}

export interface ICreateSubscriptionRequest {
  anyCurrency: boolean;
  accountId: string;
  subscriptionDetailsId: string;
}

export interface ICreateSubscriptionResponse {
  id: string;
  transactionId: string;
  payUrl: string;
  result: number;
  desc: string;
}
