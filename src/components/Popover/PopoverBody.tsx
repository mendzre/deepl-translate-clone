import { type ReactNode } from 'react'
import { Popover } from 'react-bootstrap'

interface Props {
  children: ReactNode
}

function PopoverBody({ children }: Props) {
  return (
    <Popover.Body className="px-3 py-2 text-white text-center">
      {children}
    </Popover.Body>
  )
}

export default PopoverBody
