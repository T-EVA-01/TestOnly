import styled from "styled-components";
import breackpoints from "../../styles/breackpoints";
import colors from "../../styles/colors";
import { getAdaptiveSize } from "../../styles/helpers";

import { useState } from "react";

import TransportTypesInformation from "./TransportTypesInformation";
import TransportTypeSection from "./TransportTypeSection";

const Transort = styled.section`

    width: 100%;
    display: flex;
    flex-wrap: wrap;

    h1.transport-title {
        width: 100%;
        font-weight: 300;
        font-size: ${ getAdaptiveSize(25, 47)};
        line-height: 150%;
        color: ${colors.color5};
        padding-left: ${ getAdaptiveSize(30, 80) };
        margin-bottom: ${ getAdaptiveSize(30, 50) };
    }

    .img-container {
        width: calc(100% * (880 / 1920));

        img {
            height: 100%;
            transition: opacity .3s ease-in-out;
        }

        #first-img {
            opacity: ${({ firstImgState }) => firstImgState ? "1" : "0"};
        }

        #second-img {
            opacity: ${({ secondImgState }) => secondImgState ? "1" : "0"};
        }
    }

    ${TransportTypesInformation} {

        ${TransportTypeSection} {
            &:hover {
                background-color: ${colors.color1};
            }

            .wrapper {
                padding-top: 75px;
                padding-left: ${ getAdaptiveSize(30, 80) };

                
                h1 {
                    margin-bottom: 20px;
                    font-weight: 300;
                    font-size: 25px;
                    line-height: 160%;
                    color: ${colors.black};
                }

                li:not(:last-child) {
                    margin-bottom: 10px;
                }

                p {
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 180%;
                    color: ${colors.black};
                }
            }
        }

        ${TransportTypeSection}:last-child {
            h1 {
                span {
                    display: block ;
                }
            }
        }

    }

    @media(min-width: ${breackpoints.fhd}) {
        h1.transport-title { 
            font-size: 47px;
            padding-left: 80px;
        }
    }

    /* убирает блок на ширине ниже 1024  */
    @media(max-width: ${breackpoints.xga}) {
        display: none;
    }

`

const Index = ({ images, title, transportTypes }) => {
    const [firstImgState, setFirstImgState] = useState(true);
    const [secondImgState, setSecondImgState] = useState(false);
    const arrayOfTitleWords = transportTypes[1].title.split(" ");

    return(

        <Transort firstImgState={firstImgState} secondImgState={secondImgState}>
            <h1 className="transport-title">{title}</h1>
            <div className="img-container">
                <img 
                    id="first-img"
                    src={images[0].src} 
                    alt="изображение"
                />
                <img 
                    id="second-img" 
                    src={images[1].src} 
                    alt="изображение"
                />
            </div>
            <TransportTypesInformation>
                <TransportTypeSection
                    onMouseEnter={() => {
                        setFirstImgState(true);
                        setSecondImgState(false)
                    }}
                >
                    <div className="wrapper">
                        <h1>{transportTypes[0].title}</h1>
                        <ul>
                            {transportTypes[0].items.map(item => {
                                return <li key={item.id}><p>{item.text}</p></li>
                            })}
                        </ul>
                    </div>
                </TransportTypeSection>
                <TransportTypeSection
                    onMouseEnter={() => {
                        setFirstImgState(false)
                        setSecondImgState(true)
                    }}
                    onMouseLeave={() => {
                        setFirstImgState(true)
                        setSecondImgState(false)
                    }}
                >
                    <div className="wrapper">
                        <h1>{arrayOfTitleWords[0]}<span>{arrayOfTitleWords[1]}</span></h1>
                        <ul>
                            {transportTypes[1].items.map(item => {
                                return <li key={item.id}><p>{item.text}</p></li>
                            })}
                        </ul>
                    </div>
                </TransportTypeSection>
            </TransportTypesInformation>
        </Transort>
    )
}

export default Index