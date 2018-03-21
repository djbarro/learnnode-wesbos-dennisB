function autocomplete(input, latInput, lngInput) {
  if (!input) return;
  
  
  const dropdown = new google.maps.places.Autocomplete(input);
  dropdown.addListener('place_changed', () => {
      const place = dropdown.getPlace();
     latInput.value = place.geometry.location.lat();
     lngInput.value = place.geometry.location.lng();
  });
  //- console.log('autocomplte inputs', input, latInput, lngInput);
  // prevent the enter key on the address field from submitting the form again.
  input.on('keydown', (e) => {
      if (e.keycode === 13) e.preventDefault();
  });
}
//- mykey AIzaSyBy_PE0UqN25BjqaAsikk9LGOSZR5VUmGc
export default autocomplete;
