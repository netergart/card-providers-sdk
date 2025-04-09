export interface IKycStartResponse {
  token: string;
}

export interface IKycStartRequest {
  type: "SUMSUB";
}

export interface IKycStatusResponse {
  info: {
    dob: string;
    documentNumber: string;
    documentType: string;
    expirationDate: string;
    issuedDate: string;
    jobTitle: string;
    nationality: string;
    taxResidency: string;
  };
  status: string;
  statusComment: string;
}
