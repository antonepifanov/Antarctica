import {iosVhFix} from './utils/ios-vh-fix';
import {initPhoneMask} from './modules/init-phone-mask';
import {initValidation} from './modules/init-validation';
import {initMobMenu} from './modules/init-mob-menu';
import {initMap} from './modules/init-map';


window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();

  // Modules

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initMobMenu();
    initPhoneMask();
    initValidation();
    initMap();
  });
});
