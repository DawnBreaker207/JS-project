import { router } from "../utils";
import api from "../apis";

const handleProductForm = (productId) => {
  const formPro = document.getElementById("formPro");
  const idPro = document.getElementById("hiddenId");
  const namePro = document.getElementById("nameProduct");
  const pricePro = document.getElementById("priceProduct");
  const imgPro = document.getElementById("imgProduct");
  const submitBtn = document.getElementById("productBtn");

  submitBtn.addEventListener("click", () => {
    if (productId) {
      console.log(productId);
      handleEdit(productId);
    } else {
      console.log("Lmao");
      handleAdd();
    }
  });
  const handleEdit = (productId) => {
    console.log(productId);
    api.get(`/products/${productId}`).then(({ data }) => {
      console.log(data);
    });
  };

  async function handleAdd() {
    try {
      console.log("Add");
      const id = idPro.value;
      const title = namePro.value;
      const price = pricePro.value;
      const thumbnail = imgPro.files[0];

      const product = { id, title, price, thumbnail };

      await api.post("/products", {
        ...product,
      });
      console.log(product);
      router.navigate("/admin")
    } catch (err) {
      console.error(`Error in ${err}`);
    }
  }
};

export default handleProductForm;
