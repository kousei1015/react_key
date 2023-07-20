import { useState } from "react";
import "./App.css";
import Form from "./component/Form";

function App() {
  const [index, setIndex] = useState(0);
  const friends = ["佐藤", "鈴木"];

  const changeIndex = () => {
    if (index === friends.length) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };

  return (
    <>
      {/* {friends[index] === "佐藤" ? (
        <Form friends={"佐藤"} />
      ) : (
        <Form friends={"鈴木"} />
      )} */}
      {friends[index] === "佐藤" ? (
        <Form friends={"佐藤"} key={"佐藤"} />
      ) : (
        <Form friends={"鈴木"} key={"鈴木"} />
      )}
      <button onClick={changeIndex}>メッセージを送る友達を変える</button>
    </>
  );
}

export default App;
