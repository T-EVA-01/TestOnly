import styled from "styled-components";
import colors from '../../styles/colors';
import breakpoints from "../../styles/breackpoints";
import Logo from '../Logo/Index';

const Header = styled.header`

    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 1920px;
    display: flex;
    padding: 30px 0 0 0;
    /* background: ${colors.color3}; */

    nav {
        display: flex;
        align-items: center;
        width: calc(100% - (880/1920 * 100%));

        @media (max-width: ${breakpoints.wxgl}) {
            display: none;
        }

        ul {
            width: 100%;
            display: flex; 
            justify-content: space-between;

            padding-left: calc(40px + (80 - 40) * ((100vw - 1366px) / (1920 - 1366)));
            padding-right: calc((100px + (160 - 100) * ((100vw - 1366px) / (1920 - 1366))));

            a {
                font-family: Gilroy;
                letter-spacing: 0.1em;
                font-size:  calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
                line-height: 100%;
                color: #F6F6F6;
                text-transform: uppercase;
                text-decoration: none;

                opacity: 0.5;
                transition: opacity cubic-bezier(0.23, 1, 0.320, 1);
            }

            a:hover {
                opacity: 1;
            }
        }
    }

`

const Index = ({logo, links}) => {

    return (
        <Header>
            {/* <div class="logo-container">
                <div class="logo-wrapper">
                    <img src={logo.icon} alt="logo"/>
                    <p>{logo.title}</p>
                </div>
            </div> */}


            <Logo logo={logo}/>

            <nav>
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.id}><a href="/">{link.text}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </Header>
    )

}

export default Index