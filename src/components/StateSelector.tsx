import {
  useState,
  FunctionComponent
} from 'react'
import Router from 'next/router'
import { toSlug } from '@lib/state'
import { StatePropsI } from '@lib/contentful'
import Select from 'react-dropdown-select'
import { secondary } from '@lib/colors'
import styled from '@emotion/styled'
import { mediaQueries } from '@lib/mediaQueries'

interface WrapperPropsI {
  isOpen?: boolean
  scrolled: boolean
}

const Wrapper = styled.div<WrapperPropsI>(({
  isOpen = false,
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
  },
  '.react-dropdown-select-content > span': {
    display: isOpen ? 'none' : 'inline'
  },
  '.react-dropdown-select-input': {
    display: isOpen ? 'inline-block' : 'none'
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
  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  const handleChange = (value: any) => {
    Router.push(`/states/${toSlug(value[0].name)}`)
  }

  return (
    <Wrapper
      isOpen={isOpen}
      scrolled={scrolled}
    >
      <Select
        color={secondary}
        labelField="name"
        onChange={handleChange}
        onDropdownClose={() => setIsOpen(false)}
        onDropdownOpen={() => setIsOpen(true)}
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
