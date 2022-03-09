import styled from "styled-components";
import colors from "../../styles/colors";
import { useState } from "react";

const active = {
    after: `
        top: 5px;
        transform: rotate(45deg);
        transition: top 300ms ease-in-out, transform 300ms 300ms ease-in-out;
    `,
    before: `
        bottom: 5px;
        transform: rotate(-45deg);
        transition: bottom 300ms ease-in-out, transform 300ms 300ms ease-in-out;
    `
}

const inactive = {
    after: `
        top: 0px;
        transform: rotate(0);
        transition: transform 300ms ease-in-out, top 300ms 300ms ease-in-out;
    `,
    before: `
        bottom: 0px;
        transform: rotate(0);
        transition: transform 300ms ease-in-out, bottom 300ms 300ms ease-in-out;
    `
}

const MenuBurger = styled.div`

        height: ${({ isTextVisible }) => isTextVisible ? "80px" : "unset"};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        margin-top: ${({ isTextVisible }) => isTextVisible ? "45px" : "unset"};

        .burger {
            width: 30px;
            height: 12px;
            position: relative;

            span::after, span::before {
                content: "";
                position: absolute;
                height: 2px;
                width: 100%;
                background: ${({ isTextVisible }) => isTextVisible ? colors.black : colors.color1};;
            }

            span::after {
                ${({burgerActive}) => burgerActive ? active.after : inactive.after}
            }

            span::before {
                ${({burgerActive}) => burgerActive ? active.before : inactive.before}
            }
        }

        p {
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: ${colors.color5};
            transform: rotate(90deg);
        }
`

const Index = ({ className, isTextVisible }) => {

    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <MenuBurger  
            className={className}
            burgerActive={burgerActive}
            isTextVisible={isTextVisible}
        >
            <div 
                className="burger"
                onMouseEnter={() => setBurgerActive(true)}
                onMouseLeave={() => setBurgerActive(false)}
            >
                <span></span>
            </div>
            {isTextVisible ? <p>меню</p> : ''}
        </MenuBurger>
    )

}

export default Index 