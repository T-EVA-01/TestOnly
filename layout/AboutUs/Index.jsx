import styled from "styled-components";
import breackpoints from "../../styles/breackpoints";
import colors from "../../styles/colors";
import { getAdaptiveSize } from "../../styles/helpers";

import AboutUsHead from "./AboutUsHead";
import AboutUsContent from "./AboutUsContent";
import AboutUsListWrapper from "./AboutUsListWrapper";
import AboutUsList from "./AboutUsList";


const AboutUs = styled.div`
    width: 100%;
    margin-bottom: ${ getAdaptiveSize(45, 110) };

    ${AboutUsHead} {

        h1 {
            font-weight: 300;
            font-size: ${ getAdaptiveSize(25, 47)};
            line-height: 150%;
            color: ${colors.black};
        }

        p {
            width: calc(100% * (1200 / 1920));
            font-weight: 300;
            font-size: ${ getAdaptiveSize(16, 25)};
            line-height: 160%;
            color: ${colors.black};
        }
    }

    ${AboutUsContent} {

        .img-container {
            width: calc(100% * (880 / 1920));
        }

        ${AboutUsListWrapper} {

            ${AboutUsList} {

                li:not(:last-child) {
                    margin-bottom: 30px;
                }

                p {
                    font-weight: 300;
                    font-size: ${ getAdaptiveSize(14, 18)};
                    line-height: 180%;
                    color: ${colors.color5};
                }

                li:first-child p {
                    font-weight: 400;
                }

            }

        }
    }

    @media(max-width: ${breackpoints.xs}) {
        
        ${AboutUsHead} {
            
            h1 {
                line-height: 160%;
            
            } 
        }
    }

    @media(max-width: ${breackpoints.xga}) {

        ${AboutUsHead} {

            flex-direction: column;

            h1 {
                margin-bottom: ${ getAdaptiveSize(30, 50) };
            }

            p {
                width: 100%;
            }
            
        }

        ${AboutUsContent} {

            flex-direction: column;

            .img-container {
                width: 100% !important;
                height: calc(100vw / 1.28);
                margin-bottom: 30px;

                img {
                    height: 100%;
                }
            }

            ${AboutUsListWrapper} {
                width: 100% !important;
                height: unset;
            }
        }
    }

    @media(min-width: ${breackpoints.fhd}) {
        
        margin-bottom: 110px;

        ${AboutUsHead} {
            padding-left: 80px;
            padding-right: 160px;
            margin-bottom: 125px;

            h1 {
                font-size: 47px;
            }

            p {
                width: 1200px;
                font-size: 25px;
            }
        }

        ${AboutUsContent} {
            ${AboutUsListWrapper} {
                ${AboutUsList} {
                    padding-left: 80px;
                    padding-right: 160px;

                    p {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`

const Index = ({ title, text, src, items }) => {

    return(
        <AboutUs>

            <AboutUsHead>
                <h1>{title}</h1>
                <p>{text}</p>
            </AboutUsHead>
            
            <AboutUsContent>
                <div className="img-container">
                    <img src={src} alt="изображение"/>
                </div>
                <AboutUsListWrapper>
                    <AboutUsList>
                        {items.map(({text, id}) => {
                            return <li key={id}><p>{text}</p></li>
                        })}
                    </AboutUsList>
                </AboutUsListWrapper>
            </AboutUsContent>

        </AboutUs>
    )
}

export default Index