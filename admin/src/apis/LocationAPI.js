import location from "../data/marker-data.json";
import { getAttraction } from "../modules/LocationModule";
import {setMarkers} from "../modules/MarkersModule"
// export function CallLocationAPI() {

//     return location;
// }


export const CallLocationAPI = () => {

    const url = `http://localhost:8080/api/v1/attraction/list`;

    return async function callMarkers(dispatch, getState){

        const result = await fetch(
            url,
            {
                method:"GET",
                headers: {"Accept": "application/json"}
            }
        ).then(response => response.json())
            .then(res => res.result);

        dispatch({type:setMarkers, payload: result});
        dispatch({type:getAttraction, payload:result});
    }
}