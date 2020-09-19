import { NextPage } from 'next'
import Head from 'next/head'

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
  state: StatePropsI
}

const State: NextPage<StatePagePropsI> = ({
  pointers = [],
  state
}) => {
  return (
    <>
      <Head>
        <title>Ballot Checklist for {state.name}</title>
      </Head>
      <Page>
        <Card width={`100%`}>
          <Pointers pointers={pointers} />
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
  query: { state }
}) => {
  const name = fromSlug(state as string)
  const stateEntry = await getState({
    name
  })
  const pointers = await getPointers()

  return {
    pointers,
    state: stateEntry
  }
}

export default State
