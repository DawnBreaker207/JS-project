import { router } from "../utils";
import api from "../apis";
import { validRegister } from "../validations/auth";

const handleRegister = () => {
  const registerBtn = document.getElementById("registerBtn");
  registerBtn.addEventListener("click", register);

  async function register() {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPass = document.getElementById("confirmPass").value;
      const user = { email, password };

      if (validRegister({ ...user, confirmPass })) {
        // Logic call API

        const { data } = await api.post("/register", {
          // Spread Operation
          ...user,
          role: "member",
          address: "",
          phoneNumder: "",
        });
        if (data) {
          const confirmValue = confirm(
            `Register Success, wanna log in ?, ${data.user.email}`
          );
          if (confirmValue) {
            router.navigate("/login");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};
export default handleRegister;
