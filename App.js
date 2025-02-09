const headingElement=React.createElement("h1",{id:"headingElement"},"Hello World using React!!");
console.log(headingElement);

const heading=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm inside tags!"),React.createElement("h2",{},"Second h2 tag")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm inside tags!"),React.createElement("h2",{},"Second h2 tag")])


])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
root.render(heading);


