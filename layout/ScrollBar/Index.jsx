import styled from "styled-components";
import colors from "../../styles/colors";
import breackpoints from "../../styles/breackpoints";
import MenuBurger from "../MenuBurger/Index";
import ArrowIcon from "../../public/icons/arrow.svg";

const ScrollBar = styled.div`

    position: absolute;
    right: 0;
    height: 100%;
    background: ${colors.color2};
    width: 80px;
    z-index: 2;

    .down-button {
        position: absolute;
        top: 830px;
        width: 100%;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .down-button__arrow {
            transform: rotate(180deg);
        }

        p {
            width: 143px;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: ${colors.color5};
            transform: rotate(90deg);
        }
    }

    .icon-wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }

    @media(max-width: ${breackpoints.xga}) {
        display: none;
    }

`

const Index = ({ className }) => {

    return(
        <ScrollBar className={className}>
            <MenuBurger
                isTextVisible={true}
            />
            <div className="down-button">
                <p>листать вниз</p>
                <ArrowIcon className="down-button__arrow"/>
            </div>
            <div className="icon-wrapper">
                <ArrowIcon/>
            </div>         
        </ScrollBar>
    )
}

export default Index