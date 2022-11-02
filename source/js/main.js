import {iosVhFix} from './utils/ios-vh-fix';
import {initPhoneMask} from './modules/init-phone-mask';
import {initValidation} from './modules/init-validation';
import {initMobMenu} from './modules/init-mob-menu';
import {initMap} from './vendor/ymaps';


window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();

  // Modules

  initMobMenu();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initPhoneMask();
    initValidation();
    initMap();
  });
});
