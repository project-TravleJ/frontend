import dashStyle2 from './dash.module.css';

function VisitMem() {

    return (
        <div className={ dashStyle2.visitmem }>
            <div className={ dashStyle2.inline }>    
                <h4>전체 방문자 수</h4><h1>{7000}</h1>
            </div>
            <div className={ dashStyle2.inline }>
                <h4>오늘 방문자 수</h4><h1>{70}</h1>
            </div>
        </div>
    )
}

export default VisitMem;
