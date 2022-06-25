'use strict';
const newObject = {};
const createObject = function (object, requiredProperty) {
  for (const key of requiredProperty) {
    if (Array.isArray(object[key[0]])) {
      const array = object[key[0]];
      const indexObject = key[1];
      const required = key[2];
      createObject(array[indexObject], required);
    }
    if (typeof object[key[0]] === "object" && !Array.isArray(object[key[0]])) {
      createObject(object[key[0]], key[1]);
    }
    if (object.hasOwnProperty(key)) newObject[key] = object[key];
  }
};
export { createObject as extractData };