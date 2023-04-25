import bulIssue from "../data/bulletin-info.json";
import {getBulIssues} from "../modules/BulletinIssueModule"

const bulletinURL = `http://localhost:8080/api/v1/bulletin/list`;

export const CallBulIssueAPI = () => {

    return async function (dispatch){

        const bulletin = await fetch(
            bulletinURL,
            {
                method:"GET",
                headers: {"Accept": "application/json"}
            }
        )
            .then(response => response.json())
            .then(res => res.result);

        dispatch({type:getBulIssues, payload: bulletin});
    }
}