import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const registerPage = () => {
  return /*html*/ `
        ${headerPage()}
    <form action="">
        <h1>Sign Up</h1>
        <div class="">
            <label for="email">Email Adress</label>
            <input type="email" name="" id="email" />
        </div>
        <div class="">
            <label for="password"> Password </label>
            <input type="password" name="" id="password" />
        </div>
        <div class="">
            <label for="confirmPass">confirm password</label>
            <input type="password" name="" id="confirmPass" />
        </div>
        <button type="button" id="registerBtn">Đăng ký</button>
    
        <p>Đã có tài khoản. <a href="/login">Đăng nhập</a> ngay!</p>
    </form>
        ${footerPage()}
    `;
};

export default registerPage;
