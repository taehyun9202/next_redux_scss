import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postAction";

export default function Home() {
  const [fetched, setFected] = useState(false);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
    setFected(true);
  }, [fetched === false]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts &&
          posts.map((post) => (
            <div className="">
              <h1 className="border border-gray-500 w-10">{post}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
