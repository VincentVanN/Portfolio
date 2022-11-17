/* eslint-disable import/prefer-default-export */
export const isErrorForm = (ref) => {
  const errorArray = [];
  if (!ref.user_name.value) {
    errorArray.push('Votre nom est obligatoire.');
  }
  if (!ref.user_email.value) {
    errorArray.push('Votre email est obligatoire.');
  }
  if (!ref.message.value) {
    errorArray.push('Le texte est vide.');
  }
  if (errorArray.length !== 0) {
    return errorArray;
  }
  return false;
};
