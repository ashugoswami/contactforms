import { useSelector } from "react-redux";

const useConditionalLogic = () => {
  const formData = useSelector((state) => state.formData);
  const fieldVisibility = useSelector((state) => state.fieldVisibility);

  // Define your conditional logic here based on formData
  const isCompanyNameVisible = formData.employed === "Yes";

  return {
    isCompanyNameVisible,
  };
};

export default useConditionalLogic;
