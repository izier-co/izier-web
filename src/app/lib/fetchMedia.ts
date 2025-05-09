import { initPayload } from '@/utils/initPayload'
import type { PaginatedDocs } from 'payload'

export type Media = {
  useAs: string
  isDarkMode: boolean
  limit: number
}

export const fetchMedia = async (
  useAs: string,
  isDarkMode: boolean,
  limit: number,
): Promise<PaginatedDocs<{ docs: Media[] }>> => {
  const payload = initPayload()
  const media = (await payload).find({
    collection: 'media',
    where: {
      useAs: { equals: useAs },
      isDarkMode: { equals: isDarkMode },
    },
    limit: limit,
  })
  return media
}
