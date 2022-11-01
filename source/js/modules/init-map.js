import ymaps from '../vendor/ymaps';

export const initMap = async() => {
  const maps = await ymaps.load();
    const map = document.querySelector('#map');
    const coordinates = map.dataset.coordinates.split(',');
    const centerCoordinates = map.dataset.center.split(',');
    const myMap = new maps.Map(map, {
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


};
