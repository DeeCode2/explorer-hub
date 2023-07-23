import React, {useRef} from "react";
import styled from "styled-components";
import {places} from "../database.js";

const Section = styled.section`
    //border: solid red;
    margin: 5em 2em 0 2em;
    padding: 1.5em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    @media only screen and (min-width: 768px) {
        margin: 5em 5em 0 5em;
        height: 65vh;
    }

    

    #options-wrapper {
        //border: solid blue;
        display: flex;
        
        // @media only screen and (min-width: 900px) {
        //     display: flex;
        // }

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

const Button = styled.button`
    padding: 1em;
    background-color: seagreen;
    border: none;
    cursor: pointer;
    border-radius: .3em;
`

const SecondaryBtn = styled(Button)`
    background-color: transparent;
    border: solid 1px seagreen;
    margin-left: 1em;
`

const ResultWrapper = styled.div`
    //border: solid pink;
    //margin: 1.5em 0;
    
    @media only screen and (min-width: 768px) {
        margin: 0;
    }

    #img-wrapper {
        //border: solid orange;
        width: 100%;
        overflow: hidden;
        border-radius: .3em;
        aspect-ratio: 1/.65;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

const ButtonWrapper = styled.div`
    margin-top: 2em;
    display: flex;
    //border: solid blue;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        justify-content: flex-start;
    }
`


const Filters = () => {

    //function that finds selected options
    function checkSelected(optionsArr) {
        let selectedOptions = [];
        //loop over the array and check if any are selected
        for (let i = 0; i < optionsArr.length; i++) {
            if (optionsArr[i].checked == true) {
                selectedOptions.push(optionsArr[i].id)
            }
        }

        //if an otion was selected the length of the new array should be 1
        if (selectedOptions.length == 1) {
            return selectedOptions;
        } else {
            //if an option was not selected then the new array should be empty
            //loop over the array and add selected of the possible options to the selectedArray
            for (let j = 0; j < optionsArr.length; j++) {
                selectedOptions.push(optionsArr[j].id);
            }
            return selectedOptions
        }
        
    }
    
    //function to filter items and return a place
    const handleFilter = (e) => {
        e.preventDefault();

        //array of all possible options will be used to compare to the list of places
        let selectedOptions = [
            ...checkSelected(Array.from(document.getElementsByName('location-type'))),
            ...checkSelected(Array.from(document.getElementsByName('climate'))),
            ...checkSelected(Array.from(document.getElementsByName('distance'))),
        ];

        //filter array of places
        let filteredPlaces = places.filter((place) => {
            return selectedOptions.includes(place.locationType) && selectedOptions.includes(place.climateType) && selectedOptions.includes(place.distanceType)
        })

        console.log(filteredPlaces)
    }

    return (
        <Section>
            
            <div id="filter-wrapper">
            <h2>Where do you want to go?</h2>
                <div id="options-wrapper">
                    
                    <div className="option">
                        <h3>TYPE</h3>

                        <div className="input-group">
                            <input type="radio" name="location-type" id="city"/>
                            <label for="city">City</label>    
                        </div>
                        

                        <div className="input-group">
                            <input type="radio" name="location-type" id="remote"/>
                            <label for="remote">Remote</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="location-type" id="nature"/>
                            <label for="nature">Nature</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="location-type" id="adventure"/>
                            <label for="adventure">Adventure</label>    
                        </div>
                    </div>

                    <div className="option">
                        <h3>CLIMATE</h3>

                        <div className="input-group">
                            <input type="radio" name="climate" id="hot"/>
                            <label for="hot">Hot</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="climate" id="cold"/>
                            <label for="cold">Cold</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="climate" id="temperate"/>
                            <label for="temperate">Temperate</label>    
                        </div>
                    </div>

                    <div className="option">
                        <h3>DISTANCE</h3>

                        <div className="input-group">
                            <input type="radio" name="distance" id="long"/>
                            <label for="long">Long</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="distance" id="medium"/>
                            <label for="medium">Medium</label>    
                        </div>

                        <div className="input-group">
                            <input type="radio" name="distance" id="short"/>
                            <label for="short">Short</label>    
                        </div>
                    </div>
                </div>
                <ButtonWrapper>
                    <Button type="button" onClick={handleFilter}>Find some inspo</Button>
                    <SecondaryBtn type="button">Clear filters</SecondaryBtn>
                </ButtonWrapper>  
            </div>
            
            <ResultWrapper>
                <div id="img-wrapper">
                    <img src="https://images.unsplash.com/photo-1526893381913-e311045b8064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"/>
                </div>
            </ResultWrapper>
        </Section>
    )
}

export default Filters;

//clear filters - grab all radio buttons and loop over them to deselect them
