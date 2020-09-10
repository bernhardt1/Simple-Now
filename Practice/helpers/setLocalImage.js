import Images from '@assets/images';

// this function accepts a string and returns the local image with a matching name.
function setLocalImage(name) {
  let result;
  // we can't pass the image as a prop so we derive the proper image from a string prop instead
  Object.keys(Images).forEach(image => {
    if (name === image) {
      result = Images[image.toString()];
    }
  });
  return result;
}

export default setLocalImage;
