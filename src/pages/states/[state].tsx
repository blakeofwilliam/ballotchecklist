import { NextPage } from 'next'
import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'

import {
  getPointers,
  getState,
  PointerPropsI,
  StatePropsI
} from '@lib/contentful'
import Page from '@components/Page'
import { fromSlug } from '@lib/state'
import Card from '@system/Card'
import RichText from '@components/RichText'
import Pointers from '@components/Pointers'

interface StatePagePropsI {
  pointers: PointerPropsI[]
  baseURL: string
  state: StatePropsI
}

const State: NextPage<StatePagePropsI> = ({
  pointers = [],
  baseURL,
  state,
}) => {
  return (
    <>
      <Head>
        <title>{`Ballot Checklist for ${state.name}`}</title>

        <meta property="og:title" content={`Mail-In Ballot Checklist for ${state.name}`} />
        <meta property="og:description" content={`Be sure to read this checklist before mailing in your ballot for ${state.name}!`} />
        <meta property="og:image" content={`${baseURL}/images/ballotchecklist-logo.svg`} />
        <meta property="og:url" content={`${baseURL}/states/${state.name}`} />
        <meta property="og:site_name" content="Ballot Checklist" />
        <meta name="twitter:image" content={`${baseURL}/images/ballotchecklist-logo.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={`Ballot Checklist for ${state.name}`} />
      </Head>
      <Page>
        <Card width={`100%`}>
          <Pointers pointers={pointers.filter(pointer => {
            if (!state.notaryOfWitnessRequired && pointer.name.toLowerCase().indexOf('witness') >= 0) {
              return false
            }
            if (!state.copyOfIdRequred && pointer.name.toLowerCase().indexOf('photo copy') >= 0) {
              return false
            }

            return true
          })} />
        </Card>
        <Card
          style={{ marginTop: '1rem'}}
          width="100%"
        >
          <h1>{ state.name }</h1>
          <ul>
            <li>Copy of ID required? { state.copyOfIdRequred ? `✅` : `❌`}</li>
            <li>Notary or Witness Required? { state.notaryOfWitnessRequired ? `✅` : `❌`}</li>
          </ul>
          { state.validFormsOfId && (
            <>
              <h2>Valid Forms of ID</h2>
              <ul>
                { state.validFormsOfId.map(id => <li key={id}>{id}</li>) }
              </ul>
            </>
          )}
          { state.additionalValidFormsOfId && (
            <>
              <h3>Additional Valid Forms of ID</h3>
              <RichText document={state.additionalValidFormsOfId} />
            </>
          )}
          { state.additionalInfo && (
            <RichText document={state.additionalInfo} />
          )}
        </Card>
      </Page>
    </>
  )
}

State.getInitialProps = async ({
  req,
  query: { state }
}) => {
  const name = fromSlug(state as string)
  const stateEntry = await getState({
    name
  })
  const pointers = await getPointers()
  const { origin } = absoluteUrl(req, 'localhost:3000')

  return {
    pointers,
    baseURL: origin,
    state: stateEntry,
  }
}

export default State
