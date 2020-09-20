import { FunctionComponent, ChangeEvent } from 'react'
import Router from 'next/router'
import { toSlug } from '@lib/state'
import { StatePropsI } from '@lib/contentful'
import Select from 'react-dropdown-select'
import { secondary } from '@lib/colors'
import styled from '@emotion/styled'
import { mediaQueries } from '@lib/mediaQueries'

const Wrapper = styled.div(mediaQueries({
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  top: '1.5rem',
  width: '100%',
  '.react-dropdown-select': {
    background: 'white',
    borderRadius: '0.25rem',
    fontFamily: '"Open Sans", Arial, sans-serif',
    paddingLeft: '0.75rem',
    width: [
      '100%',
      '100%',
      '320px',
      '320px',
      '320px'
    ]
  },
  '.react-dropdown-select-dropdown': {
    top: '36px'
  }
}))

interface StateSelectorPropsI {
  state?: StatePropsI,
  states: StatePropsI[]
}

const StateSelector: FunctionComponent<StateSelectorPropsI> = ({
  state = null,
  states = []
}) => {
  const handleChange = (value: any) => {
    Router.push(`/states/${toSlug(value[0].name)}`)
  }

  return (
    <Wrapper>
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
