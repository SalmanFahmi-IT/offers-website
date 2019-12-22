import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? '#4bd663' : '#0077e2'};
border-radius: ${props => props.primary ? '12px' : '20px'};
color: #fff;
padding: 0.7em 3em;
margin: 0 20px;
border: 0;
`;

export default Button;