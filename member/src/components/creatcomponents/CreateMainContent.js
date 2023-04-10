import style from './createcomponents.module.css';
import { useDispatch} from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import Map from '../googlemap/Map';

function CreateMainContent() {
    const dispatch = useDispatch();
    
    return(
        <div className={style.postmainContent}>
            <div className={style.postmainContent1}>
                <div className={style.postcalender}>
                <input type="date" className={style.datestyle}/>
                </div>
                <div className={style.postmap}>
                    <Map/>
                </div>
            </div>
            <div className={style.postmainContent4}>
                <div className={style.postmainContent2}>
                #코스 리스트   
                <button onClick={() => 
                    dispatch(openModal())}>
                        추가</button>
                </div>
                <div className={style.postmainContent3}>
                <input type="text" className={style.comentBox}/>
                </div>
            </div>
        </div>
    );
}
export default CreateMainContent;