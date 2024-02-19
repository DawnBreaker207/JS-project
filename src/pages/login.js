import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const loginPage = () => {
  return /*html*/ `
    ${headerPage()}
   
    <form action="" class="max-w-sm mx-auto">
    <h1 class="text-center font-medium block mb-2 text-gray-900 dark:text-white text-5xl my-6">Login</h1>
    <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Adress</label>
        <input type="email" name="" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
    </div>
    <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password </label
        ><input type="password" name="" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
    </div>
    <button type="button" id="loginBtn" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng nhập</button>

    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Chưa có tài khoản. <a href="/register" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Đăng ký</a> ngay!</p>
    </form>
    ${footerPage()}
    `;
};
export default loginPage;
