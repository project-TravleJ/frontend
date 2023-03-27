import header from "./component.module.css";

function Header() {

    return(
        <div className={header.headerStyle}>
            <img src="./image/travelJLogo.png"/>
        </div>
    );
}

export default Header;