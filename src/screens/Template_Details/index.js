import React, {useEffect, useState} from 'react';
import './index.css';
import {IoIosSubway, IoIosCar, IoIosBus, IoIosAirplane} from 'react-icons/io';


function Template_Details() {
// javascript code Here

    return (
        <div className="wrapper">
            
            <header className = "line">
                <h1>Template: </h1>
                <input className = "template-name-input" name = "template-name" value = "Template name"/>
            </header>


            <div className = "line">
                <label className = "blue-text">From:</label>
                <input className="from-to-input" name="from" value="UBC, Vancouver"/>
            </div>
            
            <div className = "line">
                <label className = "blue-text">To:</label>
                <input className="from-to-input" name="to" value="Home, Toronto"/>
            </div>

            <div className = "box">

                <text className="schedule-prompt">Schedule a trip from this template by adding a departure or arrival time</text>

                <div className = "line">
                    <label className = "blue-text">Departure</label>
                    <button>Schedule</button>
                </div>

                <div className = "line">
                    <label className = "blue-text">Arrival</label>
                    <button>Schedule</button>
                </div>
            </div>

            <div className = "line">
                <div className = "segment">
                    <IoIosCar/>
                    <div className = "segment-detail">
                        UBC - YVR <br/>
                        <text className = "segment-transport">Drive</text> 
                    </div>
                </div>
                <text>30 minutes</text>
            </div>

            <hr className="thin"></hr>

            <div className = "line">
                <div className = "segment">
                    <IoIosAirplane/>
                    <div className = "segment-detail">
                        YVR - YYZ <br/>
                        <text className = "segment-transport">Flight</text> 
                    </div>
                </div>
                <text>3 hours</text>
            </div>

            <hr className="thin"></hr>

            
            <div className = "line">
                <div className = "segment">
                    <IoIosBus/>
                    <div className = "segment-detail">
                        YYZ - Home <br/>
                        <text className = "segment-transport">Bus</text> 
                    </div>
                </div>
                <text>30 minutes</text>
            </div>
 
            <button>Add to Trip</button>
        </div>
    );
}

export default Template_Details;