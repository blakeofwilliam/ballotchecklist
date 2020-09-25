import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from '@emotion/styled'

import RichText from '@components/RichText'
import { PointerPropsI } from '@lib/contentful'
import { primary, secondayLight } from '@lib/colors'
import { mediaQueries } from '@lib/mediaQueries'
import Flex from '@system/Flex'

const Icon = styled.div(mediaQueries({
  alignItems: 'center',
  background: primary,
  borderRadius: '2rem',
  color: 'white',
  display: 'flex',
  fontSize: [
    '1.5rem',
    '1.5rem',
    '2rem',
    '2rem',
    '2rem',
  ],
  height: [
    '3rem',
    '3rem',
    '4rem',
    '4rem',
    '4rem',
  ],
  justifyContent: 'center',
  width: [
    '3rem',
    '3rem',
    '4rem',
    '4rem',
    '4rem',
  ]
}))

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
  '&:nth-of-type(even)': {
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

interface PercentageIconPropsI {
  percentage: number
}

const PercentageIcon: FunctionComponent<PercentageIconPropsI> = ({
  percentage = 0
}) => {
  return (
    <>
      <h2 style={{fontWeight: 200, marginTop: "1rem", color: secondayLight}}>{percentage}<small>%</small></h2>
      <p style={{margin: 0}}>REJECTED</p>
      <p style={{margin: 0}}>in 2016</p>
    </>
  )
}

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
          <Flex style={{flexDirection: 'column', justifyContent: 'flex-start',marginRight: '1rem'}}>
            <Icon>
              <FontAwesomeIcon icon={pointer.icon as IconProp} />
            </Icon>
            {pointer.percentage && (
              <PercentageIcon percentage={pointer.percentage}/>
            )}
          </Flex>
          )}
          <TextWrapper>
            <RichText document={pointer.content} />
            {pointer.name === 'Mail your ballot in on time.' && (
              <p><i>USPS recommends mailing your ballot in by <u>October 27th</u>.</i></p>  
            )}
          </TextWrapper>
        </Pointer>
      ))}
    </>
  )
}

export default Pointers