import { router } from "../utils";
import api from "../apis";
import { validLogin } from "../validations/auth";
const handleLogin = () => {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", login);

  async function login() {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = { email, password };

      if (validLogin(user)) {
        // Logic call API

        const { data } = await api.post("/login", user);
        if (data) {
          sessionStorage.setItem("user", JSON.stringify(data));
          const confirmValue = confirm(
            `Login Success, wanna go to home ?, ${data.user.email}`
          );
          if (confirmValue) {
            router.navigate("/");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};
export default handleLogin;
