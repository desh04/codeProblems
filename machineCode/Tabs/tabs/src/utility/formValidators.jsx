export const nameValidator = (name) => {
  if (!name) {
    return "Name is required";
  }
  if (name.length < 4) {
    return "Name should be of 4 alphabets";
  }
  return "";
};

export const ageValidator = (age) => {
  if (age < 18) {
    return "Age should be 18";
  }
  if (!age) {
    return "age is required";
  }
  return "";
};

export const emailValidator = (email) => {
  if (!email.includes("@")) {
    return "Enter a valid email";
  }
  return "";
};
