import { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { rgba } from 'polished'

import { getStates, StatePropsI } from '@lib/contentful'
import Page from '@components/Page'
import Card from '@system/Card'
import StateListItem from '@components/StateListItem'
import { mediaQueries } from '@lib/mediaQueries'

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0
})

const ListItem = styled.li(mediaQueries({
  border: `solid 1px ${rgba('#353535', 0.25)}`,
  borderRadius: '0.125rem',
  height: '5rem',
  listStyle: 'none',
  marginLeft: '1rem',
  marginTop: '1rem',
  padding: '1rem',
  width: [
    '100%',
    '100%',
    'calc(100%/2 - 1rem)',
    'calc((100%/3) - 2rem)',
    'calc(100%/4 - 3rem)'
  ],
  [`&:not(:nth-child(4n+1))`]: {
    marginLeft: [
      0,
      0,
      0,
      0,
      '1rem'
    ]
  }
}))

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
          <List>
            { states.map((state, idx) => (
              <ListItem key={state.name}>
                <StateListItem {...state} />
              </ListItem>
            )) }
          </List>
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
