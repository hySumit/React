import { useState, useEffect } from "react";
import PostItem from "./components/PostItem";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  async function fetchData(page) {
    setLoading(true);

    setTimeout(async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );

        let finalData = await response.json();
        setPosts(finalData);
      } catch (error) {
        setError(`Error Fetching Data:${error}`);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }

  useEffect(
    function () {
      fetchData(page);
    },
    [page]
  );

  return (
    <>
      {/* using conditional rendering to show the loading and error message on the ui as required in the assignment */}

      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          {loading ? (
            <h1>Data is being Loaded Please Wait</h1>
          ) : (
            <PostItem post={posts} />
          )}
        </div>
      )}

      <div className="btns">
        <button
          onClick={() => setPage(page - 1)}
          disabled={loading || error || page == 1 ? true : false}

          // here we are disabling the buttons based on the conditions
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={loading || error || page == 5 ? true : false}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
