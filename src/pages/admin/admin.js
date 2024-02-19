
import headerPage from "../../components/headerPage";
// import api from "../../apis"
const data = JSON.parse(sessionStorage.getItem("user"))?.user;
const adminPage = () => {
  return /*html*/ `
    ${headerPage()}
    <h1 class="text-center font-semibold text-4xl my-7">This is a admin page. Welcome back <span class="font-bold text-red-500">${data.email} </span> </h1>
    <div id="productList"></div>
    `;
};

export default adminPage;
