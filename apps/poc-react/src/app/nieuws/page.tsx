import { NieuwsCard } from '@dronten/components-react/src'
import { Suspense } from 'react'
import { usePrettyDate } from '../../hooks/usePrettyDate'

export default async function Nieuws() {
  const data = await fetch('https://openpub.dronten.nl/wp-json/owc/openpub/v1/items')
    .then((res) => res.json())
    .then(({ data }) => {
      return data.map(
        // @ts-ignore
        ({ id, title, excerpt, image, portal_url, date_modified }) => ({
          id,
          title,
          description: excerpt,
          imageUrl: image.srcset,
          linkUrl: portal_url,
          dateTime: usePrettyDate(date_modified)
        })
      )
    })

  return (
    <div className="container">
      <Suspense fallback={'...'}>
        <h1>Nieuws</h1>
        {/* @ts-ignore */}
        {data.map((item) => (
          <NieuwsCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            linkUrl={item.linkUrl}
            dateTime={item.dateTime}
          />
        ))}
      </Suspense>
    </div>
  )
}
