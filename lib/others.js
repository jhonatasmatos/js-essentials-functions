// Email validation
export const emailValidation = (email) => {
  let reg = /^[a-z][_a-z0-9\-.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  return reg.test(email);
};