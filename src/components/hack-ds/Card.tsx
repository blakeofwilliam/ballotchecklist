import styled from '@emotion/styled'
import { rgba } from 'polished'

import { mediaQueries } from '@lib/mediaQueries'

/** Card component for Hack DS design system */
const Card = styled.div(mediaQueries({
  background: 'white',
  borderRadius: '0.5rem',
  boxShadow: `0 0.25rem 0.5rem ${rgba('black', 0.25)}`,
  padding: [
    '1rem',
    '1rem',
    '2rem',
    '2rem',
    '2rem',
  ]
}))

export default Card