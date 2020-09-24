import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import Page from '@components/Page'
import { PointerPropsI, getPointers, StatePropsI, getStates } from '@lib/contentful'
import Card from '@system/Card'
import React, { ChangeEvent, useState } from 'react'
import Container from '@system/Container'
import Flex from '@system/Flex'


interface IndexPagePropsI {
  pointers: PointerPropsI[]
  states: StatePropsI[]
}

const Index: NextPage<IndexPagePropsI> = ({
  pointers = [],
  states = []
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
        <Card width="100%" style={{textAlign: "center", marginTop: "1rem" }}>
         <h3>About</h3>
         <Flex style={{flexDirection: "column"}}>
          <p>Ballot Checklist provides information for mail-in voting to ensure your vote gets counted!</p>
          <p>
            If any of the information is out of date or incorrect we want to fix it!
            Please let us know what needs updating along with a link to supporting evidence. 
            Reach us at ballotchecklist [at] gmail dot com.
           </p>
         </Flex>
        </Card>
      </Page>
    </>
  )
}

Index.getInitialProps = async (): Promise<IndexPagePropsI> => {
  const pointers = await getPointers()
  const states = await getStates()

  return {
    pointers,
    states
  }
}

export default Index
