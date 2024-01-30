import datas from "../../db.json";
import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const detailPro = (id) => {
  const data = datas.products.find((item) => item.id == id);
    if(!data) return "Product not found"
  return /*html*/ `
        ${headerPage()}

        <nav class="detail">
        <img src="${data.thumbnail}" />     
        <h4>${data.title}</h4>
        <p>${data.price}</p>
        </nav>

        ${footerPage()}
    `;
};
export default detailPro;
