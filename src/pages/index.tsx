import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import Page from '@components/Page'
import { PointerPropsI, getPointers, StatePropsI, getStates } from '@lib/contentful'
import Pointers from '@components/Pointers'
import Card from '@system/Card'
import { ChangeEvent } from 'react'
import StateSelector from '@components/StateSelector'


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
        <StateSelector states={states} />
        <Card width="100%">
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
