import React, { useState } from "react";
import styled from "styled-components";
import customAxios from "lib/coustomAxios";
import { useRouter } from "next/router";

const Write = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const date = new Date();

  const writePost = () => {
    customAxios
      .post("/post/register", { title, author: writer, content })
      .then(() => {
        alert("등록성공");
        router.push("/feed");
      });
  };

  return (
    <Wrapper>
      <div className="writeContaienr">
        <input
          type="text"
          placeholder="책 제목"
          className="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="글쓴이"
          className="writer"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        <h2>{`날짜: ${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일`}</h2>
        <h2>감상평</h2>

        <textarea
          placeholder="내용"
          className="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          writePost();
        }}
      >
        등록하기
      </button>
    </Wrapper>
  );
};
export default Write;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px;
  input {
    border-radius: 4px;
    display: block;
    border: none;
    outline: none;
    margin-bottom: 5px;
  }
  .title {
    width: 80%;
    height: 50px;
    font-size: 30px;
  }
  .writer {
    width: 80%;
    height: 50px;
    font-size: 30px;
  }
  .content {
    width: 80%;
    height: 300px;
    border: none;
    outline: none;
    font-size: 16px;
  }
  button {
    margin-left: 62%;
    margin-top: 10px;
    border-radius: 16px;
    width: 200px;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
  }
`;
