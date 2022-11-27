import customAxios from "lib/coustomAxios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Feed = () => {
  const [feeds, setFeeds] = useState([
    { id: "", title: "", author: "", content: "", createdTime: "", views: "" },
  ]);
  const getFeeds = async () => {
    const { data } = await customAxios.get("/post");
    setFeeds(data);
  };

  const transferDate = (date: string): string => {
    return date.split("T")[0];
  };
  useEffect(() => {
    getFeeds();
  }, []);
  return (
    <Wrapper>
      <h1>감상문 감상</h1>
      <div className="feedContainer">
        {feeds.map((feed) => {
          return (
            <Link href={`feed/${feed.id}`}>
              <div className="feed">
                <h2>제목:{feed.title}</h2>
                <p>글쓴이 - {feed.author}</p>
                <p>생성일 - {transferDate(feed.createdTime)}</p>
                <p>조회수 - {feed.views}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  padding: 10px;
  margin: 0 auto;
  .feed {
    border-radius: 16px;
    width: 800px;
    padding: 20px;
    cursor: pointer;
    border: 1px solid #000;
  }
  .feedContainer {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;

export default Feed;
