import { Button, ButtonGroup } from "@mui/material";
import React, { useReducer } from "react";

// react hooksの一つのuseReducer
// ステート更新用の関数を定義することができる
// 内部的にはuseStateを使ってるらしい
// ちょっとした分岐とか変形させたい時便利かもね！
// 大文字にするとか？
// パスタ作ったお前ミキサーとか
const Reducer: React.FC = () => {
  const initialState = 0;
  // reducer関数、第1引数はステート、第2引数はdispatchの引数で受ける変数
  const reducerFunc = (count: number, action: string) => {
    switch (action) {
      case "+":
        return count + 1;
      case "-":
        return count - 1;
      case "reset":
        return 0;
      default:
        return 0;
    }
  };
  // useReducer
  // const [state, dispatch呼び出し関数] = useReducer(dispatch関数, 初期値)の意味
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <>
      <h2>カウント：{count}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => dispatch("+")}>increment</Button>
        <Button onClick={() => dispatch("-")}>decrement</Button>
        <Button onClick={() => dispatch("reset")}>reset</Button>
      </ButtonGroup>
    </>
  );
};

export default Reducer;
