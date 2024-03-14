import React from 'react';
import {
  atom,
  useRecoilState,
  RecoilRoot,
} from 'recoil';

const textState = atom({
  key: 'dataState',
  default: {
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  },
});


const App = (props) => {

  const [data, setData] = useRecoilState(textState);

  const changeColor = () => {
    setData({ ...data, color: "blue" });
    props.changeOption("React")
  }

  return (
    <button
      onClick={changeColor}
      style={{ backgroundColor: data.color }}
    >
      React button
    </button>
  )
}

const AppRecoilRoot = (props) => (
  <RecoilRoot>
    <App {...props} />
  </RecoilRoot>
)

export default AppRecoilRoot