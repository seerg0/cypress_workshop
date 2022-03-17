import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserData } from "../../store/User/selectors";
import { UserData } from "../../store/User/types";

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
};
export function Articles() {
  let [articles, setArticles] = useState<Article[]>([]);

  const { userData } = useSelector(selectUserData);

  useEffect(() => {
    fetch("http://localhost:3010/666/articles", {
      headers: {
        Authorization: "Bearer " + userData?.accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  if (!userData?.accessToken) {
    return <Navigate to={"/login"} />;
  }
  console.log("articles", articles);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.image} alt={article.title} />
            <div>{article.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
