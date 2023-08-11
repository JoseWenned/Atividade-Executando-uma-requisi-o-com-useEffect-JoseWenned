import { useEffect, useState } from "react"
import { FavoriteNews } from "./components/favoriteNews"
import { List } from "./components/List"

export const App = () => {

  const [news, setNews] = useState([])

  const localFavorite = localStorage.getItem("@MYFAVORITE")
  const [favoriteNews, setfavoriteNews] = useState(localFavorite ? JSON.parse(localFavorite) : [])

  

  useEffect(() => {

    const getNews = async () => {

      const response = await fetch("https://blog-fake-api.onrender.com/news")
      const json = await response.json()
      setNews(json)

    }

    getNews()

  }, [])

  
  useEffect(() => {
    localStorage.setItem("@MYFAVORITE", JSON.stringify(favoriteNews))
  }, [favoriteNews])

  const addFavorite = (post) => {
    
    if(!favoriteNews.some(favoriteNews => favoriteNews.id === post.id)){
      setfavoriteNews([...favoriteNews, post])
    } else {
      alert("news already exist!")
    }

  }

  const removeFavorite = (postId) => {
    const newFavorite = favoriteNews.filter((post) => post.id !== postId)
    setfavoriteNews(newFavorite)
  }
 
  return (
    <div>
      <List news={news} addFavorite={addFavorite}/>
      <FavoriteNews removeFavorite={removeFavorite} favoriteNews={favoriteNews}/>
    </div>
  )

}


