import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from '@emotion/styled'

import RichText from '@components/RichText'
import { PointerPropsI } from '@lib/contentful'
import { primary } from '@lib/colors'
import { mediaQueries } from '@lib/mediaQueries'

const Icon = styled.div({
  alignItems: 'center',
  background: primary,
  borderRadius: '2rem',
  color: 'white',
  display: 'flex',
  fontSize: '2rem',
  height: '4rem',
  justifyContent: 'center',
  marginRight: '1rem',
  width: '4rem'
})

const Pointer = styled.div(mediaQueries({
  display: 'inline-flex',
  marginTop: '2rem',
  width: [
    '100%',
    '100%',
    'calc(50% - 1rem)',
    'calc(50% - 1rem)',
    'calc(50% - 1rem)'
  ],
  '&:nth-child(even)': {
    marginLeft: [
      0,
      0,
      '2rem',
      '2rem',
      '2rem'
    ]
  }
}))

const TextWrapper = styled.div(mediaQueries({
  width: 'calc(100% - 5rem)'
}))

interface PointersPropsI {
  pointers: PointerPropsI[]
}

const Pointers: FunctionComponent<PointersPropsI> = ({
  pointers = []
}) => {
  return (
    <>
      { pointers.map((pointer, idx) => (
        <Pointer key={`pointer-${idx+1}`}>
          {pointer.icon && (
            <Icon>
              <FontAwesomeIcon icon={pointer.icon as IconProp} />
            </Icon>
          )}
          <TextWrapper>
            <RichText document={pointer.content} />
          </TextWrapper>
        </Pointer>
      ))}
    </>
  )
}

export default Pointers