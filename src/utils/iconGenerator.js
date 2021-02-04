import { ReactSVG } from 'react-svg';
import styled from 'styled-components/macro';

const iconGenerator = (iconSrc) => ({
  color = null,
  height = null,
  maxHeight = null,
  maxWidth = null,
  width = null,
  id = null,
  className = '',
}) => {
  const ReactSVGStyled = styled(ReactSVG)`
    svg {
      height: ${height || null};
      width: ${width || null};
      max-height: ${maxHeight || null};
      max-width: ${maxWidth || null};
      min-height: 5px;
      min-width: 5px;
      transition: width 0.3s linear 0s, height 0.3s linear 0s;
      justify-content: center;
      align-items: center;
    }

    svg path {
      fill: ${color || ''};
    }
  `;

  return <ReactSVGStyled id={id} src={iconSrc} className={className} />;
};

export default iconGenerator;
