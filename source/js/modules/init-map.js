import ymaps from '../vendor/ymaps';

export const initMap = () => {
  const map = document.querySelector('#map');
  if (!map) {
    return;
  }

  const coordinates = map.dataset.coordinates.split(',');
  const centerCoordinates = map.dataset.center.split(',');

  ymaps.load()
      .then((maps) => {
        const myMap = new maps.Map('map', {
          center: centerCoordinates,
          zoom: 16,
        });

        const myPlacemark = new maps.Placemark(coordinates, {
          hintContent: '',
        },

        {
          iconLayout: 'default#image',
          iconImageHref: './../img/svg/pin-icon.svg',
          iconImageSize: [18, 22],
          iconImageOffset: [0, -10],
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
      });
};
