import Navigo from "navigo";

export const router = new Navigo("/", { linksSelector: "a" });
// Render Page
export const render = (target, content) => {
  target.innerHTML = content();
};