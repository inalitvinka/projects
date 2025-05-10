const isInArr = (obj, arr) =>
  arr.some(
    (item) =>
      item.id === obj.id &&
      item.name === obj.name &&
      item.category === obj.category
);

export default isInArr
