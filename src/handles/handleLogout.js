import { router } from "../utils";

const handleLogout = () => {
  //   const logout = document.getElementById("logout");
  //   logout.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  console.log("Remove");
  setTimeout(() => {
    console.log("Log out");
    router.navigate("/");
  }, 2000);
  //   });
};

export default handleLogout;
