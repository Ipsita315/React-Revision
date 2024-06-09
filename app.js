const heading = React.createElement("h1",
    {
        id: "heading",
        className: "heading-style heading-big"
    },
    "Hello World using react");

console.log("Heading: ", heading);

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
);

//const heading1 = ()=><h1>Heading using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
