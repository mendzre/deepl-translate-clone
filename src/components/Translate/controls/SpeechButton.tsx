import { useState } from 'react'
import type { OverlayChildren } from 'react-bootstrap/esm/Overlay'
import ButtonWithPopover from '../../Popover/ButtonWithPopover.tsx'
import { SpeechIcon, SpeechRunningIcon } from '../../Icons.tsx'
import Loader from './Loader.tsx'
import useTranslate from '../../../hooks/useTranslate.ts'

function SpeechButton() {
  const { result, toLanguage } = useTranslate()
  const [waiting, setWaiting] = useState(false)
  const [playing, setPlaying] = useState(false)

  function handleClick(
    _: React.Dispatch<React.SetStateAction<OverlayChildren>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setShow(false)
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage.toString().toLowerCase()
    setWaiting(true)

    utterance.onstart = () => {
      setWaiting(false)
      setPlaying(true)
    }

    utterance.onend = () => {
      setPlaying(false)
    }

    speechSynthesis.speak(utterance)
  }

  return (
    <ButtonWithPopover id="speech" text="Listen" handleClick={handleClick}>
      {!waiting && !playing && <SpeechIcon />}
      {waiting && <Loader />}
      {playing && <SpeechRunningIcon />}
    </ButtonWithPopover>
  )
}

export default SpeechButton
