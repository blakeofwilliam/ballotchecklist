import styled from '@emotion/styled'
import { secondary } from '@lib/colors'

export const NavItem = styled.li({
  display: 'inline-block',
  fontWeight: 700,
  listStyle: 'none',
  padding: '1rem'
})

export const NavItems = styled.ul({
  margin: 0,
  padding: 0
})

export const Wrapper = styled.nav<{ scrolled: boolean }>(({
  scrolled = false
}) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'right',
  [`${NavItem}`]: {
    color: scrolled
      ? secondary
      : 'white'
  }
}))

/** Subnav Stuff */

export const NavDropdown = styled.div({
  position: 'relative'
})

export const NavDropdownList = styled(NavItems)({
  background: 'white',
  borderRadius: '0.25rem',
  display: 'none',
  left: '-50%',
  padding: '1rem',
  position: 'absolute',
  top: '2rem',
  transition: 'display 350ms',
  zIndex: 2,
  '&:after': {
    borderBottom: '0.5rem solid white',
    borderLeft: '0.5rem solid transparent',
    borderRight: '0.5rem solid transparent',
    content: '""',
    display: 'block',
    height: 0, 
    left: '45%',
    position: 'absolute',
    top: '-0.5rem',
    width: 0 
  },
  [`${NavItem}`]: {
    width: '100%'
  }
})

export const NavDropdownTitle = styled.span({
  cursor: 'pointer'
})
