
import { useEffect } from "react";
import { createStore } from "redux";
import DashMember from "./DashMember";

function FetchMember () {

        useEffect ( 
            () => {
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(res => res.json())
                },
                [] 
                );
}

export default FetchMember;