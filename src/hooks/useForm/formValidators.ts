interface IFormValidators {
  required: (val: string) => string;
  number: (val: string) => string;
  url: (val: string) => string;
  email: (val: string) => string;
  password: (val: string) => string;
  confirmPassword: (password: string, confirmPassword: string) => string;
}

export const formValidators: IFormValidators = {
  required: (val) => (val === '' ? 'This field is required' : ''),
  number: (val) =>
    !(!Number.isNaN(val) && !Number.isNaN(parseFloat(val)))
      ? 'Please enter number'
      : '',
  url: (val) => (!isURL(val) ? 'Please enter valid url' : ''),
  email: (val) => (!isEmail(val) ? 'Please enter valid email' : ''),
  password: (val) =>
    !minLength(val, 5) ? 'Should be at least 5 characters' : '',
  confirmPassword: (password, confirmpassword) =>
    !matchPassword(password, confirmpassword) ? 'Passwords not match' : '',
};

function isURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}
function isEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function minLength(val, len) {
  return len <= val.length;
}

function matchPassword(pass, conf) {
  return pass === conf;
}
