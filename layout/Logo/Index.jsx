import styled from "styled-components";
import colors from "../../styles/colors";
import breackpoints from '../../styles/breackpoints';
import { getAdaptiveSize } from "../../styles/helpers";
import LogoIcon from "../../public/icons/Vector 2.1.svg"

const Logo = styled.div`

    width: calc(880/1920 * 100%);

    div {
        padding-left: ${getAdaptiveSize(30, 80)};
        display: flex;
        align-items: center;

        .logo {
            width: ${getAdaptiveSize(28, 39)}; 
            min-width: 28px;
            max-width: 39px;
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
                <LogoIcon className="logo" viewBox="0 0 39 38"/>
                <p>{logo.title}</p>
            </div>
        </Logo>
    )
}

export default Index;