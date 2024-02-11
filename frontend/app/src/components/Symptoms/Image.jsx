import "./Image.css";
import { React, useState } from "react";

export default function Symptoms() {
    const [data, setData] = useState("");
    const [image, setImage] = useState(null);
    const [allergyInfo, setAllergyInfo] = useState("");

    function getData() {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("symptoms", document.getElementById("textArea").value);
        formData.append("allergyInfo", allergyInfo);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

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
                    placeholder="Please type your symptoms, recent foods you have consumed"
                    id="textArea"
                    className="texbx"
                    rows="10"
                    cols="60"
                />
            </div>

            <div class="top">
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>

            <div class="top">
                <textarea
                    placeholder="Please input any allergy information you have"
                    value={allergyInfo}
                    onChange={(e) => setAllergyInfo(e.target.value)}
                    className="texbx"
                    rows="5"
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

