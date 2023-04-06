import Paging from "./Pagination.module.css";
import { useState } from "react"

function Pagination({ total, limit, page, setPage, blockLimit}) {
    const numPages = Math.ceil(total / limit);
    
    const createArr = (n) => {
        const blockNumArr = new Array(n);
        for (var i = 0; i < n; i++)
        blockNumArr[i] = i + 1;
        return blockNumArr;
    }

    const [blockNum, setBlockNum] = useState(0);

    const blockOffset = Number((blockNum) * blockLimit);
    const blockNumArr = createArr(Number(numPages));
    let blockLimitArr = blockNumArr.slice(blockOffset, Number(blockLimit) + blockOffset);

    const firstPage = () => {
        setBlockNum(0);
        setPage(1);
    }

    const lastPage = () => {
        setBlockNum(Math.ceil(numPages / blockLimit) - 1);
        setPage(numPages);
    }

    const prevPage = () => {
        if (page <= 1)
            return;
        if ((page - 1) <= blockLimit * blockNum) {
            setBlockNum(n => n - 1);
        }
        setPage(n => n - 1);
    }

    const nextPage = () => {
        if (page >= numPages)
            return;
        if (blockLimit * Number(blockNum + 1) < Number(page + 1)) {
            setBlockNum(n => n + 1);
        }
        setPage(n => n + 1);
    }

    const blockStartNum = blockNum * blockLimit + 1;

    return (
        <>
            <div className={Paging.pagination}>
                <button className={Paging.button} onClick={firstPage} disabled={page === 1}>
                    &lt;&lt;
                </button>
                <button className={Paging.button} onClick={prevPage} disabled={page === 1}>
                    &lt;
                </button>
                {blockLimitArr
                    .fill()
                        .map((_, i) => (
                            <button
                                className={Paging.button}
                                key={blockStartNum + i}
                                onClick={() => setPage(blockStartNum + i)}
                                aria-current={page === blockStartNum + i ? "page" : null}
                            >
                                {blockStartNum + i}
                            </button>
                        ))}
                <button className={Paging.button} onClick={nextPage} disabled={page === numPages}>
                    &gt;
                </button>
                <button className={Paging.button} onClick={lastPage} disabled={page === numPages}>
                    &gt;&gt;
                </button>
            </div>
        </>
    );
}

export default Pagination;
