const useFormValidation = (formData) => {
  const errors = {};

  // Define your validation rules here
  if (formData.employed === "Yes" && !formData.companyName) {
    errors.companyName = "Company Name is required";
  }

  // Add more validation rules as needed

  const isValid = Object.keys(errors).length === 0;

  return {
    errors,
    isValid,
  };
};

export default useFormValidation;
