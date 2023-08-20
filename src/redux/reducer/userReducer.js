const initialState = {
  formData: {
    employed: "No",
    companyName: "",
  },
  fieldVisibility: {
    companyName: false,
  },
  submittedNames: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD_VALUE":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    case "TOGGLE_FIELD_VISIBILITY":
      return {
        ...state,
        fieldVisibility: {
          ...state.fieldVisibility,
          [action.payload.field]: action.payload.visible,
        },
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        submittedNames: [...state.submittedNames, state.formData.companyName],
        formData: {
          ...state.formData,
          companyName: "",
        },
      };
    case "CLEAR_FORM":
      return {
        ...state,
        submittedNames: [],
        formData: {
          ...state.formData,
          companyName: "",
        },
      };
    // Handle other cases here
    default:
      return state;
  }
};

export default formReducer;
