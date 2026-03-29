import 'server-only'

export const fetchServer = async <T>(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<T> => {
  const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

  if (!STRAPI_API_TOKEN) {
    throw new Error('Server env variables are missing')
  }

  const url = `https://eb.organica.ua/api${input}`

  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API error ${response.status}`)
  }

  return await response.json()
}
