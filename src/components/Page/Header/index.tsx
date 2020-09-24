import { FunctionComponent } from 'react'
import Flex from '@system/Flex'

import Container from '@system/Container'
import Nav from '@components/Page/Header/Nav' 

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
      >
        {!isScrolled && (<Flex style={{flex: 1}} />)}
        <Flex style={{flex: 1, justifyContent: isScrolled ? 'flex-start' : 'center'}}>
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
        </Flex>
        {isScrolled && (<Flex style={{flex: 1}} />)}
        <Flex style={{flex: 1, zIndex: 10}}>
          <Nav scrolled={isScrolled} /> 
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Header
