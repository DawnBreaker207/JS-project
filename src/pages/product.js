import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";


const productPage = () => {
  return /*html*/ `
    ${headerPage()}
    <nav class="product">
    <div class="product-header">
    <h1 class="text-center my-7 font-bold text-5xl">Product list</h1>
    </div class="">
      <div id="product-list" class="grid grid-cols-2 md:grid-cols-5 gap-1">
      </div>
    </nav>
    ${footerPage()}
    `;
};

export default productPage
