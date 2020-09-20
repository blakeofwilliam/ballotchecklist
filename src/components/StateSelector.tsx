import { FunctionComponent, ChangeEvent } from 'react'
import Router from 'next/router'
import { toSlug } from '@lib/state'
import { StatePropsI } from '@lib/contentful'
import Select from 'react-dropdown-select'
import { secondary } from '@lib/colors'
import styled from '@emotion/styled'
import { mediaQueries } from '@lib/mediaQueries'

interface WrapperPropsI {
  scrolled: boolean
}

const Wrapper = styled.div<WrapperPropsI>(({
  scrolled = false
}) => mediaQueries({
  display: 'flex',
  justifyContent: [
    scrolled ? 'flex-end' : 'center',
    scrolled ? 'flex-end' : 'center',
    'center',
    'center',
    'center'
  ],
  position: 'sticky',
  top: [
    '1rem',
    '1rem',
    '1.5rem',
    '1.5rem',
    '1.5rem'
  ],
  width: '100%',
  '> div': {
    width: [
      scrolled ? '245px' : '100%',
      scrolled ? '245px' : '100%',
      '320px',
      '320px',
      '320px'
    ]
  },
  '.react-dropdown-select': {
    background: 'white',
    borderRadius: '0.25rem',
    fontFamily: '"Open Sans", Arial, sans-serif',
    paddingLeft: '0.75rem',
    width: '100%'
  },
  '.react-dropdown-select-dropdown': {
    top: '36px'
  }
}))

interface StateSelectorPropsI {
  scrolled?: boolean
  state?: StatePropsI,
  states: StatePropsI[]
}

const StateSelector: FunctionComponent<StateSelectorPropsI> = ({
  scrolled = false,
  state = null,
  states = []
}) => {
  const handleChange = (value: any) => {
    Router.push(`/states/${toSlug(value[0].name)}`)
  }

  return (
    <Wrapper scrolled={scrolled}>
      <Select
        color={secondary}
        labelField="name"
        onChange={handleChange}
        options={states}
        placeholder="Find your state..."
        searchBy="name"
        valueField="name"
        values={state ? [state] : []}
      />
    </Wrapper>
  )
}

export default StateSelector
