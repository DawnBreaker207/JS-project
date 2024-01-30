import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";


const menuPage = () => {
  return /*html*/ `
    ${headerPage()}
    <nav class="product">
    <div class="product-header">
    <h1 class="product-header__title">Product list</h1>
    </div>
      <div id="product-list">
      </div>
    </nav>
    ${footerPage()}
    `;
};

export default menuPage
