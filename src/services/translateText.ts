import { ChatCompletionRequestMessageRoleEnum } from 'openai'
import type { ChatCompletionResponseMessage } from 'openai'
import openai from './openaiInstance'
import { SupportedLanguages } from '../typings/enums'
import type { TranslateTextParams } from '../typings/types.d'
import { AUTO_LANGUAGE, BASE_TRANSLATE_MESSAGE } from '../typings/constants'

async function translateText({
  fromLanguage,
  toLanguage,
  text
}: TranslateTextParams): Promise<ChatCompletionResponseMessage | undefined> {
  if (fromLanguage === toLanguage) {
    return {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: text
    }
  }

  const fromCode =
    fromLanguage === AUTO_LANGUAGE
      ? AUTO_LANGUAGE
      : SupportedLanguages[fromLanguage as keyof typeof SupportedLanguages]
  const toCode =
    SupportedLanguages[toLanguage as keyof typeof SupportedLanguages]

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      ...BASE_TRANSLATE_MESSAGE,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: `${text} {{${fromCode}}} [[${toCode}]]`
      }
    ]
  })

  return completion.data.choices[0].message
}

export default translateText
