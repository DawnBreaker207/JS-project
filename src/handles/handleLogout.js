import { router } from "json-server";

const handleLogout = () => {
//   const logout = document.getElementById("logout");
//   logout.addEventListener("click", () => {
    sessionStorage.removeItem(user);
    console.log("Remove");
    setTimeout(() => {
      router.navigate("/");
    }, 3000);
//   });
};

export default handleLogout
