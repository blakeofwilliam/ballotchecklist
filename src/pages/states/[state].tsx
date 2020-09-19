import { NextPage } from 'next'
import Head from 'next/head'

import {
  getState,
  StatePropsI
} from '@lib/contentful'
import Page from '@components/Page'
import { fromSlug } from '@lib/state'
import Card from '@system/Card'
import RichText from '@components/RichText'

interface StatePagePropsI {
  state: StatePropsI
}

const State: NextPage<StatePagePropsI> = ({
  state
}) => {
  return (
    <>
      <Head>
        <title>Ballot Checklist for {state.name}</title>
      </Head>
      <Page>
        <Card width="100%">
          <h1>{ state.name }</h1>
          <RichText document={state.testRichText} />
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

  return {
    state: stateEntry
  }
}

export default State
