import styled from "styled-components";

export const NotAvailable = styled.div`
display: none;

    @media (max-width: 300px) {
        display: block;
        width: 100vw;
        height: 100vh;
    
        & h1 {
            color: #FFF;
            font-size: 3rem;
            position: absolute;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @media (max-width: 250px) {
                font-size: 2rem;
            }
        }
    }
`
