import { FunctionComponent, ChangeEvent } from 'react'
import Router from 'next/router'
import { toSlug } from '@lib/state'
import { StatePropsI } from '@lib/contentful'

interface StateSelectorPropsI {
  states: StatePropsI[]
}

const StateSelector: FunctionComponent<StateSelectorPropsI> = ({
  states = []
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    Router.push(`/states/${value}`)
  }

  return (
    <select onChange={handleChange}>
      { states.map(state => (
        <option key={toSlug(state.name)} value={toSlug(state.name)}>{state.name}</option>
      ))}
    </select>
  )
}

export default StateSelector
