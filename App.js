import React from "react";
import ReactDOM from "react-dom/client";


//JSX=>Babel Transpilation converts to React.createElement => ReactElement-JS Object => HTMLElement(render)
const Title=()=><h1 className="heading" tabIndex="5">Namaste React!!</h1>;


const number = 100;
//This is called component composition
const HeadingComponent =() =>{
    return <div id="container">
     <Title />
    <h1>{100+200}{console.log('hello')}</h1>
    <h1 className="headingComponent">Namaste React Functional Component!</h1>
    </div>
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);



