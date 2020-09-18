import { FunctionComponent } from 'react'

import Container from '@system/Container'

import { Wrapper } from '@components/Page/Footer/style'

const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <Container justifyContent="center">
        Made with ❤️ in Oakland, CA
      </Container>
    </Wrapper>
  )
}

export default Footer
