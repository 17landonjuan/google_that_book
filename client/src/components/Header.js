import React from "react";
import heroImage from "../images/books-2.jpg";

const headerStyle = {
    "backgroundImage": `url(${heroImage})`,
    "maxWidth": "100vw",
    height: "calc(100vw * .43333)",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google.That.Book</h1>
            <p>Build your ultimate "Books I say I'm totally going to read one day but realistically will probably just buy and after glancing at the first page put on the shelf where they will collect dust and hopefully make me look smarter and more interesting of a person"!</p>
        </header>
    );
}

export default Header;