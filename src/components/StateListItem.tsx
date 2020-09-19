import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { StatePropsI } from '@lib/contentful'
import { toSlug } from '@lib/state'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { primary, secondary } from '@lib/colors'

const Icon = styled.div<{
  color: string
}>(({
  color
}) => ({
  alignItems: 'center',
  background: color,
  borderRadius: '1rem',
  color: 'white',
  display: 'inline-flex',
  height: '2rem',
  justifyContent: 'center',
  width: '2rem',
  'div + &': {
    marginLeft: '0.5rem'
  }
}))

const Icons = styled.div({
  display: 'flex'
})

const Name = styled.h4({
  marginTop: 0
})

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const StateListItem: FunctionComponent<StatePropsI> = ({
  copyOfIdRequred,
  name,
  notaryOfWitnessRequired
}) => {
  return (
    <Wrapper>
      <Link href={`/states/${toSlug(name)}`}>
        <Name>{name}</Name>
      </Link>
      <Icons>
        { copyOfIdRequred && (
          <Icon color={primary} title={`Copy of ID required to vote by mail`}>
            <FontAwesomeIcon icon={faIdCard} />
          </Icon>
        )}
        { notaryOfWitnessRequired && (
          <Icon color={secondary} title={`Notary or witness(es) required to vote by mail`}>
            <FontAwesomeIcon icon={faUserFriends} />
          </Icon>
        )}
      </Icons>
    </Wrapper>
  )
}

export default StateListItem
