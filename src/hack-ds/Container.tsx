import styled from '@emotion/styled'

import { mediaQueries } from '@lib/mediaQueries'

/** Container component for Hack DS design system */

interface ContainerPropsI {
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between'
  body?: boolean
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between'
  scrolled?: boolean
}

const Container = styled.div<ContainerPropsI>(({
  alignItems = 'flex-start',
  body = false,
  justifyContent = 'flex-start',
  scrolled = false
}) => mediaQueries({
  alignItems,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent,
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
      ? [
        '3rem',
        '3rem',
        '5rem',
        '5rem',
        '5rem',
      ]
      : [
        '6rem',
        '6rem',
        '9rem',
        '9rem',
        '9rem'
      ]
    : 0,
  transition: 'padding-top 350ms',
  width: '100%'
}))

export default Container
