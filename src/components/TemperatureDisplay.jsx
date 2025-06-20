import React from "react";
function TemperatureDisplay ({temperature}) {
    let msj = "";
    let color = "";

    if (temperature < 15){
        msj = "Hace frio!"
        color = "blue"
    }else if(temperature <=25){
        msj = "Temperatura agradable"
        color = "green"
    }else{
        msj = "Hace calor!"
        color ="red"
    }

    return(
        <div>
            <h2 style={{color}}>{temperature}ºC</h2>
            <p>{msj}</p>
        </div>
    )
}

export default TemperatureDisplay;