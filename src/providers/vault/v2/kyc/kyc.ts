import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import {
  IKycInfoResponse,
  IKycStartRequest,
  IKycStatusRequest,
  IKycInfoByIdRequest,
  IKycUploadDocumentRequest,
  IKycUploadDocumentResponse,
  IKycInfoDocumentRequest,
  IKycByIdRequest,
} from "./interfaces/kyc.interface";

export class Kyc extends VaultProviderV2Base {
  constructor(options: VaultV2SDKOptions) {
    super(options);
  }

  async status(body: IKycStatusRequest): Promise<IKycInfoResponse> {
    const path = "/reg/verification";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "GET", headers, params: body });
  }

  async start(body: IKycStartRequest): Promise<IKycInfoResponse> {
    const path = "/reg/verification";

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, { method: "POST", headers, data: body });
  }

  async infoKycById(body: IKycInfoByIdRequest): Promise<IKycInfoResponse> {
    const { kycId, ...otherData } = body;
    const path = `/reg/verification/${kycId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
      params: otherData,
    });
  }

  async uploadDocument(
    body: IKycUploadDocumentRequest
  ): Promise<IKycUploadDocumentResponse> {
    const { kycId, ...otherData } = body;
    const path = `/reg/verification/${kycId}/docs`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
      "content-type": "multipart/form-data",
    };

    return await this.request(path, {
      method: "POST",
      headers,
      data: otherData,
    });
  }

  async infoDocumentById(
    body: IKycInfoDocumentRequest
  ): Promise<IKycUploadDocumentResponse> {
    const { kycId, docId } = body;
    const path = `/reg/verification/${kycId}/docs/${docId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "GET",
      headers,
    });
  }

  async updateStatus(body: IKycByIdRequest): Promise<IKycInfoResponse> {
    const path = `/reg/verification/${body.kycId}/status`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "PUT",
      headers,
    });
  }

  async removeDocument(body: IKycInfoDocumentRequest): Promise<{}> {
    const { kycId, docId } = body;
    const path = `/reg/verification/${kycId}/docs/${docId}`;

    const headers = {
      ...this.headers,
      authorization: `Bearer ${this.getToken()}`,
    };

    return await this.request(path, {
      method: "DELETE",
      headers,
    });
  }
}

export default Kyc;
