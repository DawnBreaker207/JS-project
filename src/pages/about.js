import footerPage from "../components/footerPage"
import headerPage from "../components/headerPage"

const aboutPage = () =>{
    return /*html*/`
    ${headerPage()}
    <h1 class="text-center font-bold text-5xl">This is a about page</h1>
    ${footerPage()}
    `

}

export default aboutPage