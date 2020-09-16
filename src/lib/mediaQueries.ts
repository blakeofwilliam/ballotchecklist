import facepaint from 'facepaint'

type BreakpointsType = number[]

const breakpoints: BreakpointsType = [576, 768, 1024, 1200]

export const breakpointQueries = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const mediaQueries = facepaint(breakpointQueries)