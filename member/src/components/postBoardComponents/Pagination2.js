import { useState } from "react";

const createArr = (n) => {
    const iArr = new Array(n);
    for(var i = 0; i < n; i++) {
        iArr[i] = i + 1;
    }
    return iArr;
}

function Pagination2({ maxPage, pageLimit }) {


    const [blockNum, setBlockNum] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const v = Number (blockNum * pageLimit);
    const iArr = createArr(Number(maxPage));
    let pArr = iArr.slice(v, Number(pageLimit) + v);

    const firstPage = () => {
        setBlockNum(0);
        setCurrPage(1);
    }

    const lastPage = () => {
        setBlockNum(Math.ceil(maxPage/pageLimit) - 1);
        setCurrPage(maxPage);
    }

    const prevPage = () => {
        if(currPage <= 1)
            return;
        if((currPage - 1) <= pageLimit * blockNum) {
            setBlockNum(n => n-1);
        }
        setCurrPage(n => n -1);
    }

    const nextPage = () => {
        if(currPage >= maxPage)
            return;
        if(pageLimit * Number(blockNum + 1) < Number(currPage + 1)) {
            setBlockNum(n => n + 1);
        }
        setCurrPage(n => n + 1);
    }

    return (
        <div>
            <button onClick = { firstPage }>&lt;&lt;</button>
            <button onClick = { prevPage }>&lt;</button>

        <>
            {
                pArr.map(n => (
                    <button>
                        {n}
                    </button>
                ))
            }
        </>
            <button onClick = { nextPage }>&gt;</button>
            <button onClick = { lastPage }>&gt;&gt;</button>
        </div>
    );

}

export default Pagination2;