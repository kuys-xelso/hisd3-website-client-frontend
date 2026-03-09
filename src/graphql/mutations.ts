
import { gql } from "@apollo/client";

export const CREATE_INQUIRY = gql(`
  mutation CreateInquiry($input: CreateInquiryInput!) {
    createInquiry(createInquiryInput: $input) {
      id
      name
      email
      phone
      hospitalOrClinic
      message
    }
  }
`);
