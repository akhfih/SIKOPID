/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import covid from '../../assets/covid.png';
class AppIntro extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line no-unused-expressions
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="home" class="intro-section">
      <div class="container">
          <div class="row align-items-center text-white">
              <div class="col-md-6 intro">
                  <h1 class="display-2">
                      <span class="display-2--intro">
                          DATA STATISTIK COVID-19
                      </span>
                      <span class="display-2--description lh-base">
                          Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus corona
                          yang penyebarannya begitu cepat. Lakukan pencegahan dengan menerapkan protokol 5M
                      </span>
                  </h1>
                  <button type="button" class="btn btn btn-outline-primary  btn-custom">Selengkapnya 5M <i
                          class="bi bi-arrow-right-circle more"></i></button>
              </div>
              <div class="col-md-6 intro">
                  <div class="image-box">
                      <img src=${covid} alt="" class="img-fluid">
                  </div>
              </div>
          </div>
      </div>
      <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
              <path fill="#ffff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
          </svg>
      </div>
  </section>
      `;
  }
}

customElements.define('app-intro', AppIntro);
