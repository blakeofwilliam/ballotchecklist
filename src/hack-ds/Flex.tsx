import styled from '@emotion/styled'
import { mediaQueries } from '@lib/mediaQueries'

interface FlexPropsI {
  alignItems?: string | string[]
  justifyContent?: string | string[]
}

const Flex = styled.div<FlexPropsI>(({
  alignItems = 'center',
  justifyContent = 'center'
}) => mediaQueries({
  alignItems,
  display: 'flex',
  justifyContent
}))

export default Flex
