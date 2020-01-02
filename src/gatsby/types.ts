interface Page {
  path: string
  component: string
  layout?: string
  context?: object
}

interface Actions {
  createPage: (page: Page) => Promise<object>
}

type GatsbyCreatePages = (fns: { actions: Actions }) => void

type Templates = "home" | "blog" | "article"

interface UrlEntry {
  entryName: Templates
  slug: string | null
}

export { GatsbyCreatePages, UrlEntry, Templates }
