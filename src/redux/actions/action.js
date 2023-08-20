export const updateFieldValue = (field, value) => ({
  type: "UPDATE_FIELD_VALUE",
  payload: { field, value },
});

export const toggleFieldVisibility = (field, visible) => ({
  type: "TOGGLE_FIELD_VISIBILITY",
  payload: { field, visible },
});

export const submitForm = () => ({
  type: "SUBMIT_FORM",
});

export const clearForm = () => ({
  type: "CLEAR_FORM",
});
