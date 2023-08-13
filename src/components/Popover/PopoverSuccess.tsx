import { Popover } from 'react-bootstrap'
import { CheckIcon } from '../Icons.tsx'
import PopoverBody from './PopoverBody.tsx'

interface Props {
  text: string
}

function PopoverSuccess({ text }: Props) {
  return (
    <Popover className="popover-success rounded bg-success">
      <PopoverBody>
        <small className="gap-2 d-flex align-items-center">
          <CheckIcon />
          {text}
        </small>
      </PopoverBody>
    </Popover>
  )
}

export default PopoverSuccess
