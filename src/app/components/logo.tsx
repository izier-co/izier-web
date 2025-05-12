import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'

type LogoProps = {
  useAs: string | 'global-image'
  width?: number
  height?: number
  className?: string
}

export const LogoLight = async ({ className, useAs, width = 64, height = 64 }: LogoProps) => {
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'media',
    where: {
      useAs: { equals: useAs },
      isHide: { equals: false },
      isDarkMode: { equals: false },
    },
  })
  return (
    <>
      {res.docs.map((media) => (
        <Image
          key={media.id}
          className={className}
          src={media.url || ''}
          alt={media.alt}
          width={width}
          height={height}
        />
      ))}
    </>
  )
}

export const LogoDark = async ({ className, useAs, width = 64, height = 64 }: LogoProps) => {
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'media',
    where: {
      useAs: { equals: useAs },
      isHide: { equals: false },
      isDarkMode: { equals: true },
    },
  })
  return (
    <>
      {res.docs.map((media) => (
        <Image
          key={media.id}
          className={className}
          src={media.url || ''}
          alt={media.alt}
          width={width}
          height={height}
        />
      ))}
    </>
  )
}
