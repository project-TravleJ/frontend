import dashStyle4 from './dash.module.css';

function RequestFix() {

    return (
      <>
        <h3 className={ dashStyle4.request2 }>장소 수정 요청</h3>
        <div className={ dashStyle4.request1 }>
            <h4>Today</h4>
            <h1 className={ dashStyle4.request3 }>{13}</h1>
            <h3>코스관리{'>'}</h3>
        </div>
      </>  
    )
}

export default RequestFix;