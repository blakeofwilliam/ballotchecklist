import { FunctionComponent } from 'react'

import Container from '@system/Container'

import {
  Logo,
  Wrapper
} from '@components/Page/Header/style'
import Link from 'next/link'

interface HeaderPropsI {
  isScrolled: boolean
}

const Header: FunctionComponent<HeaderPropsI> = ({ isScrolled = false }) => {
  return (
    <Wrapper
      scrolled={isScrolled}
    >
      <Container
        alignItems="center"
        justifyContent={isScrolled ? 'flex-start' : 'center'}
      >
        <Link href="/">
          <Logo 
            scrolled={isScrolled}
            src={
              isScrolled 
                ? `/images/ballotchecklist-logo-mark.svg`
                : `/images/ballotchecklist-logo.svg`
            } 
          />
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Header
