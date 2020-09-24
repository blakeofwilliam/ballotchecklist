import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import Page from '@components/Page'
import { PointerPropsI, getPointers, StatePropsI, getStates } from '@lib/contentful'
import Card from '@system/Card'
import React, { ChangeEvent, useState } from 'react'
import Container from '@system/Container'
import { SourceCitation, SourceCitations, SourceReference } from '@components/Source'


interface LearnMorePagePropsI {
  pointers: PointerPropsI[]
}

const Index: NextPage<LearnMorePagePropsI> = ({
  pointers = [],
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    Router.push(`/states/${value}`)
  }

  return (
    <>
      <Head>
        <title>Ballot Checklist</title>
      </Head>
      <Page>
        <Card width="100%" style={{textAlign: "center", marginTop: "1rem"}}>
         <h3 id="stats">Stats & Facts</h3>
         <Container style={{textAlign: "left", padding: "0 15rem"}}>
          <ul>
            <li>In the 2016 election, 23.7 percent of the 140,114,502 votes cast were by-mail. <SourceReference index={1} /></li>
            <li>More than 318,000 of those votes, about 1%, of the mail ballots were rejected. <SourceReference index={1} /></li>
            <li>The most common reasons for rejection in 2016 were missing the deadline, the signature on the ballot not matching the signature on the state’s records, and the ballot not having a signature.. <SourceReference index={1} /></li>
            <img src="/images/top-reasons-rejected-table.png" style={{width: "35rem"}}/>
            <li>As of September 17, in North Carolina Black voters’ ballots are being rejected at more than four times the rate of white voters, according to the state’s numbers.1 Black voters have mailed in 13,747 ballots, with 642 rejected, or 4.7 percent. White voters have cast 60,954 mail-in ballots, with 681 — or 1.1 percent — rejected. <SourceReference index={8} /></li>
          </ul>
         </Container>

         <h3 id="sources">Sources</h3>
         <Container style={{textAlign: "left", padding: "0 15rem"}}>
          <SourceCitations />
         </Container>
        </Card>
      </Page>
    </>
  )
}

Index.getInitialProps = async (): Promise<LearnMorePagePropsI> => {
  const pointers = await getPointers()

  return {
    pointers,
  }
}

export default Index
