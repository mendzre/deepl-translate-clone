import type { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'
import type { OverlayChildren } from 'react-bootstrap/esm/Overlay'
import ButtonWithPopover from '../../Popover/ButtonWithPopover.tsx'
import { ClipboardIcon } from '../../Icons.tsx'
import PopoverSuccess from '../../Popover/PopoverSuccess.tsx'
import useTranslate from '../../../hooks/useTranslate.ts'
import waitByMilliseconds from '../../../utils/waitByMilliseconds.ts'

function Clipboard() {
  const { result } = useTranslate()
  const hoverText = 'Copy to the clipboard'

  function handleClick(
    setTrigger: React.Dispatch<React.SetStateAction<OverlayTriggerType[]>>,
    setOverlay: React.Dispatch<React.SetStateAction<OverlayChildren>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    ;(async () => {
      setShow(false)

      await waitByMilliseconds(150)

      setTrigger(['click', 'focus'])
      setOverlay(PopoverSuccess({ text: 'Copied translation' }))

      await waitByMilliseconds(150)

      setShow(true)
      navigator.clipboard.writeText(result).catch(() => {})

      await waitByMilliseconds(500)

      setShow(false)
    })().catch(() => {})
  }

  return (
    <ButtonWithPopover
      id="clipboard"
      text={hoverText}
      handleClick={handleClick}
    >
      <ClipboardIcon />
    </ButtonWithPopover>
  )
}

export default Clipboard
