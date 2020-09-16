import Document, { 
  DocumentContext,
  Head, 
  Html, 
  Main, 
  NextScript
} from 'next/document'
import styled from '@emotion/styled'
import { primary } from '@lib/colors'

const Body = styled.body({
  background: primary,
  fontFamily: '"Open Sans", sans-serif',
  fontSize: '15px',
  lineHeight: '1.2',
  margin: 0,
  '*': {
    boxSizing: 'border-box'
  },
  '#__next': {
    position: 'relative'
  }
})

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,700,800&display=swap" rel="stylesheet" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument
