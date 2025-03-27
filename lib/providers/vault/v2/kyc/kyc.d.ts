import { VaultV2SDKOptions } from "../../interfaces/vault.v2.interface";
import VaultProviderV2Base from "../VaultProviderBase";
import { IKycInfoResponse, IKycStartRequest, IKycStatusRequest, IKycInfoByIdRequest, IKycUploadDocumentRequest, IKycUploadDocumentResponse, IKycInfoDocumentRequest, IKycByIdRequest } from "./interfaces/kyc.interface";
export declare class Kyc extends VaultProviderV2Base {
    constructor(options: VaultV2SDKOptions);
    status(body: IKycStatusRequest): Promise<IKycInfoResponse>;
    start(body: IKycStartRequest): Promise<IKycInfoResponse>;
    infoKycById(body: IKycInfoByIdRequest): Promise<IKycInfoResponse>;
    uploadDocument(body: IKycUploadDocumentRequest): Promise<IKycUploadDocumentResponse>;
    infoDocumentById(body: IKycInfoDocumentRequest): Promise<IKycUploadDocumentResponse>;
    updateStatus(body: IKycByIdRequest): Promise<IKycInfoResponse>;
    removeDocument(body: IKycInfoDocumentRequest): Promise<{}>;
}
export default Kyc;
