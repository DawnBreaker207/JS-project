import footerPage from "../components/footerPage"
import headerPage from "../components/headerPage"

const HomePage = () =>{
    return /*html*/`
        ${headerPage()}
        <div class="text-center font-bold text-5xl">This is home page</div>
        ${footerPage()}
    `
}

export default HomePage