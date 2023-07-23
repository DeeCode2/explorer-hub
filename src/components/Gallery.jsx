import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";

const Section = styled.section`
    margin: 5em 2em 0 2em;

    @media only screen and (min-width: 768px) {
        margin: 5em 5em 0 5em;
    }
`
const GalleryWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    
`

const Gallery = () => {

    const [allLocations, setAllLocations] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`https://explorer-hub-backend.onrender.com/allLocations`);
        setAllLocations(data);
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <Section>
            <h2>Places I want to go</h2>
            <GalleryWrapper id="location-gallery">
                {allLocations.map((place) => {
                    return (
                        <Card
                            location={place.location}
                            image={place.image}
                            description={place.description}
                            visited={place.visited}
                            locationType={place.locationType}
                            climateType={place.climateType}
                            distanceType={place.distanceType}
                        />
                    )
                })}
            </GalleryWrapper>
        </Section>
    )
}

export default Gallery;

//click on location
//search array for correct info using id
//pull up modal and add info to form input
