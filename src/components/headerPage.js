const headerPage = () => {
  return /*html*/ `
    <header class="container">
      <ul class="flex justify-center my-10 gap-7 font-bold text-2xl">
        <li class="">
          <a class=""href="/">Home</a>
        </li>
        <li class="">
          <a class=""href="/product">Product</a>
        </li>
        <li class="">
          <a class="" href="/about">About</a>
        </li>
        <li class=" ">
          <a class="" href="/register">Register</a> 
          /
          <a class="" href="/login">Login</a>
        </li>
        <li><a href="/logout" id="logout">Logout</a></li>
      </ul>
    </header>

    `;
};

export default headerPage;
