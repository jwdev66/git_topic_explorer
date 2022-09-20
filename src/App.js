import { useState } from "react";
import { useQuery } from "graphql-hooks";
import TopicList from "./components/TopicList";
import SearchBar from "./components/SearchBar";
import { TopicsQuery } from "./graphql/query";

function App() {
  const [topic, setTopic] = useState("react");

  const { loading, error, data } = useQuery(TopicsQuery, {
    variables: { name: topic },
  });

  const handleSubmit = (ev, value) => {
    ev.preventDefault();
    setTopic(value);
  };

  return (
    <div>
      <div>
        <h2>Git Topic Explorer</h2>
        <SearchBar handleSubmit={handleSubmit} topic={topic} />
        {loading && <h3>Loading...</h3>}
        {error && <h3>Something went wrong...please try again</h3>}
        {data && <TopicList data={data.topic} setTopic={setTopic} />}
      </div>
    </div>
  );
}

export default App;
