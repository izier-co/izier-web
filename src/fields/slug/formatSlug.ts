import type { FieldHook } from 'payload'

export const formatSlug = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

/**
 * A hook function to format a slug value based on provided data and operation context.
 *
 * @param fallback - The key in the `data` object to use as a fallback for generating the slug
 *                   if the `value` is not provided or invalid.
 * @returns A `FieldHook` function that processes the slug value.
 *
 * The returned hook function performs the following:
 * - If `value` is a string, it formats the slug using `formatSlug`.
 * - If the operation is `create` or the `data.slug` is not present, it attempts to use the
 *   `fallback` key from the `data` object to generate the slug.
 * - If the `fallback` key exists in `data` and is a string, it formats the slug using `formatSlug`.
 * - Otherwise, it returns the original `value`.
 */
export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
