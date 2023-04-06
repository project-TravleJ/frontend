import { useSelector} from "react-redux";

export function SearchReport(reporter, reportee, reportDate, reportStatus) {
    // const reporter = reporter;
    // const reportee = reportee;
    // const reportDate = reportDate;
    // const reportStatus = reportStatus;
    const data = useSelector(store => store.report); 
    
    const filteredReports = SearchReport(reporter, reportee, reportDate, reportStatus);
    console.log(filteredReports);
    
    // const dispatch = useDispatch();

    console.log(data);

    const result =  data.filter((data) => {
        return (!reporter === '')? data.reporter.match(reporter): data
        && (!reportee === '')? data.reportee.match(reportee): data
        && (!reportDate ==='')? data.reportDate.match(reportDate): data
        && (!reportStatus === [true, true, true]
            || reportStatus === [false, false, false])?data:(data.status == 0
                                                            ||data.status == 1
                                                            ||data.status == 2
            );
    });

    return result;

}
    



