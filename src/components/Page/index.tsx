import { useEffect, useState, FunctionComponent } from 'react'
import Container from 'src/hack-ds/Container'

import Header from '@components/Page/Header'
import Footer from '@components/Page/Footer'
import { StatePropsI } from '@lib/contentful'
import StateSelector from '@components/StateSelector'

interface PagePropsI {
  state?: StatePropsI
  states?: StatePropsI[]
}

const Page: FunctionComponent<PagePropsI> = ({ children, state = null, states = [] }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = (_e: Event): void => {
    setIsScrolled(window.scrollY >= 50)
  }

  return (
    <>
      <Header isScrolled={isScrolled} />
      <Container
        body={true}
        scrolled={isScrolled}
      >
        {states.length > 0 && (<StateSelector scrolled={isScrolled} state={state} states={states} />)}

        { children }
      </Container>

      <Footer />
    </>
  )
}

export default Page
