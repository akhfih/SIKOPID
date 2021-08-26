/* eslint-disable space-before-function-paren */
import logo from '../../assets/logo.png';
class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark menu shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="${logo}" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link active" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">STATISTIK</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PROTOKOL</a>
                    </li>

                    <li class="nav-item">
                        <button type="button" class="btn btn-outline-primary btn-custom " data-bs-toggle="modal"
                            data-bs-target="#exampleModal"><i class="bi bi-info-circle"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define('app-nav', AppNav);
