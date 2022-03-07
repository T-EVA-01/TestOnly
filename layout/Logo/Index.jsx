import styled from "styled-components";
import colors from "../../styles/colors";
import breackpoints from '../../styles/breackpoints';
import { getAdaptiveSize } from "../../styles/helpers";

const Logo = styled.div`

    width: calc(880/1920 * 100%);

    div {
        padding-left: ${getAdaptiveSize(30, 80)};
        display: flex;
        align-items: center;

        img {
            width: ${getAdaptiveSize(20, 39)};
        }

        p {
            margin-left: 20px; 
            text-transform: uppercase;
            letter-spacing: .1em;
            font-family: Gilroy;
            font-size:  ${getAdaptiveSize(12, 14)};
            line-height: 100%;
            color: ${colors.color1};
        }
    }

    @media(min-width: ${breackpoints.fhd}) {
        
        div {

            padding-left: 80px;

            img {
                width: 39px;
            }
            
            p {
                font-size:  14px;
            }
        }
        
    }

`

const Index = ({ logo, className }) => {

    return (
        <Logo className={className}>
            <div>
                <img src={logo.icon} alt="logo"/>
                <p>{logo.title}</p>
            </div>
        </Logo>
    )
}

export default Index;