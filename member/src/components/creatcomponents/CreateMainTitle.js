import style from './createcomponents.module.css';

function CreateMainTitle() {
    return(
            <div className={style.createmaintitlestyle}>
            &nbsp;&nbsp;교토식 한옥마을 일정
            <button className={ style.btnset }>완료</button>
        </div>
    );
}
export default CreateMainTitle;