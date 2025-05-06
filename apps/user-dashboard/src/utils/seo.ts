interface SEOOptions {
  title?: string
  description?: string
}

export function generateMetaTags({ title, description }: SEOOptions) {
  const metaTitle = title ?? 'SEO SuperApp'
  const metaDescription = description ?? 'All-in-one SEO automation and research tool'

  document.title = metaTitle

  const descriptionTag = document.querySelector('meta[name="description"]')
  if (descriptionTag) {
    descriptionTag.setAttribute('content', metaDescription)
  } else {
    const meta = document.createElement('meta')
    meta.name = 'description'
    meta.content = metaDescription
    document.head.appendChild(meta)
  }
}
