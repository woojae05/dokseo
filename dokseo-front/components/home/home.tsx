import React from "react";
import styled from "styled-components";

const Home = () => {
  const bestBooks = [
    {
      id: 1,
      title: "트렌드 코리아 2023",
      writer: "김난도",
      price: "19,000원",
      img: "http://image.yes24.com/goods/113416767/M",
    },
    {
      id: 2,
      title: "천 원을 경영하라",
      writer: "박정부",
      price: "16,000원",
      img: "http://image.yes24.com/goods/115381406/M",
    },
    {
      id: 3,
      title: "아버지의 해방일지",
      writer: "정지아",
      price: "15,000원",
      img: "http://image.yes24.com/goods/112253263/M",
    },
    {
      id: 4,
      title: "흔한남매 12",
      writer: "흔한남매",
      price: "14,500원",
      img: "http://image.yes24.com/goods/115467467/M",
    },
    {
      id: 5,
      title: "불편한 편의점 2",
      writer: "김호연",
      price: "14,000원",
      img: "http://image.yes24.com/goods/111088149/M",
    },
  ];
  return (
    <Wrapper>
      <div>
        <h2>이번주 베스트셀러</h2>
        <div className="booksContainer">
          {bestBooks.map((book) => (
            <div>
              <img src={book.img} alt="" />
              <h3>{book.title}</h3>
              <p>{`글쓴이: ${book.writer}`}</p>
              <p>{`가격: ${book.price}`}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .booksContainer {
    display: flex;
    justify-content: space-between;
    width: 1000px;
  }
`;
