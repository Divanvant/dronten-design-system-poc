import { LocationCard } from '@dronten/components-react/src'
import { Suspense } from 'react'

export default async function Contact() {
  const data = await fetch('https://openpdc.dronten.nl/wp-json/owc/pdc/v1/locations')
    .then((res) => res.json())
    .then(({ data }) => {
      // @ts-ignore
      return data.map(({ title, location, general }) => {
        return {
          title,
          description: general.description,
          location,
          imageUrl: location.image.srcset
        }
      })
    })

  return (
    <div className="container">
      <Suspense fallback={'...'}>
        <h1>Contact page</h1>
        {/* @ts-ignore */}
        {data.map((item) => (
          <LocationCard
            key={item.title}
            cardTitle={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            mapLink={item.location.mapLink}
            street={item.location.street}
            zipCode={item.location.zipCode}
            city={item.location.city}
          />
        ))}
      </Suspense>
    </div>
  )
}
