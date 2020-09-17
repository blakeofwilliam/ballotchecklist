import styled from '@emotion/styled'

import { mediaQueries } from '@lib/mediaQueries'

/** Container component for Hack DS design system */

interface ContainerPropsI {
  body?: boolean
  scrolled?: boolean
}

const Container = styled.div<ContainerPropsI>(({
  body = false,
  scrolled = false
}) => mediaQueries({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  paddingLeft: [
    '1rem',
    '1rem',
    '2rem',
    '4rem',
    '6rem',
  ],
  paddingRight: [
    '1rem',
    '1rem',
    '2rem',
    '4rem',
    '6rem',
  ],
  paddingTop: body
    ? scrolled 
      ? '4.5rem'
      : '6rem'
    : 0,
  width: '100%'
}))

export default Container
