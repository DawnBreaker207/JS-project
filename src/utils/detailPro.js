import datas from "../../db.json";
import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const detailPro = (id) => {
  const data = datas.products.find((item) => item.id == id);
    if(!data) return "Product not found"
  return /*html*/ `
        ${headerPage()}

        <nav class="grid grid-cols-2 md:grid-cols-2 gap-2 mx-12 justify-center ">
        <div class="w-full">
        <img class="w-full" src="${data.thumbnail}" />     
        </div>
        <div class="text-justify items-center">
        <h4 class="font-bold text-5xl my-4">${data.title}</h4>
        <p class="text-3xl font-medium ">${data.price} $</p>
        </div>
        </nav>

        ${footerPage()}
    `;
};
export default detailPro;
