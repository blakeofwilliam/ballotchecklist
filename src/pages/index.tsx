import { NextPage } from 'next'
import Card from '@components/hack-ds/Card'
import { 
  PrimaryButton,
  SecondaryButton
} from '@components/hack-ds/Button'

const Index: NextPage = () => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      height: '100vh',
      justifyContent: 'center',
      width: '100vw'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img src="/images/ballotchecklist-logo.svg" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card>
          <h1>Headline text</h1>
          <p>
            Body text with <a href="#">hyperlink</a> mid-sentence.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem'
            }}
          >
            <PrimaryButton>Primary action</PrimaryButton>
            <SecondaryButton style={{ marginLeft: '2rem' }}>Secondary action</SecondaryButton>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Index
