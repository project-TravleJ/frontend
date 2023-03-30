import dashStyle1 from './dash.module.css';

import { useState } from 'react';

function DashMember() {

    const [ members, setMembers ] = useState([]);

            const display = () => {
                fetch(`https://jsonplaceholder.typicode.com/users`)
                    .then(res => res.json())
                    .then(data => setMembers(data));
            }
        // const members = useSelector(state => state);

        // const dispatch = useDispatch();

        // const display = () => {
        //     dispatch({
        //         type: 'DISPLAY',
        //         payload: { members }
        //     });
        // }

    return (
        <div className={ dashStyle1.dashmember }>
            <div className={ dashStyle1.circle1 }>
                <br/>
                <h1>{ display() } {members.length}</h1>
                <h3>Total Member</h3>
            </div>
            <div className={ dashStyle1.circle2 }>
                <br/>
                <h1>{ display() } {members.length}</h1>
                <h3>New Member</h3>
            </div>
        </div>
    )
}

export default DashMember;