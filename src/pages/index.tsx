import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../components/layout";
import HeadLayout from "../components/HeadLayout";
import ButtonLayout from "../components/ButtonLayout";
import firebase from "../firebase/clientApp";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());

  if (loading) return loading;
  if (error) return null;

  return (
    <>
      <HeadLayout />

      <Layout>
        {user && <p>{user.displayName}</p>}
        <ButtonLayout />
      </Layout>
    </>
  );
}
