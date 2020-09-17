import { FunctionComponent } from 'react'

import { Wrapper } from '@components/Page/Footer/style'
import Container from '@system/Container'

const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        Made with ❤️ in Oakland, CA
      </Container>
    </Wrapper>
  )
}

export default Footer
