import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("product-list");

  try {
    const { data } = await api.get("/products");

    const contentHTML = data
      .map((item) => {
        return /*html*/ `
            
            <div class="product-card">
                <div class="product-thumbnail">
                  <a href="/detail/${item.id}"><img src="${item.thumbnail}" class="product-thumb__img"/></a>
                </div>
                  <div class="product-title">
                  <h3 class="product__title">${item.title}</h3>
                  <p class="product__price">Price: ${item.price} $</p>
                </div>
            </div>
            `;
      })
      .join("");

      productList.innerHTML = contentHTML
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
