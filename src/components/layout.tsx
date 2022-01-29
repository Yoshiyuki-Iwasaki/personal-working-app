import React from "react";
import Auth from "./auth";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import HeadLayout from "./HeadComponent";
import HeaderLayout from "./HeaderComponent";

const Layout: React.FC<any> = ({ children }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  if (loading) return <p>loading</p>;
  if (error) return null;
  return (
    <>
      <HeadLayout />
      {!user ? (
        <Auth />
      ) : (
        <>
          <HeaderLayout />
          <Main>{children}</Main>
        </>
      )}
    </>
  );
};

export default Layout;

const Main = styled.main``;
