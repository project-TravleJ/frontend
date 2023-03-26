import style from './modalcomponents.module.css';


function CreatePlaceInsert() {

    return(
    
        <div className={ style.placecontrolModal }>
                <div>
                    <h1 align="center">장소 등록</h1>
                </div>
            <div className={ style.container }>
                <div className={ style.placemap }>
                    맵 넣을 예정
                </div>
                <div className={style.searchBox}>검색
                    &nbsp; <input type='text' />
                </div>
                    
            </div>
        </div>

    );
}

export default CreatePlaceInsert;