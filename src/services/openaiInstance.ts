import { OpenAIApi, Configuration } from 'openai'

const apiKey = import.meta.env.VITE_TRANSLATE_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export default openai
