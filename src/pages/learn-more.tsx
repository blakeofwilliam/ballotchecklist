import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import Page from '@components/Page'
import { PointerPropsI, getPointers, StatePropsI, getStates } from '@lib/contentful'
import Card from '@system/Card'
import { ChangeEvent, useState } from 'react'


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
         <h3>Some info here</h3>
         <ul>
           <li>In the 2016 election, 23.7 percent of votes were by-mail.</li>
           <li>More than 318,000 of those votes, about 1%, of the mail ballots were rejected.</li>
         </ul>

         <table>
           <thead>
           <th>column</th>
           </thead>
           <tbody>
             <tr>stuff</tr>
           </tbody>
         </table>
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
