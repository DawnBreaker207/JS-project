import { render } from "./src/utils";
import { router } from "./src/utils";

import productPage from "./src/pages/product";
import aboutPage from "./src/pages/about";
import notFoundPage from "./src/pages/notFound";
import registerPage from "./src/pages/register";
import loginPage from "./src/pages/login";
import detailPro from "./src/utils/detailPro";
import handleProductList from "./src/handles/handleProductList";
import handleRegister from "./src/handles/handleRegister";
import handleLogin from "./src/handles/handleLogin";
import adminPage from "./src/pages/admin/admin";
import HomePage from "./src/pages/home";
import handleLogout from "./src/handles/handleLogout";
import productForm from "./src/pages/admin/formProduct";
import handleAdmin from "./src/handles/handleAdmin";
import handleProductForm from "./src/handles/handleProductForm";

const app = document.getElementById("app");

const logged = JSON.parse(sessionStorage.getItem("user"))?.user;

// Admin
router.on("/admin", () => render(app, adminPage), {
  before(done) {
    if (logged.role !== "admin") {
      console.log("Not an admin");
      router.navigate("/");
    }
    done();
  },
  after() {
    console.log("After");
    router.navigate("/admin");
    handleAdmin();
  },
});
// Add
router.on("/admin/add", () => render(app, productForm), {
  before(done) {
    if (logged.role !== "admin") {
      console.log("Not an admin");
      router.navigate("/");
    }
    done();
  },
  after() {
    console.log("After product");
    handleProductForm();
  },
});
// Edit
router.on("/admin/edit/:id", () => render(app.productForm), {
  before(done) {
    if (logged.role !== "admin") {
      console.log("Not an admin");
      router.navigate("/");
    }
    done();
  },
  after({ data }) {
    const id = { data };
    console.log(data);
    console.log("After product");
    handleProductForm(id);
  },
});
// Router page
// Home
router.on("/", () => render(app, HomePage));
router.on("/home", () => router.navigate("/"));

// Product
router.on("/product", () => render(app, productPage), {
  after() {
    handleProductList();
  },
});
// About
router.on("/about", () => render(app, aboutPage));

// Login Router
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

router.on("/logout", () => {}, {
  after() {
    handleLogout();
  },
});

// Router params
router.on("/detail/:id", ({ data }) => {
  const { id } = data;
  render(app, () => detailPro(id));
});

// Not found Router
router.notFound(() => render(app, notFoundPage));
router.resolve();
