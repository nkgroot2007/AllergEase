import "./symptoms.css";
import { React, useState } from "react";


export default function Symptoms() {
    const [data, setData] = useState(" ");
    function getData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"Symptoms":document.getElementById("textArea").value})
        };
        var t = document.getElementById("comments");
        fetch('https://realisticspecializedutility.shleshsakpal1.repl.co/symptoms', requestOptions)
            .then(response => response.json())
            .then(dat => {
                console.log(dat.comments);
                setData(dat);
            });
        
        
    }
    return (
        
        <div className="Symptoms">

            <div class="top">
                <textarea
                placeholder="Please type your symptoms, recent foods you have consumed, and any allergies that you KNOW of."
                id="textArea"
                className="texbx"
                rows="20"
                cols="60"
                />
            </div>
            <div class="submit bt">
                <button onClick={getData} className="bt">Confirm</button>
            </div>


            <div>
                <p className="hero-typer">Diagnosis & Recommendations:</p>
            </div>
            <div className="right">
                <p className="subheadingtwo comments" id="comments">{data.comments}</p>
            </div>
        </div>
        
    )
}