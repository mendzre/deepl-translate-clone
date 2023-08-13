import { useState, type ReactNode } from 'react'
import { Button, OverlayTrigger } from 'react-bootstrap'
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'
import type { OverlayChildren } from 'react-bootstrap/esm/Overlay'
import PopoverHover from './PopoverHover.tsx'
import waitByMilliseconds from '../../utils/waitByMilliseconds.ts'

interface Props {
  id: string
  text: string
  handleClick: (
    setTrigger: React.Dispatch<React.SetStateAction<OverlayTriggerType[]>>,
    setOverlay: React.Dispatch<React.SetStateAction<OverlayChildren>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  children: ReactNode
}

function ButtonWithPopover({ id, text, handleClick, children }: Props) {
  const [trigger, setTrigger] = useState<OverlayTriggerType[]>([
    'hover',
    'focus'
  ])
  const [overlay, setOverlay] = useState<OverlayChildren>(
    PopoverHover({ text })
  )
  const [showPopover, setShow] = useState<boolean>(false)

  function handleMouseEnter() {
    setTrigger(['hover', 'focus'])
    setOverlay(PopoverHover({ text }))
    setShow(true)
  }

  function handleMouseLeave() {
    ;(async () => {
      if (!trigger.includes('click')) {
        await waitByMilliseconds(150)
        setShow(false)
      }
    })().catch(() => {})
  }

  return (
    <OverlayTrigger
      trigger={trigger}
      placement="top"
      overlay={overlay}
      show={showPopover}
      transition={false}
    >
      <Button
        id={id}
        variant="white"
        onClick={() => {
          handleClick(setTrigger, setOverlay, setShow)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Button>
    </OverlayTrigger>
  )
}

export default ButtonWithPopover
