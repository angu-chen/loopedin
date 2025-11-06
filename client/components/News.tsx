import { useState, useEffect } from 'react'

interface Article {
  title: string
  description: string
  url: string
  urlToImage?: string
}

export default function News() {
  const [userLocation, setUserLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [error, setError] = useState<string | null>(null)

  const apiKey = import.meta.env.VITE_NEWS_API_KEY

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          console.error('Error getting user location:', error)
          setError('Unable to get your location')
        },
      )
    } else {
      console.log('Geolocation is not supported by this browser')
      setError('Geolocation not supported')
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  useEffect(() => {
    if (userLocation) {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=New%20Zealand&sortBy=publishedAt&apiKey=${apiKey}`,
          )
          const data = await response.json()
          setArticles(data.articles)
        } catch (err) {
          console.error(err)
          setError('Failed to fetch news')
        }
      }

      fetchNews()
    }
  }, [userLocation, apiKey])

  return (
    <div className="min-h-screen bg-[#fdf0d5] px-8 py-10 text-center">
      <h2 className="text-black-#000 mb-6 text-3xl font-bold">News</h2>
      {error && <p className="text-red-600">{error}</p>}

      {!userLocation && !error && <p>Getting your location...</p>}

      <div className="flex flex-wrap justify-center gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-black-#000 block w-80 rounded-lg border bg-white p-4 text-left shadow transition hover:shadow-lg"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="mb-3 h-40 w-full rounded-md object-cover"
              />
            )}
            <h3 className="mb-2 text-lg font-semibold text-[#003049]">
              {article.title}
            </h3>
            <p className="text-black-#000 text-sm">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
