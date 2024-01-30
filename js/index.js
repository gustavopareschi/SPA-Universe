import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html", "url(./assets/bg1.png)")
router.add("/universe", "/pages/universe.html","url(./assets/bg2.png)")
router.add("/explorer", "/pages/explorer.html", "url(./assets/bg3.png)")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

