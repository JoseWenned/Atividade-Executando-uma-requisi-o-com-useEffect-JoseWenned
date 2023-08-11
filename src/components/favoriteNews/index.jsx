export const FavoriteNews = ({ removeFavorite, favoriteNews }) => {

    return(
        <>
            <ul>
                {favoriteNews.map((post) => (
                    <li key={post.id}>

                        <h3>{post.title}</h3>
                        <h1>{post.author}</h1>

                        <button onClick={() => removeFavorite(post.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}