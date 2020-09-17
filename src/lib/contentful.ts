import Contentful, { ContentfulClientApi } from 'contentful'

let contentful: ContentfulClientApi;

export const client = async (): Promise<ContentfulClientApi> => {
  if (contentful) return contentful;

  contentful = await Contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    space: process.env.CONTENTFUL_SPACE_ID
  })

  return contentful
}
