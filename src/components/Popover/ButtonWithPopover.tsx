import { useState, type ReactNode } from 'react'
import { Button, OverlayTrigger } from 'react-bootstrap'
import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'
import type { OverlayChildren } from 'react-bootstrap/esm/Overlay'
import PopoverHover from './PopoverHover.tsx'
import waitByMilliseconds from '../../utils/waitByMilliseconds.ts'

interface Props {
  id?: string
  text: string
  variant?: string
  handleClick: (
    setOverlay: React.Dispatch<React.SetStateAction<OverlayChildren>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  disabled?: boolean
  children: ReactNode
}

function ButtonWithPopover({
  id,
  text,
  variant,
  handleClick,
  disabled,
  children
}: Props) {
  const [trigger, setTrigger] = useState<OverlayTriggerType[]>([
    'hover',
    'focus'
  ])
  const [overlay, setOverlay] = useState<OverlayChildren>(
    PopoverHover({ text })
  )
  const [showPopover, setShow] = useState<boolean>(false)

  function handleMouseEnter() {
    if (trigger.includes('hover')) {
      setShow(true)
    }
  }

  function handleMouseLeave() {
    ;(async () => {
      if (trigger.includes('click')) {
        setTrigger(['hover', 'focus'])
        setOverlay(PopoverHover({ text }))
      }

      await waitByMilliseconds(150)
      setShow(false)
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
        variant={variant ?? 'white'}
        onClick={() => {
          setTrigger(['click', 'focus'])
          handleClick(setOverlay, setShow)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={text}
        disabled={disabled}
      >
        {children}
      </Button>
    </OverlayTrigger>
  )
}

export default ButtonWithPopover
