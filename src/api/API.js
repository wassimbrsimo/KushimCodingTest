import axios from 'axios';
import {BASE_URL, KEY} from '../config/config';

export async function getWeeklyConversions(from, to, callback) {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setDate(endDate.getDate() - 7);
  const start =
    startDate.getFullYear() +
    '-' +
    (startDate.getMonth() + 1) +
    '-' +
    String(startDate.getDate()).padStart(2, '0');
  const end =
    endDate.getFullYear() +
    '-' +
    (endDate.getMonth() + 1) +
    '-' +
    String(endDate.getDate()).padStart(2, '0');
  axios
    .get(
      BASE_URL +
        'timeseries?access_key=' +
        KEY +
        '&base=' +
        from +
        '&symbols=' +
        to +
        '&start_date=' +
        start +
        '&end_date=' +
        end,
    )
    .then(function (response) {
      // handle success
      callback({res: response.data});
    })
    .catch(function (error) {
      // handle error
      callback({err: error});
    });
}
export async function Convert(from, to, value, callback) {
  axios
    .get(
      BASE_URL +
        'convert?access_key=' +
        KEY +
        '&from=' +
        from +
        '&to=' +
        to +
        '&amount=' +
        value,
    )
    .then(function (response) {
      // handle success
      callback({response: response.data});
    })
    .catch(function (error) {
      // handle error
      callback({error: error});
    });
}
