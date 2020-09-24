import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import Page from '@components/Page'
import { PointerPropsI, getPointers, StatePropsI, getStates } from '@lib/contentful'
import Pointers from '@components/Pointers'
import Card from '@system/Card'
import { ChangeEvent, useState } from 'react'
import Flex from '@system/Flex'
import { PrimaryButton } from '@system/Button'


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
      <Page 
        states={states}
      >
        <Card width="100%" style={{textAlign: "center", marginTop: "1rem"}}>
          <h3>More than 318,000 mail-in ballots were rejected in 2016.</h3>
          <h3>50% were due to issues with the signature, while 25% were mailed in late.</h3>
          <h3>With mail-in voting expected to double or triple in 2020, <br /><strong>hundreds of thousands of votes could be disqualified.</strong></h3>
          <Flex style={{marginTop: "2rem"}} justifyContent="center">
            <PrimaryButton>See your state checklist</PrimaryButton>
          </Flex>
          <h3><u>Read your state's Ballot Checklist to ensure your mail-in vote counts!</u></h3>
        </Card>
        <Card
          style={{ marginTop: '1rem'}}
          width="100%"
        >
          <Flex justifyContent="center">
          <h1>The Ballot Checklist</h1>
          </Flex>
          <Pointers pointers={pointers} />
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
