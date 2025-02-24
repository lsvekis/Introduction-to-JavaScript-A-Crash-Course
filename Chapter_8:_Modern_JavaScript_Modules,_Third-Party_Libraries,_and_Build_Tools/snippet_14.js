import moment from 'moment';
export function formatDate(date) {
return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
}
src/utils.js
js