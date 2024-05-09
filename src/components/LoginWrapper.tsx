import React, { useState, useEffect } from 'react';
import './Login.css';
import SignUp from './SignUp';
import Signin from './Signin';
import Overlay from './Slider_Overlay';

const LoginWrapper: React.FC = () => {
    const [rightPanelActive, setRightPanelActive] = useState<boolean>(false);

    const handleClickSignUpButton = () => setRightPanelActive(true);
    const handleClickSignInButton = () => setRightPanelActive(false);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes gradientAnimation {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            body {
                animation: gradientAnimation 20s ease infinite;
                background: linear-gradient(to right, #0a0f0b, #8a1c35);
                background-size: 200% 200%;
            }

            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="Login">
            <div
                className={`container ${rightPanelActive ? 'right-panel-active' : ''}`}
                id="container"
            >
                <SignUp />
                <Signin />
                <Overlay
                    handleClickSignInButton={handleClickSignInButton}
                    handleClickSignUpButton={handleClickSignUpButton}
                />
            </div>
        </div>
    );
};

export default LoginWrapper;
