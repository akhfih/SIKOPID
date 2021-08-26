/* eslint-disable space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

import DataSource from './data/data-source';

function main() {
  const globalElement = document.querySelector('app-global');
  const regionElement = document.querySelector('app-region');

  const kasusGlobal = async () => {
    try {
      const result = await DataSource.kasusGlobal();
      globalElement.data = result;
      console.log(result);
    } catch (message) {
      alert('konesksi tidak ada');
      console.log(message);
    }
  };

  const kasusRegion = async (kode) => {
    try {
      const result = await DataSource.kasusRegion(kode);
      regionElement.data = result;
    } catch (message) {
      alert('konesksi tidak ada kasus region');
      console.log(message);
    }
  };

  const renderSelectList = async () => {
    try {
      const result = await DataSource.kodeRegion();
      let pilih = '';
      result.countries.forEach(
        (item) => (pilih += `<option value=${item.iso2}>${item.name}</option>`)
      );
      regionElement.dataKode = pilih;
    } catch (message) {
      console.log(message);
    }
  };

  const eventUbah = function (e) {
    kasusRegion(e.target.value);
  };

  document.addEventListener('DOMContentLoaded', () => {
    kasusGlobal();
    regionElement.eventUbah = eventUbah;

    renderSelectList();
  });
}

export default main;
