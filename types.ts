export type HeroContentQuery = {
  content: {
    items: {
      title: string
      subtitle: string
      preTitle: string
      ctas: {
        items: {
          route: string
          label: string
        }[]
      }
    }[]
  }
}