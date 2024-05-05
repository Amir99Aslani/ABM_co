import React, {Component, useCallback, useRef, useState} from 'react'
import Mapir from 'mapir-react-component';
import '../css/maping.css';
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import {FaLongArrowAltLeft} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {FaCheck} from "react-icons/fa";
import {GrClose} from "react-icons/gr";

// import 'mapir-react-component/dist/index.css';


function Maping(props) {

    const Map = Mapir.setToken({
        transformRequest: url => {
            return {
                url: url,
                headers: {
                    "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUxNmI4ZjE1NTUyMDVhYmU3MjUyZGRmOWM2N2M4Mzk4OTlkMDAwYzI0ZTI1ODdlZDEwMzQ3NTJkMmU4YzdjZTA5NWQwZWFhOWY0ZTczMDNiIn0.eyJhdWQiOiIyNzIyNSIsImp0aSI6ImUxNmI4ZjE1NTUyMDVhYmU3MjUyZGRmOWM2N2M4Mzk4OTlkMDAwYzI0ZTI1ODdlZDEwMzQ3NTJkMmU4YzdjZTA5NWQwZWFhOWY0ZTczMDNiIiwiaWF0IjoxNzE0OTExMjc1LCJuYmYiOjE3MTQ5MTEyNzUsImV4cCI6MTcxNzUwMzI3NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.q4PGtVHXa0PlRw56nmkX1zjvTKIEeNbG4PSqd0qJHyRg96_w6VrcC50h375oc2xx3DCgEyxsiHk8sPd1o4M2SYlAy586pmpXVy0ui5jVPBZ7apjmZOG2PxyPQuB60LM4uQPIG8Ejj_XHExzvi3xDa-aKSOpEMwD5y8UvGAr5MQvH2m2DqB4Ygs3CnoRIKINbDdlAwgn_sgxx-lAMrInBaWKuIbj6d8HEgroKLUJ5NlwmBH3qP1693K_4ORptKokVz1XDhh0olOanDd6_tp50KBAbvfh7Id5SJapEpt_LDP6ApAKPPDvAFY0JhWS4Pp43jNSWk1jRRegCcT-Ry_L6JQ', //Mapir api key
                    "Mapir-SDK": "reactjs"
                }
            };
        }
    });

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [coordination, setCoordination] = useState([59.51295, 36.31090]);

    const locRef = useRef("");
    const howToServe = async (coordinate) => {
        locRef.current = coordinate;
    }

    const getMapData = useCallback(async (e) => {
        setIsLoading(true);
        var url = `https://map.ir/reverse/no?lat=${e.current.lat}&lon=${e.current.lng}`;
        setCoordination([e.current.lng, e.current.lat]);
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUxNmI4ZjE1NTUyMDVhYmU3MjUyZGRmOWM2N2M4Mzk4OTlkMDAwYzI0ZTI1ODdlZDEwMzQ3NTJkMmU4YzdjZTA5NWQwZWFhOWY0ZTczMDNiIn0.eyJhdWQiOiIyNzIyNSIsImp0aSI6ImUxNmI4ZjE1NTUyMDVhYmU3MjUyZGRmOWM2N2M4Mzk4OTlkMDAwYzI0ZTI1ODdlZDEwMzQ3NTJkMmU4YzdjZTA5NWQwZWFhOWY0ZTczMDNiIiwiaWF0IjoxNzE0OTExMjc1LCJuYmYiOjE3MTQ5MTEyNzUsImV4cCI6MTcxNzUwMzI3NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.q4PGtVHXa0PlRw56nmkX1zjvTKIEeNbG4PSqd0qJHyRg96_w6VrcC50h375oc2xx3DCgEyxsiHk8sPd1o4M2SYlAy586pmpXVy0ui5jVPBZ7apjmZOG2PxyPQuB60LM4uQPIG8Ejj_XHExzvi3xDa-aKSOpEMwD5y8UvGAr5MQvH2m2DqB4Ygs3CnoRIKINbDdlAwgn_sgxx-lAMrInBaWKuIbj6d8HEgroKLUJ5NlwmBH3qP1693K_4ORptKokVz1XDhh0olOanDd6_tp50KBAbvfh7Id5SJapEpt_LDP6ApAKPPDvAFY0JhWS4Pp43jNSWk1jRRegCcT-Ry_L6JQ'
                }
            });

            if (response.status == 200) {
                // console.log(response.data);
                props.onsetLocationData(response.data)
            }


        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, [])

    return (

        <>
            <Mapir
                center={coordination}
                Zoom={[20]}
                Map={Map}
                onMove={(e) => {
                    howToServe(e.getCenter())
                }}
            >
                <div id="center-marker"></div>
            </Mapir>
            <div className="mapHeader">
                <div className="confirmLocationContainer">
                    {/* <button className="BackBtn teal" onClick={() => {
                        window.location.reload()
                    }}>
                        <GrClose />
                    </button> */}

                    {/* <button className="confirmLocation" onClick={() => getMapData(locRef)}>
                        <FaCheck/>
                    </button> */}
                </div>
            </div>

            <div className={`LoadingContainer ${!isLoading && 'noDisplay'}`}>
                <LoadingSpinner/>
            </div>
        </ >
    );
}

export default Maping;