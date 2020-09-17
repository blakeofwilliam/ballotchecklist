import { useEffect, useState, FunctionComponent } from 'react'
import Container from '@system/Container'

import Header from '@components/Page/Header'

const Page: FunctionComponent = ({ children }) => {
  const [isScrollled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = (_e: Event): void => {
    setIsScrolled(window.scrollY >= 10)
  }

  return (
    <>
      <Header isScrolled={isScrollled} />

      <Container
        body={true}
        scrolled={isScrollled}
      >
        { children }
      </Container>
    </>
  )
}

export default Page
