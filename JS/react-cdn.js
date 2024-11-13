const parent = document.getElementById("root");
const element = React.createElement("h1",{},"This is new heading");
const root = ReactDOM.createRoot(parent);
root.render(element);