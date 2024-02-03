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
import adminPage from "./src/pages/admin/admin";
// import handleLogout from "./src/handles/handleLogout";

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

router.on("/logout", () => {
  // sessionStorage.removeItem("user");
  // console.log("Remove");
  // setTimeout(() => {
  //   router.navigate("/");
  // }, 3000);
  handleLogout();
});
// Admin
router.on("/admin", () => render(app, adminPage), {
  // before() {
  //   if (data.user.role === "admin") {
  //     router.navigate("/admin");
  //   } else {
  //     router.navigate("/");
  //   }
  // },
});

// Router params
router.on("/detail/:id", ({ data }) => {
  const { id } = data;
  render(app, () => detailPro(id));
});
// Not found
router.notFound(() => render(app, notFoundPage));
router.resolve();
