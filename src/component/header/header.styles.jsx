import styled, {css} from  'styled-components';
import { Link } from 'react-router-dom';

//here imported 'css' to apply same styles to different items eg: components and div in our condition.
const OptionsContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`;

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

/*incase of a component - call style like a function and pass the component.
so in the below condition the style will apply to the component 'Link'*/
export const LogoContainer = styled(Link)`
height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
${OptionsContainerStyles}
`;
