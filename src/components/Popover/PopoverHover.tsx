import { Popover } from 'react-bootstrap'

interface Props {
  text: string
}

function PopoverHover({ text }: Props) {
  return (
    <Popover className="bg-dark rounded">
      <Popover.Body className="px-3 py-2 text-white">
        <small>{text}</small>
      </Popover.Body>
    </Popover>
  )
}

export default PopoverHover
