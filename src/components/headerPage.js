const headerPage = () => {
  return /*html*/ `
    <header class="header">
      <ul class="header-nav font-24">
        <li class="header__nav-item">
          <a class="header__nav-link"href="/">Home</a>
        </li>
        <li class="header__nav-item">
          <a class="header__nav-link" href="/about">About</a>
        </li>
        <li class="header__nav-item ">
          <a class="header__nav-link" href="/register">Register</a> 
          /
          <a class="header__nav-link" href="/login">Login</a>
        </li>
        <li><a href="" id="logout">Logout</a></li>
      </ul>
    </header>

    `;
};

export default headerPage;
