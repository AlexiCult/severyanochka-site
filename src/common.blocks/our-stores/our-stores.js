const ourStoreBtns = document.querySelectorAll('.our-stores__btn');
const ourStoreMaps = document.querySelectorAll('.our-stores__map');

function changeMap(event) {
  ourStoreBtns.forEach((btn) => {
    btn.classList.remove('active-map-btn');
    event.target.classList.add('active-map-btn');
  });
  ourStoreMaps.forEach((map) => {
    map.classList.remove('active-map');
  });
  const currentMapID = `${event.target.id.slice(0, -4)}-map`;
  document.getElementById(currentMapID).classList.add('active-map');
}

ourStoreBtns.forEach(btn => btn.addEventListener('click', changeMap));
