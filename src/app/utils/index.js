import * as _ from "lodash";

export const isObjEmpty = (obj) => {
  return _.isEmpty(obj);
};

export const isArray = (obj) => {
  return _.isArray(obj);
};

export const removeDomain = (str) => {
  return str.replace(/^.*\/\/[^/]+/, "");
};

export const capitalize = (str) => {
  return _.startCase(_.toLower(str));
};
