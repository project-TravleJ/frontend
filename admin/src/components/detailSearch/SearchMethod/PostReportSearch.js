

export function search(reporter, reportee, reportDate, reportStatue_0, reportStatue_1, reportStatue_2) {
    const searchData = {
        "reporter" : reporter,
        "reportee" : reportee,
        "reportDate" : reportDate,
        "reportStatus" : [reportStatue_0, reportStatue_1, reportStatue_2]
    }

    console.log(searchData);
    console.log(searchData.reportStatus);
    return searchData;
}