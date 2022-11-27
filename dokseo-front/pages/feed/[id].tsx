import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import customAxios from "lib/coustomAxios";
import { NextPage } from "next";

interface PostDetailPagePros {
  postInfo: any;
}
const feed: NextPage<PostDetailPagePros> = ({ postInfo }) => {
  console.log(postInfo);

  //   const getFeed = async () => {
  //     console.log(postId);
  //     customAxios.get(`post/${4}`);
  //   };
  return (
    <Wrapper>
      <div className="feedContainer">
        <h1>책 제목 - {postInfo.title}</h1>
        <hr />
        <h2>글쓴이 - {postInfo.author}</h2>
        <hr />

        <h3>조회수: {postInfo.views}</h3>
        <hr />

        <h1>내용 </h1>
        <h4>{postInfo.content}</h4>
      </div>
    </Wrapper>
  );
};

type Props = {
  query: { id: number };
};
export async function getServerSideProps({ query: { id } }: Props) {
  const { data } = await customAxios.get(`post/${id}`);

  return {
    props: { postInfo: data }, // will be passed to the page component as props
  };
}

const Wrapper = styled.div`
  .feedContainer {
    width: 800px;
    margin: 0 auto;
  }
`;

export default feed;
