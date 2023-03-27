import dashStyle1 from './dash.module.css';

function DashMember() {

    return (
        <div className={ dashStyle1.dashmember }>
            <div className={ dashStyle1.circle1 }>
                <br/>
                <h1>714</h1>
                <h3>Member</h3>
            </div>
            <div className={ dashStyle1.circle2 }>
                <br/>
                <h1>70</h1>
                <h3>New Member</h3>
            </div>
        </div>
    )
}

export default DashMember;