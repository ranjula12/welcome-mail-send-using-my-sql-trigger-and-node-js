const validation = (values) => {
  
    let errors = {};
  
    // Name validation
    if (!values.name) {
      errors.name = "Name is required";
    }
    else{
      errors.name ="";
    }
    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }
    else{
      errors.email ="";
    }
  
    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password[0].length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    else{
      errors.password ="";
    }
  
    return errors;
  };

export default validation