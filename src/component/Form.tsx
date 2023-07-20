import React, { useState } from "react";
import "./Form.css"

const Form = ({ friends }: { friends: string }) => {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>{friends} さんへメッセージを送る</h1>
      <textarea className="" cols={30} rows={10} onChange={handleChange} value={value}></textarea>
      <button>送信</button>
    </div>
  );
};

export default Form;
