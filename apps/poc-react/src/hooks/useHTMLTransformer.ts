const createButton = (title: string, href: string, isSecondary?: boolean) => {
  const link = document.createElement('a')
  link.innerHTML = title
  link.href = href
  link.classList.add('dronten-button')
  if (isSecondary) {
    console.log(title)
    link.classList.add('dronten-button__secondary')
  }

  return link
}

const useHTMLTransformer = (html: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const listPosts = doc.querySelector('.yard-blocks-list-posts')
  if (listPosts) {
    const newsPosts = document.createElement('div')
    newsPosts.classList.add('news-posts')
    newsPosts.innerHTML = 'testing'
    listPosts.replaceWith(newsPosts)
  }

  const buttons = doc.querySelectorAll('.yard-blocks-button')
  buttons.forEach((button) => {
    const link = button.querySelector('a')

    const newButton = createButton(
      link?.innerHTML || '',
      link?.getAttribute('href') || '',
      link?.classList.contains('has-white-background-color')
    )

    button.replaceWith(newButton)
  })

  return doc.body.innerHTML
}

export default useHTMLTransformer
