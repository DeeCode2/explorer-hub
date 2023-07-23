import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Section = styled.section`
    border: solid green;
    
`

const Form = styled.form`
    
    max-width: 600px;
    margin: 6em auto;
    padding: 1.5em;
    border: solid 1px lightgrey;
    border-radius: .3em;

    #options-wrapper {
        //margin-top: 1em;
        //border: solid red;
        display: flex;

        .option {
            width: 100%;

            .input-group {

                margin: .5em 0em;

                input {
                    transform: scale(1.2);
                }
    
                label {
                    margin-left: .5em;
                }
            }
        }
    }
`

const FlexInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    label {
        margin-bottom: .5em;
    }

    input {
        padding: 1em;
    }

    select {
        padding: 1em;

    }
`

const NewLocation = () => {

    const [locationName, setLocationName] = useState("");
    const [locationUrl, setLocationUrl] = useState("");
    const [description, setDescription] = useState("");
    const [visited, setVisited] = useState("");
    const [locationType, setLocationType] = useState("");
    const [climateType, setClimateType] = useState("");
    const [distanceType, setDistanceType] = useState("");


    const submitNewLocation = (e) => {
        e.preventDefault();
        
        const config = {
            method: "post",
            url: "https://explorer-hub-backend.onrender.com/newLocation",
            data: {
                locationName,
                locationUrl,
                description,
                visited,
                locationType,
                climateType,
                distanceType
            }
        }

        axios(config)
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
    }

    return (
        <Section>
            <Form>
                <h2>Add a new location</h2>

                <FlexInput className="input-group">
                    <label for="location">Location</label>
                    <input type="text"
                        placeholder="Enter a location"
                        id="location"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                    />
                </FlexInput>

                <FlexInput className="input-group">
                    <label for="location-url">Location image</label>
                    <input type="text"
                        id="location-url"
                        value={locationUrl}
                        placeholder="Add an image URL"
                        onChange={(e) => setLocationUrl(e.target.value)}
                    />
                        
                </FlexInput>

                <FlexInput className="input-group">
                    <label for="description">Description</label>
                    <input type="text"
                        id="description"
                        value={description}
                        placeholder="Describe the destination or why you want to go there"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                        
                </FlexInput>

                <FlexInput className="input-group">
                    <label for="visited">Visited?</label>
                    <select name="visited"
                        id="visited"
                        value={visited}
                        onChange={(e) => setVisited(e.target.value)}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </FlexInput>

                <div id="options-wrapper">
                    
                    <div className="option">
                        <h3>TYPE</h3>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="location-type"
                                id="city"
                                value="city"
                                onChange={(e) => setLocationType(e.target.value)}
                            />
                            <label for="city">City</label>    
                        </div>
                        

                        <div className="input-group">
                            <input
                                type="radio"
                                name="location-type"
                                id="remote"
                                value="remote"
                                onChange={(e) => setLocationType(e.target.value)}
                            />
                            <label for="remote">Remote</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="location-type"
                                id="nature"
                                value="nature"
                                onChange={(e) => setLocationType(e.target.value)}
                            />
                            <label for="nature">Nature</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="location-type"
                                id="adventure"
                                value="adventure"
                                onChange={(e) => setLocationType(e.target.value)}
                            />
                            <label for="adventure">Adventure</label>    
                        </div>
                    </div>

                    <div className="option">
                        <h3>CLIMATE</h3>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="climate"
                                id="hot"
                                value="hot"
                                onChange={(e) => setClimateType(e.target.value)}
                            />
                            <label for="hot">Hot</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="climate"
                                id="cold"
                                value="cold"
                                onChange={(e) => setClimateType(e.target.value)}
                            />
                            <label for="cold">Cold</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="climate"
                                id="temperate"
                                value="temperate"
                                onChange={(e) => setClimateType(e.target.value)}
                            />
                            <label for="temperate">Temperate</label>    
                        </div>
                    </div>

                    <div className="option">
                        <h3>DISTANCE</h3>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="distance"
                                id="long"
                                value="long"
                                onChange={(e) => setDistanceType(e.target.value)}
                            />
                            <label for="long">Long</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="distance"
                                id="medium"
                                value="medium"
                                onChange={(e) => setDistanceType(e.target.value)}
                            />
                            <label for="medium">Medium</label>    
                        </div>

                        <div className="input-group">
                            <input
                                type="radio"
                                name="distance"
                                id="short"
                                value="short"
                                onChange={(e) => setDistanceType(e.target.value)}
                            />
                            <label for="short">Short</label>    
                        </div>
                    </div>
                </div>

                <button type="submit" onClick={(e) => submitNewLocation(e)}>Submit</button>

            </Form>
        </Section>
    )
}

export default NewLocation;