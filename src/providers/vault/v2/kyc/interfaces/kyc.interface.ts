export interface IKycStatusRequest {
  validate?: boolean;
}

export interface IKycInfoResponse {
  id: string;
  status: string;
  type: string;
  applicationDocumentErrors: {
    description: string;
    document: string;
    id: string;
    status: string;
  }[];
  applicationErrors: string[];
  applicationValidationErrors: {
    description: string;
    field_name: string;
    field_status: string;
  }[];
  docs: {
    file_type: string;
    filename: string;
    id: string;
    size: number;
    status: string;
    sub_type: string;
    type: string;
  }[];
  individualErrors: {
    id: string;
    individual_document_errors: {
      description: string;
      document: string;
      id: string;
      status: string;
    }[];
    individual_validation_errors: {
      description: string;
      field_name: string;
      field_status: string;
    }[];
  }[];
}

export enum KycType {
  SUMSUB = "SUMSUB",
}

export interface IKycStartRequest {
  type: KycType;
}

export interface IKycByIdRequest {
  kycId: string;
}

export interface IKycDocumentByIdRequest {
  docId: string;
}

export interface IKycInfoByIdRequest
  extends IKycStatusRequest,
    IKycByIdRequest {}

export interface IKycUploadDocumentRequest extends IKycByIdRequest {
  file: any;
}

export interface IKycUploadDocumentResponse {
  file_type: string;
  filename: string;
  id: string;
  size: number;
  status: string;
  sub_type: string;
  type: string;
}

export interface IKycInfoDocumentRequest
  extends IKycByIdRequest,
    IKycDocumentByIdRequest {}
