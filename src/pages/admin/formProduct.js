import headerPage from "../../components/headerPage";

const productForm = (id) => {
  return /*html*/ `
    ${headerPage()}
    <form enctype="multipart/form-data" type="POST" id="formPro">
        <input type="hidden" id="hiddenId" value="">
        <div class=""> 
            <label for="name">Name</label>
            <input type="text" name="" id="nameProduct" value="">
        </div> 
        <div class=""> 
            <label for="price">Price</label>
            <input type="number" name="" id="priceProduct" value="">
        </div> 
        <div class=""> 
            <label for="image">Image</label>
            <input type="file" name="" id="imgProduct" value="">
        </div> 

        <button type="button" id="productBtn">Submit</button>
    </form>
    `;
};

export default productForm;
