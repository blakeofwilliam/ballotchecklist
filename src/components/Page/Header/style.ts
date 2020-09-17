import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken } from 'polished'

import { secondary } from '@lib/colors'

/** Styled Components */

export const Logo = styled.img({
  maxHeight: '3rem',
  transition: 'max-height 350ms'
})

export const Wrapper = styled.header({
  left: 0,
  padding: '1rem 0',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'background-color 350ms, height 350ms'
})

/** CSS Styles */

export const scrolledStyle = css({
  backgroundColor: darken(0.25, secondary),
  padding: '0.5rem 0',
  [`${Logo}`]: {
    maxHeight: '2.5rem'
  }
})