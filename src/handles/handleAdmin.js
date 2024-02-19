import api from "../apis";
import handleProductForm from "./handleProductForm";
const handleAdmin = () => {
  const productList = document.getElementById("productList");

  const handleDelete = (productId) => {
    api
      .delete(`/products/${productId}`)
      .then((res) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => {
        console.error(`Error in ${error}`);
      });
  };
  productList.addEventListener("click", (event) => {
    const target = event.target;
    // if(target.classList.contains("btn-add")){
    //   console.log("Target Btn Add")
    //   handleProductForm();
    // }
    if (target.classList.contains("btn-delete")) {
      const productId = target.dataset.productId;
      console.log("Target Btn Delete");
      handleDelete(productId);
    }
    if (target.classList.contains("btn-edit")) {
      const productId = target.dataset.productId;
      console.log("Target Btn Edit");
      handleProductForm(productId);
   
    }
  });

  api.get("/products").then(({ data }) => {
    console.log(data);
    const html = data
      .map((product) => {
        return /*html*/ `
        <tr>
            <td class="px-6 py-3">${product.id}</td>
            <td class="px-6 py-3">${product.title}</td>
            <td class="px-6 py-3">${product.category}</td>
            <td class="px-6 py-3">${product.price}</td>
            <td class="px-6 py-3"><img src="${product.thumbnail}" width="150px" height="150px"></td>
            <td class="px-6 py-3">${product.stock}</td>
            <td class="px-6 py-3">${product.description}</td>
            <td class="">
                <button ${product.id} href="/admin/edit" class="btn-edit font-semibold" data-product-id="${product.id}">Edit</button> /
                <button ${product.id} class="btn-delete text-red-600 font-semibold" data-product-id="${product.id}" >Delete</button>
            </td>
        </tr>
            `;
      })
      .join("");

    productList.innerHTML = /*html*/ `
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <a class="btn-add" href="/admin/add">New<button>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 py-5">
                <tr>
                    <th class="px-6 py-3" >#</th>
                    <th class="px-6 py-3">Name</th>
                    <th class="px-6 py-3">Category</th>
                    <th class="px-6 py-3">Price</th>
                    <th class="px-6 py-3">Thumbnal</th>
                    <th class="px-6 py-3">Stock</th>
                    <th class="px-6 py-3">Description</th>
                    <th class="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                ${html}
            </tbody>
        </table>
    `;
  });
};

export default handleAdmin;
