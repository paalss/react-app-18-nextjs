import { useRouter } from "next/router";

function Details() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>Details Page</h1>;
}

export default Details;
