import _ from 'lodash';
export function capitalizeWords(str) {
return _.startCase(_.toLower(str));
}
src/main.js
js