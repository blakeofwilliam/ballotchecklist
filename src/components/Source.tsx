import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from '@emotion/styled'

import RichText from '@components/RichText'
import { PointerPropsI } from '@lib/contentful'
import { primary } from '@lib/colors'
import { mediaQueries } from '@lib/mediaQueries'
import { sendData } from 'next/dist/next-server/server/api-utils'

const SOURCES = [
  {
    link: 'https://www.eac.gov/sites/default/files/eac_assets/1/6/2016_EAVS_Comprehensive_Report.pdf',
    title: '2016 Election Administration and Voting Survey'
  },
  {
    link: 'https://www.voteriders.org/staterules/',
    title: 'Voteriders State Rules'
  }, 
  {
    link: 'https://www.ncsl.org/research/elections-and-campaigns/vopp-table-8-how-states-verify-absentee-ballot-applications.aspx',
    title: 'National Conference of State Legislatures: VOPP Table 8'
  },
  {
    link: 'https://www.ncsl.org/research/elections-and-campaigns/vopp-table-12-states-with-postage-paid-election-mail.aspx',
    title: 'National Conference of State Legislatures: VOPP Table 12'
  },
  {
    link: 'https://www.ncsl.org/research/elections-and-campaigns/vopp-table-14-how-states-verify-voted-absentee.aspx',
    title: 'National Conference of State Legislatures: VOPP Table 14'
  },
  {
    link: 'https://www.ncsl.org/research/elections-and-campaigns/vopp-table-15-states-that-permit-voters-to-correct-signature-discrepancies.aspx',
    title: 'National Conference of State Legislatures: VOPP Table 15'
  },
  {
    link: 'https://www.voteamerica.com/absentee-ballot-deadlines/',
    title: 'Vote America 2020 Absentee Ballot Deadlines'
  },
  {
    link: 'https://fivethirtyeight.com/features/north-carolina-is-already-rejecting-black-voters-mail-in-ballots-more-often-than-white-voters/',
    title: 'FiveThirtyEight: North Carolina Early 2020 Mail-In Voting Statistics and Racial Discrepensies'
  }
]

export const SourceReferenceLink = styled.a({
  textDecorationLine: "none"
})

interface SourcePropsI {
  index: number
  stayOnSite?: boolean
}

export const SourceReference: FunctionComponent<SourcePropsI> = ({
  index = 1,
  stayOnSite = false,
}) => {
  return (
    <>
    {stayOnSite && (
      <SourceReferenceLink href="/learn-more#sources" >[{index}]</SourceReferenceLink>
    )}
    {!stayOnSite && (
      <SourceReferenceLink href={SOURCES[index - 1]['link']}>[{index}]</SourceReferenceLink>
    )}
    </>
  )
}

export const SourceCitationLi = styled.li({
  listStyle: "none"
})

export const SourceCitation: FunctionComponent<SourcePropsI> = ({
  index = 1
}) => {
  const source = SOURCES[index - 1]
  return (
    <SourceCitationLi>
      [{index}] <a href={source['link']}>{source['title']}</a>
    </SourceCitationLi>
  )
}

export const SourceCitations: FunctionComponent = () => {
  return (
    <ul>
      <SourceCitation index={1}/>
      <SourceCitation index={2}/>
      <SourceCitation index={3}/>
      <SourceCitation index={4}/>
      <SourceCitation index={5}/>
      <SourceCitation index={6}/>
      <SourceCitation index={7}/>
      <SourceCitation index={8}/>
    </ul>
  )
}

