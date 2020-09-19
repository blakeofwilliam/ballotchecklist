import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getStates, StatePropsI } from '@lib/contentful'
import Page from '@components/Page'
import { toSlug } from '@lib/state'
import Card from '@system/Card'

interface StatesPagePropsI {
  states: StatePropsI[]
}

const States: NextPage<StatesPagePropsI> = ({
  states = []
}) => {
  return (
    <>
      <Head>
        <title>Ballot Checklist | List of States</title>
      </Head>
      <Page>
        <Card width="100%">
          <h1>List of States</h1>
          <ul>
            { states.map((state, idx) => (
              <>
                <li key={state.name}>
                  <Link href={`/states/${toSlug(state.name)}`}>
                    { state.name }
                  </Link>
                </li>
              </>
            )) }
          </ul>
        </Card>
      </Page>
    </>
  )
}

States.getInitialProps = async () => {
  const states = await getStates()

  return {
    states
  }
}

export default States
