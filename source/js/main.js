import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initValidation} from './modules/init-validation';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();

  // Modules
  initModals();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initPhoneMask();
    initValidation();
  });
});
