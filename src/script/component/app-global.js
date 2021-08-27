/* eslint-disable accessor-pairs */
/* eslint-disable no-unused-expressions */
/* eslint-disable space-before-function-paren */
import sedih from '../../assets/sedih.png';
import senyum from '../../assets/senyum.png';
import nangis from '../../assets/nangis.png';
class AppGlobal extends HTMLElement {
  // eslint-disable-next-line space-before-function-paren
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._terkonfirmasi = data.confirmed.value.toLocaleString('id');
    this._sembuh = data.recovered.value.toLocaleString('id');
    this._meninggal = data.deaths.value.toLocaleString('id');
    this._update = new Date(data.lastUpdate);
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="global" class="global">
        <div class="container">
            <div class="row text-center">
                <h4 class="fw-bold lead mb-3 judul-section">KASUS COVID-19 GLOBAL</h4>
                <span class="pb-2">Update : ${this._update.toLocaleString(
                  'ID'
                )}<span>
            </div>
            <div class="row ">
                <div class="col-md-4 ">
                    <div class="card global__data shadow-sm">
                        <div class="card-body">
                            <img src=${sedih} alt="">
                            <span class="count fw-bold fs-2">${
                              this._terkonfirmasi
                            }</span>
                            <span class="fw-bold badge text-white bg-warning">TERKONFIRMASI</span>                            
                        </div>
                    </div>
                </div>      
                <div class="col-md-4 ">
                    <div class="card global__data shadow-sm">
                        <div class="card-body">
                            <img src=${senyum} alt="">
                            <span class="count fw-bold fs-2">${
                              this._sembuh
                            }</span>
                            <span class="fw-bold badge text-white bg-success">SEMBUH</span>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 ">
                    <div class="card global__data shadow-sm">
                        <div class="card-body">
                            <img src=${nangis} alt="">
                            <span class="count fw-bold fs-2">${
                              this._meninggal
                            }</span>
                            <span class="fw-bold badge text-white bg-danger">MENINGGAL</span>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    </section>
      `;
  }
}

customElements.define('app-global', AppGlobal);
