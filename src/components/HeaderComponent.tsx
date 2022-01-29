import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  padding: 20px 15px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  font-size: 22px;
  color: #333;
  font-weight: 700;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  font-weight: 700;
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.6;
  }
`;

const TextLink = styled.a`
  margin-left: 30px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

const HeaderComponent = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  const logout = () => {
    firebase.auth().signOut();
  };

  if (loading) return loading;
  if (error) return null;

  return (
    <Header>
      <Link href="/">
        <Logo>{user.displayName}</Logo>
      </Link>

      <RightArea>
        <Button onClick={() => logout()}>ログアウト</Button>

        <Link href="/mypage">
          <TextLink>マイページ</TextLink>
        </Link>
      </RightArea>
    </Header>
  );
};

export default HeaderComponent;
