import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const loginPage = () => {
  return /*html*/ `
    ${headerPage()}
   
    <form action="">
    <h1>Login</h1>
    <div class="">
        <label for="email">Email Adress</label>
        <input type="email" name="" id="email" />
    </div>
    <div class="">
        <label for="password"> Password </label
        ><input type="password" name="" id="password" />
    </div>
    <button type="button" id="loginBtn">Đăng nhập</button>

    <p>Chưa có tài khoản. <a href="/register">Đăng ký</a> ngay!</p>
    </form>
    ${footerPage()}
    `;
};
export default loginPage;
