import styled from 'styled-components';
import colors from '../../styles/colors';
import breackpoints from "../../styles/breackpoints";
import { getAdaptiveSize } from '../../styles/helpers';

const NavBar = styled.nav`

    display: flex;
    align-items: center;
    width: calc(100% - (880/1920 * 100%));

    ul {
        width: 100%;
        display: flex; 
        justify-content: space-between;

        padding-left: ${getAdaptiveSize(40, 80, 1366)};
        padding-right: ${getAdaptiveSize(100, 160, 1366)};;

        a {
            font-family: Gilroy;
            letter-spacing: 0.1em;
            font-size:  ${getAdaptiveSize(12, 14)};
            line-height: 100%;
            color: ${colors.color1};
            text-transform: uppercase;
            text-decoration: none;

            opacity: 0.5;
            transition: opacity ease-in-out;
        }

        a:hover {
            opacity: 1;
        }

    }

    @media (max-width: ${breackpoints.wxgl}) {
            display: none;
    }

    @media (min-width: ${breackpoints.fhd}) {
    
        ul {
            padding-left: 80px;
            padding-right: 160px;

            a {
                font-size:  14px;
            }
        }
    }
`

const Index = ({ links }) => {
    return (
        <NavBar>
            <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}><a href={link.href}>{link.text}</a></li>
                    )
                })}
            </ul>
        </NavBar>
    )
}

export default Index