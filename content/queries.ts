import "server-only"
import { HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types";
import {contentGqlFetcher} from "./fetch";

export const getContentForHeaderNav = async () => {
    const query = `
    query NavigationCollection($where: NavigationFilter) {
  navigationCollection(where: $where) {
    items {
      linksCollection {
        items {
          label
          href
        }
      }
    }
  }
}
    `
    const data = await contentGqlFetcher<HeaderNavQuery>({query, variables: {
        "where": {
            "name_in": "Header"
        }
      }
        
      });

      if (!data) {
        throw Error('oops')
    }

    return data;
}

export const getContentForLogoWall = async () => {
    const query = `#graphql
        query Query($where: AssetFilter) {
      assetCollection(where: $where) {
        items {
          title
          url
          width
          height
        }
      }
    }
      `

      const data = await contentGqlFetcher<LogoWallQuery>({query, variables: {
        "where": {
            "title_contains": "client"
        }
      }
        
      });

      if (!data) {
        throw Error('oops')
    }

    return data;


}

export const getContentForHero = async () => {
    const query = `#graphql
    query Query {
        heroCollection {
            items {
            preTitle
            title
            subtitles
            callToActionsCollection {
                items {
                label
                href
                }
            }
            }
        }
        }

    `
    const data = await contentGqlFetcher<HeroQuery>({query});

    if (!data) {
        throw Error('oops')
    }

    return data;
}