import menubar from "./component.module.css"

function Menubar() {

    const admin = {
        name: "admin001"
    }

    return(
        <div className={menubar.menubarStyle}>
            <p>{admin.name} 님</p>
            <p>logout</p>
        </div>
    );
}

export default Menubar;