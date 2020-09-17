import styled from '@emotion/styled'
import { rgba, linearGradient } from 'polished'

import { mediaQueries } from '@lib/mediaQueries'

/** Card component for Hack DS design system */

const Card = styled.div(mediaQueries({
  ...linearGradient({
    colorStops: [
      'white 0%',
      '#e7e7e6 85%'
    ]
  }),
  border: 'solid 1px white',
  borderRadius: '0.25rem',
  boxShadow: `0 0.25rem 0.5rem ${rgba('black', 0.25)}`,
  padding: [
    '1rem',
    '1rem',
    '2rem',
    '2rem',
    '2rem',
  ],
  width: [
    '100%',
    '100%',
    '100%',
    'auto',
    'auto'
  ]
}))

export default Card