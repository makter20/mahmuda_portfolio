export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default importAll;
