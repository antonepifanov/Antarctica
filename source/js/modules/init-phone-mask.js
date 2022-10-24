import iMask from '../vendor/imask';

export const initPhoneMask = () => {
  const telInputs = document.querySelectorAll('input[type=\'tel\']');
  if (!telInputs) {
    return;
  }

  const maskOptions = {
    mask: '{+7}(000) 000 00 00',
  };

  telInputs.forEach((telInput) => {
    iMask(telInput, maskOptions);
  });
};
