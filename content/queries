import {contentGqlFetcher} from "./fetch";

export const getContentForHero = async () => {
    const query = `#graphql
    query Query {
        heroCollection {
            items {
            preTitle
            title
            subtitle {
                json
            }
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
    const data = await contentGqlFetcher();
}