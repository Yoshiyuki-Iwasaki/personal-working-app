import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;
const Logo = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
const TextLink = styled.a`
  font-size: 14px;
  font-weight: 700;
`;

const HeaderComponent = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  if (loading) return loading;
  if (error) return null;

  return (
    <Header>
      {user && (
        <Link href="/">
          <Logo>{user.displayName}</Logo>
        </Link>
      )}
      <Link href="/mypage">
        <TextLink>Mypage</TextLink>
      </Link>
    </Header>
  );
};

export default HeaderComponent;
