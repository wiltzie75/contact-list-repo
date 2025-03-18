// import React from "react";
import { useState, useEffect } from "react";
// import ContactRow from "./ContactRow";

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState(null);
    const [error, setError] = useState(null);
    console.log(selectedContactId)
    // useEffect(() => {
    //     async function fetchContact() {
    //         try {
    //             const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId.name}`);
    //             const result = await response.json();
    //             setContact(result);
    //         } catch (error) {
    //             setError(error)
    //         }
    //         console.log(contact);
    //     }
    //     fetchContact()
    // }, []);
    return(
        <>
        <tr className="selectedContact">
            <td>{selectedContactId.name}</td>
        </tr>
        <tr className="selectedContact">
            <td>{selectedContactId.email}</td>
        </tr>
        <tr className="selectedContact">
            <td>{selectedContactId.phone}</td>
        </tr>
        <p></p>
        <button type="button" onClick={() => {
                setSelectedContactId(contact)
            }}>Back</button>
        </>
    )
}
 
export default SelectedContact;

