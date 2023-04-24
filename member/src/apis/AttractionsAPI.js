import {setAttractions} from "../modules/AttractionModule";


export const CallAttractionAPI = () => {

    const url = "http://localhost:8080/api/v1/attraction/list";

    return async function callAttractions(dispatch, getState) {

        const result = await fetch(
            url,
            {
                method: "GET",
                headers: { "Accept": "application/json" }
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({ type:setAttractions, payload: result });
    }
}

export const SearchAttractionAPI = (text) => {

    console.log(text);

    const url = "http://localhost:8080/api/v1/attraction/search?value=";
    return async function searchAttractions(dispatch, getState) {

        const result = await fetch(
            url+text,
            {
                method:"GET",
                headers: { "Accept": "application/json" }
            }
        ).then( data => data.json() )
            .then( data => data.result );

        dispatch({ type: setAttractions, payload: result });
    }
}