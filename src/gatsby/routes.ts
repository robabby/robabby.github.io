import { Templates } from "./types"

/**
 * Here you can add some custom logic to translate routes for multi language handling
 */
const routes: { [key in Templates]: string } = {
  home: "/",
  article: "article",
  blog: "blog"
}

export default routes
