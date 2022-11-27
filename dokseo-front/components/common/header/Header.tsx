import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Router from "next/router";
import { kakaoInit } from "util/kakao";
import { useResetRecoilState } from "recoil";
const Header = () => {
  const [isLogin, setIslogin] = useState(false);
  const [name, setName] = useState("");
  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();
    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: "/v2/user/me", // 사용자 정보 가져오기
          success: (res: any) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push

            setName(res.properties.nickname);
            setIslogin(true);
            // Router.push("/");
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="side-container">
          <Link href={"/"}>
            <a>
              <h1>똑</h1>
              <h3>똑한 독</h3>
              <h1>서</h1>
            </a>
          </Link>
        </div>
        <nav>
          <Link href={"/feed"}>
            <a>
              <h3>감상</h3>
            </a>
          </Link>
          <Link href={"/write"}>
            <a>
              <h3>쓰기</h3>
            </a>
          </Link>
        </nav>
        <div className="side-container">
          <ThemeToggle />
          {isLogin ? (
            <Link href={"/profile"}>{`${name}님`}</Link>
          ) : (
            <button
              className="loginBtn"
              onClick={() => {
                kakaoLogin();
              }}
            >
              카카오 로그인
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  border-bottom: 1.4px solid ${(props) => props.theme.reverse};

  .container {
    width: 100vw;
    height: 120px;
    display: flex;
    padding: 0 70px 0 50px;
    align-items: center;
    justify-content: space-between;
  }
  .side-container {
    display: flex;
    width: 150px;
    justify-content: space-around;
  }
  nav {
    width: 1000px;
    display: flex;
    > a {
      margin-left: 20px;
    }
  }
  a {
    display: flex;
    align-items: center;
  }
  .loginBtn {
    cursor: pointer;
    border: none;
    border-radius: 16px;
    background-color: #f7e600;
  }
`;

export default Header;
