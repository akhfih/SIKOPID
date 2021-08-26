/* eslint-disable space-before-function-paren */
/* eslint-disable accessor-pairs */
import sedih from '../../assets/sedih.png';
import senyum from '../../assets/senyum.png';
import nangis from '../../assets/nangis.png';

class AppRegion extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set dataKode(kode) {
    // this._terkonfirmasi = data.confirmed.value.toLocaleString('id') || null;
    // this._sembuh = data.recovered.value.toLocaleString('id') || null;
    // this._meninggal = data.deaths.value.toLocaleString('id') || null;
    // this._update = data.lastUpdate.toLocaleString('id') || null;
    this._kodeRegion = kode;

    this.render();
  }

  set data(data) {
    this._terkonfirmasi = data.confirmed.value.toLocaleString('id') || null;
    this._sembuh = data.recovered.value.toLocaleString('id') || null;
    this._meninggal = data.deaths.value.toLocaleString('id') || null;
    this._update = data.lastUpdate.toLocaleString('id') || null;

    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="region" class="region">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffff" fill-opacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path>
    </svg>

    <div class="container">
        <div class="row text-center">
            <h4 class="fw-bold lead mb-3 text-white fs-large judul-section">KASUS COVID-19 REGION</h4>
            <span class="pb-2 text-white">Update : 23 Agustus 2021<span>
        </div>
        <div class="col-md-6 offset-md-3 mt-2 mb-3">
            <select class="form-select shadow-sm" >
            <option selected> - </option>
            ${this._kodeRegion}
            </select>
        </div>
        <div class="row ">
        <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                    <img src=${sedih} alt="">
                    <span class="count fw-bold fs-2">${this._terkonfirmasi}</span>
                    <span class="fw-bold badge text-white bg-warning">TERKONFIRMASI</span>                            
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                    <img src=${senyum} alt="">
                    <span class="count fw-bold fs-2">${this._sembuh}</span>
                    <span class="fw-bold badge text-white bg-success">SEMBUH</span>
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                <img src=${nangis} alt="">
                <span class="count fw-bold fs-2">${this._meninggal}</span>
                <span class="fw-bold badge text-white bg-danger">MENINGGAL</span>
                </div>
            </div>
        </div>
        
    </div>

        </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffff" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path>
    </svg>
    </section>`;
  }
}

customElements.define('app-region', AppRegion);
