/* eslint-disable no-undef */
import '../vendor/ymaps';

export const initMap = () => {
  const map = document.querySelector('#map');
  if (!map) {
    return;
  }

  const coordinates = map.dataset.coordinates.split(',');
  const centerCoordinates = map.dataset.center.split(',');
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map('map', {
      center: centerCoordinates,
      zoom: 15,
    });

    let myPlacemark = new ymaps.Placemark(coordinates, {
      hintContent: '',
    },

    {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/pin-icon.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [0, -10],
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
};
