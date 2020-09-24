import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import {
  NavItem,
  NavItems,
  Wrapper
} from '@components/Page/Header/Nav/style'

interface NavPropsI {
  scrolled: boolean
}

const Nav: FunctionComponent<NavPropsI> = ({
  scrolled = false
}) => {
  return (
    <Wrapper scrolled={scrolled}>
      <NavItems>
        <NavItem scrolled={scrolled}>
          <Link href="/learn-more">
            Learn More
          </Link>
        </NavItem>
        {/* <NavItem scrolled={scrolled}>
          <Link href="/resources">
            Resources
          </Link>
        </NavItem> */}
      </NavItems>
    </Wrapper>
  )
}

export default Nav

