import React from "react";
function HistoryList({history}){
    return(
        <div>
            <h3>Historial:</h3>
            <ul>
                {history.map((entry, index)=>(
                    <li key={index}>
                        [{entry.time}] : {entry.temp}ºC
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryList;
