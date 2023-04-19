
import { useEffect } from "react";
import { createStore } from "redux";
import { ReactDOM } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import dashStyle1 from './dash.module.css';

function FetchMember (state = [], { type, payload }) {

    switch(type) {
        case 'DISPLAY':
            return (
                useEffect(
                    () => {
                        fetch(`https://jsonplaceholder.typicode.com/users/`)
                        .then(res => res.json())
                        .then(data => payload)
                    },
                    []
                )
            );
            default :
                return state;
        }
}

//const store = createStore(FetchMember);

function DashMember2(){

    const members = useSelector(state => state);

    const dispatch = useDispatch();

    const display = () => {
        dispatch({
            type: 'DISPLAY',
            payload: { members }
        });
    }
    return (
        <div className={ dashStyle1.dashmember }>
        <div className={ dashStyle1.circle1 }>
            <br/>
            <h1>{members.length}</h1>
            <h3>Total Member</h3>
        </div>
        <div className={ dashStyle1.circle2 }>
            <br/>
            <h1>{members.length}</h1>
            <h3>New Member</h3>
        </div>
    </div>
    )
} 

export default DashMember2;