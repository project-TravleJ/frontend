import dashStyle1 from './dash.module.css';

function DashMember() {

    return (
        <div className={ dashStyle1.dashmember }>
            <div className={ dashStyle1.circle1 }>
                <br/>
                <h1>714</h1>
                <h4>Member</h4>
            </div>
            <div className={ dashStyle1.circle2 }>
                <br/>
                <h1>70</h1>
                <h4>New Member</h4>
            </div>
        </div>
    )
}

export default DashMember;