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

export type LogoWallQuery = {
      assetCollection: {
        items: {
          title: string
          url: string
          width: number
          height: number
        }
      }
    }