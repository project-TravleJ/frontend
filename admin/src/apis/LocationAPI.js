import location from "../data/marker-data.json";
import { getAttraction } from "../modules/LocationModule";
import {setMarkers} from "../modules/MarkersModule"
import { PUT_LOCATION } from "../modules/LocationUpdateModule";
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

export const deleteLocationAPI = (location) => {
    
    console.log(location);

    

        const attractionURL = `http://localhost:8080/api/v1/attraction/`+location;

    return async (dispatch, getState) => {
        const result = await fetch(attractionURL,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            }
        ).then(res => res.json());
    };
    
}

export const updateLocationAPI = (attractionId, {form}) =>{

    const resultURL = `http://localhost:8080/api/v1/attraction/+${attractionId}`;

    return async (dispatch, getState) => {
        const result = await fetch(resultURL,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify({
                    attractionName: form.attractionName,
                    attractiondef: form.attractiondef
                })
            }
            ).then(response => response.json())
            .then(response => response.result);

            dispatch({type: PUT_LOCATION, payload: result});
    };
}