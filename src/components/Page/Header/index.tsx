import {
  useEffect,
  useState,
  FunctionComponent
} from 'react'

import Container from '@system/Container'

import {
  Logo,
  Wrapper
} from '@components/Page/Header/style'

interface HeaderPropsI {
  isScrolled: boolean
}

const Header: FunctionComponent<HeaderPropsI> = ({ isScrolled = false }) => {
  return (
    <Wrapper
      scrolled={isScrolled}
    >
      <Container>
        <Logo 
          scrolled={isScrolled}
          src={
            isScrolled 
              ? `/images/ballotchecklist-logo-mark.svg`
              : `/images/ballotchecklist-logo.svg`
          } 
        />
      </Container>
    </Wrapper>
  )
}

export default Header
