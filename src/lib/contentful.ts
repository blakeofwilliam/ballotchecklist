import * as Contentful from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface StatePropsI {
  name: string
  testRichText: Document
}

interface StateParamsI {
  id?: string
  name?: string
}

let contentful: Contentful.ContentfulClientApi;

export const createClient = async (): Promise<Contentful.ContentfulClientApi> => {
  if (contentful) return contentful;

  contentful = await Contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    space: process.env.CONTENTFUL_SPACE_ID
  })

  return contentful
}

export const getState = async ({
  id = null,
  name = null
}: StateParamsI): Promise<StatePropsI> => {
  const client = await createClient()
  const query: any = {
    content_type: 'state',
    include: 10
  }

  if (id) {
    query.id = id
  }

  if (name) {
    query['fields.name'] = name
  }

  const result = await client.getEntries<StatePropsI>(query)
  const item = result.items && result.items.length
    ? result.items[0]
    : null
  const entry = item.toPlainObject
    ? item.toPlainObject() as Contentful.Entry<StatePropsI>
    : item as Contentful.Entry<StatePropsI>
  
  return entry.fields
}

export const getStates = async (): Promise<StatePropsI[]> => {
  const client = await createClient()
  const result = await client.getEntries<StatePropsI>({
    content_type: 'state',
    include: 10,
    order: 'fields.name'
  })

  return result.items
    .filter(item => item.fields.name)
    .map(item => {
      const entry = item.toPlainObject
        ? item.toPlainObject() as Contentful.Entry<StatePropsI>
        : item as Contentful.Entry<StatePropsI>

      return entry.fields
    })
}
