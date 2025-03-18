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
            <td><span className="bold-label">Name:</span> {selectedContactId.name}</td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">Email: </span> {selectedContactId.email}</td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">Phone: </span> {selectedContactId.phone}</td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">Address</span> </td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">Street:</span>  {selectedContactId.address.street} {selectedContactId.address.suite}</td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">City/Zip</span> {selectedContactId.address.city} {selectedContactId.address.zip}</td>
        </tr>
        <tr className="selectedContact">
            <td><span className="bold-label">Company: </span> {selectedContactId.company.name}</td>
        </tr>
        <p></p>
        <button type="button" onClick={() => {
                setSelectedContactId(contact)
            }}>Back</button>
        </>
    )
}
 
export default SelectedContact;

