function utils(person, size='s') {
  return (       
    //'https://i.imgur.com/' + person.imageId + size + '.jpg'
    `https://i.imgur.com/${person.imageId}${size}.jpg`
  );
}

export default utils;