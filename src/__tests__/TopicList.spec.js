import React from "react";
import { render, screen } from "@testing-library/react";

import TopicList from "../components/TopicList";

const mockFunc = jest.fn();
const mockData = {
  relatedTopics: [
    {
      id: 1,
      name: "topic1",
      starGazersCount: 10,
    },
    {
      id: 2,
      name: "topic2",
      starGazersCount: 20,
    },
    {
      id: 3,
      name: "topic3",
      starGazersCount: 30,
    },
  ],
};

test("renders mock data", () => {
  render(<TopicList data={mockData} setTopic={mockFunc} />);
  const liElements = screen.getAllByLabelText("li");
  expect(liElements).toHaveLength(3);
});
