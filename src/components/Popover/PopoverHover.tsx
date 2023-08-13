import { Popover } from 'react-bootstrap'
import PopoverBody from './PopoverBody.tsx'

interface Props {
  text: string
}

function PopoverHover({ text }: Props) {
  return (
    <Popover className="bg-dark rounded">
      <PopoverBody>
        <small>{text}</small>
      </PopoverBody>
    </Popover>
  )
}

export default PopoverHover
