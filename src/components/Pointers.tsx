import { FunctionComponent } from 'react'
import RichText from '@components/RichText'

import { PointerPropsI } from '@lib/contentful'

interface PointersPropsI {
  pointers: PointerPropsI[]
}

const Pointers: FunctionComponent<PointersPropsI> = ({
  pointers = []
}) => {
  return (
    <>
      { pointers.map((pointer, idx) => (
        <div key={`pointer-${idx+1}`}>
          <RichText document={pointer.content} />
        </div>
      ))}
    </>
  )
}

export default Pointers