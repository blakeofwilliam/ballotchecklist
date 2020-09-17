import { NextPage } from 'next'

import { 
  PrimaryButton,
  SecondaryButton
} from 'src/hack-ds/Button'
import Card from 'src/hack-ds/Card'

import Page from '@components/Page'

const Index: NextPage = () => {
  return (
    <Page>
      <Card>
        <h1>Headline text</h1>
        <p>
          Body text with <a href="#">hyperlink</a> mid-sentence.
        </p>

        <>
          <PrimaryButton>
            Primary action
          </PrimaryButton>
          <SecondaryButton>
            Secondary action
          </SecondaryButton>
        </>
      </Card>
    </Page>
  )
}

Index.getInitialProps = async () => {
  return {}
}

export default Index
