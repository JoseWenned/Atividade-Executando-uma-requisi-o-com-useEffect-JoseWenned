import { useEffect, useState } from "react"

export const App = () => {

  const [news, setNews] = useState([])

  useEffect(() => {

    const getNews = async () => {

      const response = await fetch("https://blog-fake-api.onrender.com/news")
      const json = await response.json()
      setNews(json)

    }

    getNews()

  }, [])
 
  return (
    <div>
      <ul>
        {news.map((newItem) => (
          <li key={newItem.id}>
            <p>{newItem.category}</p>
            <h3>{newItem.title}</h3>
            <p>{newItem.content}</p>
            <h1>{newItem.author}</h1>
          </li>
        ))}
      </ul>
    </div>
  )

}


