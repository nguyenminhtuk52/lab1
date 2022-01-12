import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // Nếu user truy cập vào đường dẫn "/" thì làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("about page"),
    "/product": () => console.log("product page"),
});
router.notFound(() => console.log("not found"));
// router.notFound(() => alert("Not found"));

router.resolve();
