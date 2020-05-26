export function createControl(config, validation){
  return{
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  }
}

export function validate(value, validation = null) {
  if(!validation){
    return true
  }

  let isValid = true;
  if (validation.required){
    isValid = value.trim() !== '' && isValid
  }

  return isValid;
}

export function validateForm(formControls){
  let isFormValid = true;
  console.log(isFormValid, 0);

  for( let control in formControls){
    if(formControls.hasOwnProperty(control)){
      console.log(isFormValid, 1);
      console.log("formControls[control].valid ", formControls[control].valid);
      console.log("formControls[control] ", formControls[control]);

      isFormValid = formControls[control].valid && isFormValid
    }
  }

  console.log(isFormValid, 2);
  
  return isFormValid;
}