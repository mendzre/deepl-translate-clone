import { Popover } from 'react-bootstrap'
import { CheckIcon } from '../Icons.tsx'

interface Props {
  text: string
}

function PopoverSuccess({ text }: Props) {
  return (
    <Popover className="popover-success rounded bg-success">
      <Popover.Body className="px-3 py-2 text-white">
        <small className="gap-2 d-flex align-items-center">
          <CheckIcon />
          {text}
        </small>
      </Popover.Body>
    </Popover>
  )
}

export default PopoverSuccess
