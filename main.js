import "./style.css";
import { render } from "./src/utils";
import { router } from "./src/utils";

import menuPage from "./src/pages/menu";
import aboutPage from "./src/pages/about";
import notFoundPage from "./src/pages/notFound";
import registerPage from "./src/pages/register";
import loginPage from "./src/pages/login";
import detailPro from "./src/utils/detailPro";
import handleProductList from "./src/handles/handleProductList";
import handleRegister from "./src/handles/handleRegister";
import handleLogin from "./src/handles/handleLogin";

const app = document.getElementById("app");

// Router
router.on("/", () => render(app, menuPage), {
  after() {
    handleProductList();
  },
});

router.on("/home", () => router.navigate("/"));
router.on("/about", () => render(app, aboutPage));

router.on("/register", () => render(app, registerPage), {
  after() {
    handleRegister();
  },
});
router.on("/login", () => render(app, loginPage), {
  after() {
    handleLogin();
  },
});

// Router params
router.on("/detail/:id", ({ data }) => {
  const { id } = data;
  render(app, () => detailPro(id));
});
// Not found
router.notFound(() => render(app, notFoundPage));
router.resolve();
