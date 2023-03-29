import style from './createcomponents.module.css';
import { useDispatch} from 'react-redux';
import { openModal1 } from '../../features/modal/modalSlice1';

function CreateMainTitle() {
    const dispatch = useDispatch();

    return(
            <div className={style.createmaintitlestyle}>
            &nbsp;&nbsp;교토식 한옥마을 일정
            <button className={ style.btnset }onClick={
                () => dispatch(openModal1())}>
                    완료</button>
        </div>
    );
}
export default CreateMainTitle;