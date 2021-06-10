/* eslint linebreak-style: ["error", "windows"] */
/**
 * Validate email input with regex
 * @param {string} email an email address
 * @returns {boolean} is valid per https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
 */
export default function validateEmail(email) {
  /* eslint-disable-next-line no-useless-escape */
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}