import { gql } from "@apollo/client";

export const CREATE_INQUIRY = gql(`
  mutation CreateInquiry($createInquiryInput: CreateInquiryInput!) {
  createInquiry(createInquiryInput: $createInquiryInput) {
    success
  }
}
`);
