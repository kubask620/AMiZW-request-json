import { useEffect, useState } from "react";
import "./PostsList.css";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!response.ok) {
                throw new Error("Nie udało się pobrać danych.");
            }

            const data = await response.json();
            setPosts(data.slice(0, 10));
        } catch (err) {
            setError(err.message || "Wystąpił błąd.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="posts-section">
            <div className="posts-container">
                <div className="posts-header">
                    <div>
                        <h1>Lista postów</h1>
                        <p>Pobieranie danych z API w React</p>
                    </div>

                    <button className="reload-btn" onClick={fetchPosts} disabled={loading}>
                        {loading ? "Pobieranie..." : "Pobierz ponownie"}
                    </button>
                </div>

                {loading && (
                    <p className="info-message">Ładowanie danych...</p>
                )}

                {error && (
                    <p className="error-message" style={{ color: "red", fontWeight: "bold" }}>
                        Błąd: {error}
                    </p>
                )}

                {!loading && !error && posts.length > 0 && (
                    <div className="posts-list">
                        {posts.map((post) => (
                            <div key={post.id} className="post-card">
                                <span className="post-id">Post #{post.id}</span>
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-body">{post.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default PostsList;