import { NextPage } from 'next'
import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import { DateTime } from 'luxon'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

import {
  PointerPropsI,
  StatePropsI,
  getState,
  getPointers,
  getStates
} from '@lib/contentful'
import Page from '@components/Page'
import Card from '@system/Card'
import RichText from '@components/RichText'
import Pointers from '@components/Pointers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { secondary } from '@lib/colors'
import Flex from '@system/Flex'
import { toSlug, fromSlug } from '@lib/state'
import StateImage from '@components/StateImage'

const SOCIAL_SIZE = 25

const Icon = styled(FontAwesomeIcon)({
  color: secondary,
  marginRight: '1rem'
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
  const validIdUrl = `/states/${state.name}#additional-info`
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
          <Flex justifyContent="center">
            <div style={{marginRight: '1rem'}}>
              <StateImage state={state.name} />
            </div>

            <div>
              <Flex justifyContent="left">

              <h1>{ state.name }'s Checklist</h1>
<Flex style={{flex: 1}}/>
<Flex>
              <TwitterShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <TwitterIcon size={SOCIAL_SIZE} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <FacebookIcon size={SOCIAL_SIZE} round={true} />
            </FacebookShareButton>
            <RedditShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <RedditIcon size={SOCIAL_SIZE} round={true} />
            </RedditShareButton>
            <LinkedinShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <LinkedinIcon size={SOCIAL_SIZE} round={true} />
            </LinkedinShareButton>
              </Flex>
</Flex>
              
              { state.postmarkDeadline && !state.receiptDeadline && (
                <p>
                  <Icon icon="envelope-open-text" />
                  Mail-in ballot must be <u>postmarked</u> by <b>{DateTime.fromFormat(state.postmarkDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
                </p>
              )}
              { state.receiptDeadline && !state.postmarkDeadline && (
                <p>
                  <Icon icon="envelope-open-text" />
                  Mail-in ballot must be <u>received</u> by <b>{DateTime.fromFormat(state.receiptDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
                </p>
              )}
              { state.receiptDeadline && state.postmarkDeadline && (
                <p>
                  <Icon icon="envelope-open-text" />
                  Mail-in ballot must be <u>postmarked</u> by <b>{DateTime.fromFormat(state.postmarkDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b> and <u>received</u> by <b>{DateTime.fromFormat(state.receiptDeadline, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</b>
                </p>
              )}
              <p>
                <Icon icon="id-card" />
                { state.copyOfIdRequred 
                  ? <>This state <strong>does</strong> requires a copy of <a href={validIdUrl}>valid identification</a> with mail-in ballots</>
                  : <>This state <strong>does not</strong> require a copy of valid identification with mail-ballots</>
                }
              </p>
              <p>
                <Icon icon="user-friends" />
                { state.notaryOfWitnessRequired 
                  ? <>This state <strong>does</strong> requires a notary or witness(es) to verify your mail-in ballot</>
                  : <>This state <strong>does not</strong> require a notary or witness to verify your mail-in ballot</>
                }
              </p>
            </div>
          </Flex>
          {/* <Flex justifyContent='center'>
            <TwitterShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <TwitterIcon size={30} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <FacebookIcon size={30} round={true} />
            </FacebookShareButton>
            <RedditShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <RedditIcon size={30} round={true} />
            </RedditShareButton>
            <LinkedinShareButton url={`${baseURL}/states/${toSlug(state.name)}`} style={{marginRight: '.5rem'}}>
              <LinkedinIcon size={30} round={true} />
            </LinkedinShareButton>
          </Flex> */}

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
        {(state.validFormsOfId || state.additionalValidFormsOfId || state.additionalInfo) && (
          <Card style={{marginTop: "1rem"}}>
            <Flex>
              <h1 id="additional-info">Additional Information</h1>
            </Flex>
            { state.validFormsOfId && (
              <>
                <h3>Valid Forms of ID</h3>
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
        )}
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
