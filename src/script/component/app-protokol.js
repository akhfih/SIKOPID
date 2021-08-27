/* eslint-disable space-before-function-paren */
import cuci from '../../assets/cuci.png';
import masker from '../../assets/masker.png';
import jarak from '../../assets/jarak.png';
import kerumunan from '../../assets/kerumunan.png';
import mobilitas from '../../assets/mobilitas.png';
class AppProtokol extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="protokol">
    <div class="container">
        <div class="row text-center">
            <h4 class="fw-bold lead mb-3 judul-section">PROTOKOL KESEHATAN 5M</h4>
            <span class="pb-2">Cegah Penularan Covid-19<span>
        </div>
    </div>
    <div id="protokol" class="container">
        <div class="row shadow-sm">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
                <div class="lima-m__img text-center "><img src=${cuci} alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
                <div class="lima-m__content text-start">
                    <h2 class="fw-bold text-capitalize pb-2">1. Mencuci Tangan</h2>
                    <p>Rutin mencuci tangan hingga bersih adalah salah satu protokol kesehatan yang cukup
                        efektif untuk mencegah penularan virus corona. </p>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="container">
    <div class="row mt-2 shadow-sm">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__img text-center "><img src=${masker} alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__content text-start">
                <h2 class="fw-bold text-capitalize pb-2">2. Memakai Masker</h2>
                <p>Semua orang yang sehat maupun sakit agar selalu menggunakan masker saat beraktivitas di luar
                    rumah.</p>
            </div>
        </div>

    </div>
</div>
<div class="container">
    <div class="row mt-2 shadow-sm">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__img text-center "><img src=${jarak} alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__content text-start">
                <h2 class="fw-bold text-capitalize  pb-2">3. Menjaga Jarak</h2>
                <p>Menjaga jarak minimal 2 meter dengan orang lain. Hal ini mengurangi interaksi langsung yang
                    dapat
                    mempermudah penularan.</p>
            </div>
        </div>

    </div>
</div>
<div class="container">
    <div class="row mt-2 shadow-sm">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__img text-center "><img src=${kerumunan} alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__content text-start">
                <h2 class="fw-bold text-capitalize  pb-2">4. Menjauhi Kerumunan</h2>
                <p>Menghindari kerumunan dan juga berkumpul di ruangan yang berventilasi kurang baik.</p>
            </div>
        </div>

    </div>
</div>
<div class="container">
    <div class="row mt-2 shadow-sm">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__img text-center "><img src=${mobilitas} alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 lima-m">
            <div class="lima-m__content text-start">
                <h2 class="fw-bold text-capitalize  pb-2">5. Mengurangi Mobilitas</h2>
                <p>Bila tidak ada keperluan yang mendesak tetaplah berada dirumah.</p>
            </div>
        </div>

    </div>
</div>
        `;
  }
}

customElements.define('app-protokol', AppProtokol);
