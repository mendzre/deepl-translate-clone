import { useState } from 'react'
import ButtonWithPopover from '../../Popover/ButtonWithPopover.tsx'
import { SpeakerIcon, SpeakerRunningIcon } from '../../Icons.tsx'
import Loader from './Loader.tsx'
import useTranslate from '../../../hooks/useTranslate.ts'

function SpeakerButton() {
  const { result, toLanguage } = useTranslate()
  const [waiting, setWaiting] = useState(false)
  const [playing, setPlaying] = useState(false)

  function handleClick() {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage.toString().toLowerCase()

    setWaiting(true)

    utterance.onstart = () => {
      setWaiting(false)
      setPlaying(true)
    }

    utterance.onend = () => {
      setPlaying(false)
      console.log('Finished speaking.')
    }

    speechSynthesis.speak(utterance)
  }

  return (
    <ButtonWithPopover id="speaker" text="Listen" handleClick={handleClick}>
      {!waiting && !playing && <SpeakerIcon />}
      {waiting && <Loader />}
      {playing && <SpeakerRunningIcon />}
    </ButtonWithPopover>
  )
}

export default SpeakerButton
