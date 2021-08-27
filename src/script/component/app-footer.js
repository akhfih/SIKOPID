/* eslint-disable space-before-function-paren */
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
    <div class="footer-bottom  pb-2 pt-2">
        <div class="container">
            <div class="row text-center text-white">
                <div class="col-12">
                    <div class="footer-bottom__copyright">
                        &COPY; 2021, Dibuat dari hati jatuh ke hati by akhfih
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
