import dashStyle5 from './dash.module.css';
import bulIssue from '../../data/bulletin-info.json';

function ReportSubmit() {

    return (
      <>
        <h3>신고 접수 건수</h3>
        <span className={ dashStyle5.spanCon }>
        <div className={ dashStyle5.report1 }>
            <h4>Today</h4>
            <h1 className={ dashStyle5.report2 }>{bulIssue.length}</h1>
        </div>
        <div className={ dashStyle5.report1 }>
            <h4>미처리 신고</h4>
            <h1 className={ dashStyle5.report2 }>{bulIssue.length}</h1>
        </div>
        </span>
        <br/><br/>
        <h3>신고관리{'>'}</h3>
      </>    
    )
}

export default ReportSubmit;