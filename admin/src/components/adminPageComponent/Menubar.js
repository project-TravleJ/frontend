import menubar from "./component.module.css"

function Menubar() {

    const admin = {
        name: "admin001"
    }

    return(
        <div className={menubar.menubarStyle}>
            <div className={menubar.container}>
                <p>{admin.name} 님</p>
                <p>logout</p>
            </div>
        </div>
    );
}

export default Menubar;