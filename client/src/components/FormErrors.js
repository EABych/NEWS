const FormErrors = ({ formErrors }) =>
  Object.keys(formErrors).map((fieldName, i) => {
    if (formErrors[fieldName].length > 0) {
      return formErrors[fieldName];
    } else {
      return "";
    }
  });
export default FormErrors;
