export const List = ({ news, addFavorite }) => {
    return(
        <>
            <ul>
                {news.map((post) => (
                <li key={post.id}>
                    <p>{post.category}</p>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <h1>{post.author}</h1>

                    <button onClick={() => addFavorite(post)}>add</button>
                </li>
                ))}
            </ul>
        </>
    )
}