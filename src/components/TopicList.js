const TopicListItem = ({ topic, handleClick }) => {
  return (
    <li aria-label="li" onClick={() => handleClick(topic.name)}>
      <span>{topic.name} </span>
      <span>({topic.stargazerCount})</span>
    </li>
  );
};

function TopicsList({ data, setTopic }) {
  return (
    <>
      <p>{data.stargazerCount}</p>
      <h3>Related Topics</h3>
      <ul>
        {data.relatedTopics.map((item) => (
          <TopicListItem topic={item} key={item.id} handleClick={setTopic} />
        ))}
      </ul>
    </>
  );
}

export default TopicsList;
