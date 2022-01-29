import firebase from "../firebase/clientApp";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
  background: #fff;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
`;

const ButtonComponent = () => {
  const db = firebase.firestore();
  const [button, setButton] = useState(false);
  const now = new Date();

  const handleAttend = async e => {
    const result = window.confirm("本当に出勤しますか？");
    if (result) {
      setButton(true);
      console.log("出勤しました");
      e.preventDefault();
      await db
        .collection("time")
        .doc(now.getFullYear() + "_" + now.getMonth() + 1 + "_" + now.getDate())
        .collection(firebase.auth().currentUser.uid)
        .add({
          id: new Date().getTime(),
          userId: firebase.auth().currentUser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

  const handleLeaveWork = async e => {
    const result = window.confirm("本当に退勤しますか？");
    if (result) {
      setButton(false);
      console.log("退勤しました");
      e.preventDefault();
      await db
        .collection("time")
        .doc(now.getFullYear() + "_" + now.getMonth() + 1 + "_" + now.getDate())
        .collection(firebase.auth().currentUser.uid)
        .add({
          id: new Date().getTime(),
          userId: firebase.auth().currentUser.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

  return (
    <>
      {button ? (
        <Button onClick={handleLeaveWork}>退勤する</Button>
      ) : (
        <Button onClick={handleAttend}>出勤する</Button>
      )}
    </>
  );
};

export default ButtonComponent;
