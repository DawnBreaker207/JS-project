import footerPage from "../components/footerPage";
import headerPage from "../components/headerPage";

const notFoundPage = () => {
  return /*html*/ `
    ${headerPage()}
    <h1>Not found Page</h1>
    ${footerPage()}
    `;
};

export default notFoundPage;
