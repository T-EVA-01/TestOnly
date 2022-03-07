import styled from "styled-components";
import colors from "../../styles/colors";
import breakpoints from "../../styles/breackpoints";

const Logo = styled.div`

    width: calc(880/1920 * 100%);

    div {
        padding-left: calc(30px + (80 - 30) * ((100vw - 320px) / (1920 - 320)));
        display: flex;
        align-items: center;

        img {
            width: calc(28px + (39 - 28) * ((100vw - 320px) / (1920 - 320)));
        }

        p {
            margin-left: 20px; 
            text-transform: uppercase;
            letter-spacing: .1em;
            font-family: Gilroy;
            font-size:  calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
            line-height: 100%;
            color: ${colors.color1};
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