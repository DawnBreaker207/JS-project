import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("product-list");

  try {
    const { data } = await api.get("/products");

    const contentHTML = data
      .map((item) => {
        return /*html*/ `
            
            <div class="product border-2m m-2">
                <div class="product-thumbnail h-60">
                  <a class="max-w-full h-screen" href="/detail/${item.id}"><img src="${item.thumbnail}" class="w-full h-full"/></a>
                </div>
                  <div class="my-4">
                  <h3 class="text-3xl ">${item.title}</h3>
                  <p class="font-normal text-lg">Price: ${item.price} $</p>
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
