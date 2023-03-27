import headstyle from './usecomponents.module.css';

function Header() {
    return (
        <div className={headstyle.headstyle}>
            <img src="../../image/travelJLogo.png"></img>
            <input type="text" placeholder="Search" className={headstyle.searchBox}/>
            <div>
                글쓰기
            </div>
        </div>
    );
}

export default Header;