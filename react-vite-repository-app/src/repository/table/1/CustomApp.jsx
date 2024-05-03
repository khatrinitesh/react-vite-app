import React from "react";
import Example from "./Example";

const CustomApp = () => {

    const data = [
        {id:1,name:'test1'},
        {id:2,name:'test2'},
        {id:3,name:'test3'},
        {id:4,name:'test4'},
        {id:5,name:'test5'},
        {id:6,name:'test6'},
        {id:7,name:'test7'},
        {id:8,name:'test8'},
        {id:9,name:'test9'},
    ]
  return (
    <>
      <Example data={data} />
    </>
  );
};

export default CustomApp;
