/* eslint-disable comma-dangle */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
import axios from 'axios';
class DataSource {
  static kasusGlobal() {
    return axios
      .get(`https://covid19.mathdro.id/api`, {
        timeout: 5000,
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  static kasusRegion(region) {
    return axios
      .get(`https://covid19.mathdro.id/api/countries/${region}`, {
        timeout: 5000,
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  static kodeRegion() {
    return axios
      .get(`https://covid19.mathdro.id/api/countries`, {
        timeout: 5000,
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }
}

export default DataSource;
