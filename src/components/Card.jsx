import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    border: solid 1px lightgrey;
    padding: 1em;
    border-radius: .3em;
    aspect-ratio: 1/1.2;
    display: flex;
    flex-direction: column;
    max-width: 300px;

    .card-img-wrapper {
        overflow: hidden;
        //position: relative;
        aspect-ratio: 1/.7;
        border-radius: .3em;
    }

    img {
        //border: solid red;
    
        height: 100%;
        width: 100%;
    }

    h3 {
        font-size: 1.1rem;
    }

    p {
        margin: .5em 0;
    }
`

const DetailWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: solid blue;
    margin-top: auto;

    ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        // /border: solid pink;
        

        li {
            background-color: lightgrey;
            padding: .3em .6em;
            border-radius: 3em;
            //margin-top: .5em;
            margin-right: .3em;
        }
    }

    #icon {
        //border: solid red;
        aspect-ratio: 1/1;
        height: 30px;
        //border-radius: 50%;
        //background-color: grey;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 90%;
        }
    }

`

const Card = (props) => {
    return (
        <CardWrapper className="card">
            <div className="card-img-wrapper">
                <img src={props.image}/>    
            </div>
            
            <h3>{props.location}</h3>
            <p>{props.description}</p>
            <p>Visited: No</p>
            <DetailWrapper>
                <ul>
                    <li>{props.locationType}</li>
                    <li>{props.climateType}</li>
                    <li>{props.distanceType}</li>
                    {/* {
                        props.tags.map((tag) => {
                            return (
                                <li className="tag">{tag}</li>
                            )
                        })
                    } */}
                </ul>

                <div
                    id="icon"
                    onClick={(e) => console.log(e.target)}
                >
                    <img src="https://www.svgrepo.com/show/521753/menu.svg"/>
                </div>  
            </DetailWrapper>
            
        </CardWrapper>
    )
}

export default Card;