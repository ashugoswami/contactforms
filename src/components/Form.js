import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFieldValue,
  toggleFieldVisibility,
  submitForm,
  clearForm,
} from "../redux/actions/action";
import useConditionalLogic from "./useConditionalLogic";
import useFormValidation from "./useFormValidation";
import "../style/form.css";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const { isCompanyNameVisible } = useConditionalLogic();
  const { errors, isValid } = useFormValidation(formData);

  const submittedNames = useSelector((state) => state.submittedNames);
  const handleFieldChange = (field, value) => {
    dispatch(updateFieldValue(field, value));

    if (field === "employed") {
      const isCompanyVisible = value === "Yes";
      dispatch(toggleFieldVisibility("companyName", isCompanyVisible));
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      dispatch(submitForm());
      alert("form is submitted");
      // Handle form submission logic here
    } else {
      alert("please enter company name");
    }
  };

  const handleClear = () => {
    dispatch(clearForm());
    // Handle any additional clearing logic here
  };

  return (
    <div className="container">
      <h1>Company Form</h1>
      <form className="form-box">
        <div className="mb-2">
          <label className="fw-bold">Are you employed? &nbsp;</label>
          <select
            value={formData.employed}
            onChange={(e) => handleFieldChange("employed", e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {isCompanyNameVisible && (
          <div>
            <label className="fw-bold">Company Name</label>
            <input
              type="text"
              value={formData.companyName}
              className="mx-2 input-forms"
              placeholder="Enter company name"
              onChange={(e) => handleFieldChange("companyName", e.target.value)}
            />
            {errors.companyName && (
              <p className="error-msg">{errors.companyName}</p>
            )}
          </div>
        )}
        <button type="button" className="subm-btn mt-2" onClick={handleSubmit}>
          Submit
        </button>
        {submittedNames.length > 0 && (
          <button
            type="button"
            className="mx-4 subm-btn mt-2"
            onClick={handleClear}
          >
            Clear
          </button>
        )}
      </form>
      {submittedNames.length > 0 && (
        <div className="mt-5">
          <h2>Submitted Names</h2>
          <ul>
            {submittedNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;
