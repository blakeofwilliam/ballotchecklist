import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken } from 'polished'

import { secondary } from '@lib/colors'

/** Props Interfaces */

interface WrapperPropsI {
  scrolled: boolean
}

interface LogoPropsI {
  scrolled?: boolean
}

/** Styled Components */

export const Logo = styled.img<LogoPropsI>(({
  scrolled = false
}) => ({
  maxHeight: scrolled
    ? '2.5rem'
    : '3rem',
  transition: 'max-height 350ms'
}))


export const Wrapper = styled.header<WrapperPropsI>(({
  scrolled = false
}) => ({
  backgroundColor: scrolled
    ? 'white' 
    : 'transparent',
  left: 0,
  padding: scrolled 
    ? '0.5rem 0'
    : '1rem 0',
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'background-color 350ms, height 350ms'
}))
