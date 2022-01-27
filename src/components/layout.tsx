import React from "react";
import Auth from "./auth";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Layout: React.FC<any> = ({ children }) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  if (loading) return <p>loading</p>;
  if (error) return null;
  return (
    <>
      <Main>{!user ? <Auth /> : <>{children}</>}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main``;
