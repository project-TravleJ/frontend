
import BulletinManage from "./BulletinManage";
import DashMember from "./DashMember";
import ReportSubmit from "./ReportSubmit";
import RequestFix from "./RequestFix";
import VisitMem from "./VisitMem";
import dashStyle from "./dashStyle.module.css";

function Dashboard() {

    return(
        <div className={dashStyle.container}>
            <div className={dashStyle.top}>
                <p>
                    <DashMember/>
                </p>
                <p>
                    <VisitMem/>
                </p>
            </div>
            <div className={dashStyle.bot}>
                <p>
                    <BulletinManage/>
                </p>
                <p>
                    <RequestFix/>
                </p>
                <p>
                    <ReportSubmit/>
                </p>
            </div>
        </div>
    );
}

export default Dashboard;

