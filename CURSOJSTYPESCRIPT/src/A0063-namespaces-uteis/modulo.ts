import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

_.MINHAGLOBAL = '9a2ooooo';

export default _;
