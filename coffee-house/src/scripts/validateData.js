function validateData(data) {
    if (!Array.isArray(data)) {
      throw TypeError('Slider error. Data array is invalid.');
    }
    for (let i = 0; i < data.length; i++) {
      Object.keys(data[i]).forEach(key => {
        if ((typeof data[i][key]) === 'string' && data[i][key] === '' && Array.isArray(data[i][key]) === false) {
          throw TypeError(`Object error. Fields ${key} is invalid.`);
        }
      });
    }
    return true;
};

export default validateData;