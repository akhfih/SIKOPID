/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable accessor-pairs */
import sedih from '../../assets/sedih.png';
import senyum from '../../assets/senyum.png';
import nangis from '../../assets/nangis.png';
class AppRegion extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    // eslint-disable-next-line no-undef
    // this.style.textContent = styles;
    // this.shadowDOM.appendChild(style);
  }

  connectedCallback() {
    this.render();
    this._dataKasus = `
    <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                    <img src=${sedih} alt="">
                    <span class="count terkonfirmasi fw-bold fs-2">0</span>
                    <span class="fw-bold badge text-white bg-warning">TERKONFIRMASI</span>                            
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                    <img src=${senyum} alt="">
                    <span class="count sembuh fw-bold fs-2">0</span>
                    <span class="fw-bold badge text-white bg-success">SEMBUH</span>
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="card global__data shadow-sm">
                <div class="card-body">
                <img src=${nangis} alt="">
                <span class="count meninggal fw-bold fs-2">0</span>
                <span class="fw-bold badge text-white bg-danger">MENINGGAL</span>
                </div>
            </div>
        </div>    
    `;
  }

  set dataKode(kode) {
    this._kodeRegion = kode;
    this.render();
  }

  set eventUbah(event) {
    this._event = event;
  }

  set data(data) {
    this._terkonfirmasi = data.confirmed.value.toLocaleString('id');
    this._sembuh = data.recovered.value.toLocaleString('id');
    this._meninggal = data.deaths.value.toLocaleString('id');
    this._update = data.lastUpdate.toLocaleString('id');

    this.teks();
  }

  teks() {
    this.shadowDOM.querySelector('.terkonfirmasi').textContent =
      this._terkonfirmasi;
    this.shadowDOM.querySelector('.sembuh').textContent = this._sembuh;
    this.shadowDOM.querySelector('.meninggal').textContent = this._meninggal;
  }

  render() {
    this.shadowDOM.innerHTML = `
    
    <section id="region" class="region">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffff" fill-opacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path>
    </svg>

    <div class="container">
        <div class="row text-center">
            <h4 class="fw-bold lead mb-3 text-white fs-large judul-section">KASUS COVID-19 REGION</h4>
            <span class="pb-2 text-white">Update : ${this._update}<span>
        </div>
        <div class="col-md-6 offset-md-3 mt-2 mb-3">
            <select class="form-select shadow-sm" >
            <option selected >Pilih Region</option>
            ${this._kodeRegion}
            </select>
        </div>
        <div class="row ">
        ${this._dataKasus}
        
        </div>

        </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffff" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path>
    </svg>
    </section>`;

    this.shadowDOM
      .querySelector('.form-select')
      .addEventListener('change', this._event);
  }
}

customElements.define('app-region', AppRegion);
