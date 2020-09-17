import { FunctionComponent } from 'react'
import {
  NavDropdown,
  NavDropdownList,
  NavDropdownTitle,
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
        <NavItem>
          The Big 5
        </NavItem>
        <NavItem>
          State Info
        </NavItem>
      </NavItems>
    </Wrapper>
  )
}

export default Nav

{/* <NavDropdown>
            <NavDropdownTitle>
              State Info
            </NavDropdownTitle>
            <NavDropdownList>
              <NavItem>
                California
              </NavItem>
              <NavItem>
                Colorado
              </NavItem>
              <NavItem>
                Hawaii
              </NavItem>
              <NavItem>
                Nevada
              </NavItem>
              <NavItem>
                New Jersey
              </NavItem>
              <NavItem>
                Oregon
              </NavItem>
              <NavItem>
                Utah
              </NavItem>
              <NavItem>
                Vermont
              </NavItem>
              <NavItem>
                Washington
              </NavItem>
            </NavDropdownList>
          </NavDropdown> */}

