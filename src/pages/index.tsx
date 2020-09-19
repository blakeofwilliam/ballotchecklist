import { NextPage } from 'next'
import Head from 'next/head'

import Page from '@components/Page'
import { PointerPropsI, getPointers } from '@lib/contentful'
import Pointers from '@components/Pointers'
import Card from '@system/Card'


interface IndexPagePropsI {
  pointers: PointerPropsI[]
}

const Index: NextPage<IndexPagePropsI> = ({
  pointers = []
}) => {
  return (
    <>
      <Head>
        <title>Ballot Checklist</title>
      </Head>
      <Page>
        <Card width="100%">
          <Pointers pointers={pointers} />
        </Card>
      </Page>
    </>
  )
}

Index.getInitialProps = async (): Promise<IndexPagePropsI> => {
  const pointers = await getPointers()

  return {
    pointers
  }
}

export default Index
