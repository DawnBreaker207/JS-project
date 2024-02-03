import footerPage from "../../components/footerPage"
import headerPage from "../../components/headerPage"

const adminPage = () =>{
    return /*html*/`
    ${headerPage()}
    <h1>This is a admin page</h1>
    ${footerPage()}
    `
}

export default adminPage