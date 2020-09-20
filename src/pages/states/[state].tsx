import { NextPage } from 'next'
import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import { DateTime } from 'luxon'

import {
  getPointers,
  getState,
  PointerPropsI,
  StatePropsI,
  getStates
} from '@lib/contentful'
import Page from '@components/Page'
import { fromSlug } from '@lib/state'
import Card from '@system/Card'
import RichText from '@components/RichText'
import Pointers from '@components/Pointers'
import StateSelector from '@components/StateSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { secondary } from '@lib/colors'

const Icon = styled(FontAwesomeIcon)({
  color: secondary,
  marginRight: '1rem'
})

const List = styled.ul({
  margin: 0,
  padding: 0
})

const ListItem = styled.li({
  listStyle: 'none'
})

interface StatePagePropsI {
  pointers: PointerPropsI[]
  baseURL: string
  state: StatePropsI
  states: StatePropsI[]
}

const State: NextPage<StatePagePropsI> = ({
  pointers = [],
  baseURL,
  state,
  states = []
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
      <Page
        state={state}
        states={states}
      >
        <Card
          style={{ marginTop: '1rem'}}
          width="100%"
        >
          <h1>{ state.name }</h1>
          
          { state.postmarkDeadline && !state.receiptDeadline && (
            <p>
              <Icon icon="envelope-open-text" />
              Mail-in ballot must be postmarked by <b>{DateTime.fromFormat(state.postmarkDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
            </p>
          )}
          { state.receiptDeadline && !state.postmarkDeadline && (
            <p>
              <Icon icon="envelope-open-text" />
              Mail-in ballot must be received by <b>{DateTime.fromFormat(state.receiptDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
            </p>
          )}
          { state.receiptDeadline && state.postmarkDeadline && (
            <p>
              <Icon icon="envelope-open-text" />
              Mail-in ballot must be postmarked by <b>{DateTime.fromFormat(state.postmarkDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b> and received by <b>{DateTime.fromFormat(state.receiptDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
            </p>
          )}
          <p>
            <Icon icon="id-card" />
            { state.copyOfIdRequred 
              ? `This state requires a copy of valid identification with mail-in ballots`
              : `This state does not require a copy of valid identification with mail-ballots`
            }
          </p>
          <p>
            <Icon icon="user-friends" />
            { state.notaryOfWitnessRequired 
              ? `This state requires a notary or witness(es) to verify your mail-in ballot` 
              : `This state does not require a notary or witness to verify your mail-in ballot`
            }
          </p>

          <Pointers pointers={pointers.filter(pointer => {
            if (!state.notaryOfWitnessRequired && pointer.name.toLowerCase().indexOf('witness') >= 0) {
              return false
            }
            if (!state.copyOfIdRequred && pointer.name.toLowerCase().indexOf('photo copy') >= 0) {
              return false
            }

            return true
          })} />

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
  const states = await getStates()
  const { origin } = absoluteUrl(req, 'localhost:3000')

  return {
    pointers,
    baseURL: origin,
    state: stateEntry,
    states
  }
}

export default State
