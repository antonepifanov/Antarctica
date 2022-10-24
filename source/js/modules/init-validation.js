import {rules} from '../utils/validation-rules.js';

export const initValidation = () => {
  const forms = document.querySelectorAll('form');
  if (!forms.length) {
    return;
  }

  forms.forEach((form) => {
    const button = form.querySelector('button[type=submit]');
    const inputs = form.querySelectorAll('input[required]');
    if (!inputs.length) {
      return;
    }

    const checkInput = (input) => {
      const check = rules[input.type];
      const result = check(input.value);
      input.setCustomValidity('');
      if (typeof result === 'string') {
        input.setCustomValidity(result);
        input.focus();
        return;
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInput(input);
        input.reportValidity();
      });
    });

    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      inputs.forEach((input) => {
        checkInput(input);
        input.reportValidity();
      });

      if (form.checkValidity()) {
        form.submit();
      }
    });
  });
};
