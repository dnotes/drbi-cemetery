import { transliterate, slugify } from 'transliteration'

const graves = import.meta.globEager('/content/gravesites/**/*.md')
const dateOptions:Intl.DateTimeFormatOptions = {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export async function get() {
  let sites = Object.keys(graves).map(k => {
    let s = graves[k]
    return Object.assign({
      slug: slugify(transliterate(s.attributes.name).replace(/-+/g, '-'))
    },
    s.attributes,
    {
      born: s.attributes?.born?.includes('T00') ? new Date(s.attributes.born).toLocaleDateString('en-US', dateOptions) : s.attributes?.born?.toString(),
      deceased: s.attributes?.deceased.includes('T00') ? new Date(s.attributes?.deceased).toLocaleDateString('en-US', dateOptions) : s.attributes?.deceased?.toString(),
      html: s.html,
    })
  }).sort((a,b) => a.slug < b.slug ? -1 : 1)
  return { body: sites }
}
