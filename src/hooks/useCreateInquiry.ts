import { useMutation } from "@apollo/client/react";
import { CREATE_INQUIRY } from "@/graphql/mutations";
import type { 
  CreateInquiryMutation, 
  CreateInquiryMutationVariables,
  CreateInquiryInput 
} from "@/graphql/generated/graphql";

/**
 * Custom hook to handle inquiry creation.
 * Encapsulates the CREATE_INQUIRY mutation logic.
 */
export const useCreateInquiry = () => {
  const [createInquiry, { data, loading, error }] = useMutation<
    CreateInquiryMutation, 
    CreateInquiryMutationVariables
  >(CREATE_INQUIRY);

  /**
   * Submit an inquiry to the backend.
   * @param input The inquiry data.
   */
  const submitInquiry = async (input: CreateInquiryInput) => {
    try {
      const result = await createInquiry({
        variables: {
          createInquiryInput: input,
        },
      });
      return result.data?.createInquiry;
    } catch (err) {
      console.error("Inquiry submission error:", err);
      throw err;
    }
  };

  return {
    submitInquiry,
    isLoading: loading,
    error,
    success: data?.createInquiry?.success || false,
  };
};
