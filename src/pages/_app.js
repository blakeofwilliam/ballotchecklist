import App from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Component { ...pageProps } />
    )
  }
}