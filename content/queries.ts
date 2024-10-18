import { HeroQuery } from "@/types";
import {contentGqlFetcher} from "./fetch";

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