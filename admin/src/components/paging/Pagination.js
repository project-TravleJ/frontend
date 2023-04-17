import { useState } from "react";
import PagingDesign from './paging.module.css';

/** 배열 데이터를 받아 몇 페이지까지 나올 수 있는지 결과를  int로 리턴하는 메소드 
 * 인자로  data에는 배열 데이터를,
 * showAmount에는 한 페이지에 보여줄 데이터의 양을 입력한다.
 */
function maxPage(data, showAmount){

    const length = data.length;

    const paging = Math.ceil(length / showAmount);

    return paging;
}

/**
 * pagingComponent()는 배열데이터를 페이징 처리해주고, 다름 페이지로 이동할 수 있는 html태그를 리턴해주는 함수이다.
 * 
 * data : 배열 데이터를 입력
 * 
 */
export function pagingComponent(data, showAmount=15 ) {

    // const data = data;
    // const [idx, setIdx] = useState(1);
    // cosnt [pagingData, setPagingData] = useState([]);
    // const maxPage = maxPage(data, showAmount);

    
    // for(let i = (idx-1)*showAmount; i < idx*showAmount; i++){
        
    // }


    return(
        <div className={PagingDesign.pagingContainer}>
            <button>이전</button>
            <p className={PagingDesign.pagingCounter}>
                <input type="number" min={1} value={1} /><label> / {maxPage(data, showAmount)}</label>
            </p>
            <button>다음</button>
        </div>
    );
}