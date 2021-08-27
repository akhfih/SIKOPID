/* eslint-disable space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

import DataSource from './data/data-source';

function main() {
  const globalElement = document.querySelector('app-global');
  const listRegion = document.querySelector('.form-select');
  const regionTerkonfirmasiElement = document.querySelector('.terkonfirmasi');
  const regionSembuhElement = document.querySelector('.sembuh');
  const regionMeninggalElement = document.querySelector('.meninggal');

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

  const kasusRegion = async (e) => {
    try {
      const result = await DataSource.kasusRegion(e.target.value);
      regionTerkonfirmasiElement.textContent =
        result.confirmed.value.toLocaleString('id');
      regionSembuhElement.textContent =
        result.recovered.value.toLocaleString('id');
      regionMeninggalElement.textContent =
        result.deaths.value.toLocaleString('id');
      console.log(result);
    } catch (message) {
      alert('konesksi tidak ada kasus region');
      console.log(message);
    }
  };

  const renderSelectList = async () => {
    try {
      const result = await DataSource.kodeRegion();
      result.countries.forEach((item) => {
        const opt = document.createElement('option');
        opt.value = item.iso2;
        opt.innerHTML = item.name;
        listRegion.appendChild(opt);
      });
    } catch (message) {
      console.log(message);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    kasusGlobal();
    renderSelectList();
    listRegion.addEventListener('change', kasusRegion);
  });
}

export default main;
