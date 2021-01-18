import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts";

function createCard(contact) {
    return <App 
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />;
}

ReactDOM.render(
    <div>
        <div>
            <h1 className="heading">My Contacts</h1>
        </div>
        {contacts.map(createCard())}

        {/* <App 
            name="Beyonce" 
            img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            tel="+123 456 7899"
            email="b@beyonce.com"
        />
        <App 
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />
        <App
            name={contacts[2].name}
            img={contacts[2].imgURL}
            tel={contacts[2].phone}
            email={contacts[2].email}
        /> */}
    </div>,
    document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
