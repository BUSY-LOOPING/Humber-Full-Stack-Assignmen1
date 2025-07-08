import { getAllProducts } from "../../components/models/product";

function aboutUsPage(req, res) {
    response.render("about", {title : "About Us"});
}

async function homePage(req, res) {
    const allProducts = await getAllProducts();
    res.render('index', {title : "Products", products: allProducts});
}

export default{
    aboutUsPage,
    homePage
}

