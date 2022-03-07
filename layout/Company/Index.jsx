import styled from "styled-components";
import breackpoints from "../../styles/breackpoints";
import colors from "../../styles/colors";
import { getAdaptiveSize } from "../../styles/helpers"; 

import CompanyContentSection from "./CompanyContentSection";
import CompanyList from "./CompanyList";

const Company = styled.div`

    display: flex;
    width: 100%;
    margin-bottom: ${getAdaptiveSize(40, 140)};

    ${CompanyContentSection} {

        h1 {
            font-weight: 500;
            font-size: ${getAdaptiveSize(40, 84)};
            line-height: 100%;
            color: ${colors.color1};
            margin-bottom: ${getAdaptiveSize(30, 80)};
            padding-left: ${getAdaptiveSize(30, 80)};
        }

        p {
            font-weight: 300;
            font-size: ${getAdaptiveSize(16, 25)};
            line-height: 160%;
            color: ${colors.color1};
            padding: ${getAdaptiveSize(25, 50)} ${getAdaptiveSize(30, 80)};
            border-top: 1px solid ${colors.color2};
        }

    }
    

    .img-container {
        width: calc(100% - (880/1920 * 100%));
        height: inherit;

        img {
            object-fit: contain;
        }
    }

    .img-container:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        opacity: 0.3;
    } 


    @media(max-width: ${breackpoints.xs}) {

        ${CompanyContentSection} {
            h1 {
                line-height: 120%;
            }

            p {
                padding-bottom: 60px;
                padding-top: 0;
                border: none;
            }
        }
    }

    @media(max-width: ${breackpoints.xga}) {
        flex-direction: column;

        ${CompanyContentSection} {
            width: 100% !important; 
        }

        .img-container {
            width: 100% !important;
            height: calc(100vw / 1.28);

            img {
                height: 100%;
            }
        }
    }

    @media(min-width: ${breackpoints.fhd}) {
        
        margin-bottom: 140px;

        ${CompanyContentSection} {
            
            padding-top: 240px;

            ul {
                padding-left: 80px;
                
                a {
                    font-size: 14px;
                }
            }

            h1 {
                font-size: 84px;
                margin-bottom: 212.6px; 
                padding-left: 80px;
            }

            p {
                font-size: 25px;
                padding: 50px 80px;
            }
        }
    }
`

const Index = ({ links, title, text, src, className }) => {

    return (
        <Company className={className}>
            <CompanyContentSection>
                <CompanyList>
                    {links.map(({id, href, text}) => {
                        return <li key={id}><a href={href}>{text}</a></li>
                    })}
                </CompanyList>
                <h1>{title}</h1>
                <p>{text}</p>
            </CompanyContentSection>
            <div className="img-container">
                <img src={src} alt="изображение"/>
            </div>
        </Company>
    )
}

export default Index