import { useEffect, useState, FunctionComponent } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

interface RichTextPropsI {
  document: Document
}

const RichText: FunctionComponent<RichTextPropsI> = ({
  document
}) => {
  const [html, setHtml] = useState<string>(null)
  const options = {}

  useEffect(() => {
    if (document && !html) {
      setHtml(documentToHtmlString(document, options))
    }
  }, [document, html])

  return (
    <>
      { html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </>
  )
}

export default RichText
