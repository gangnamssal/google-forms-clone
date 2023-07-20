/** @jsxImportSource @emotion/react */
import { Theme, css, useTheme, keyframes } from '@emotion/react';

export default function DivLine({ isActive, widthLength = 92 }: IDivLineProp) {
  const theme: Theme = useTheme();
  return (
    <>
      {isActive ? (
        <div css={divLineCss.activeContour(theme, widthLength)}></div>
      ) : (
        <div css={divLineCss.contour(theme, widthLength)}></div>
      )}
    </>
  );
}

interface IDivLineProp {
  isActive: boolean;
  widthLength?: number;
}

const divLineCss = {
  contour: (theme: Theme, widthLength: number) =>
    css({
      width: `${widthLength}%`,
      height: '1px',
      backgroundColor: `${theme.colors.contour}`,
      marginBottom: '10px',
    }),

  activeContour: (theme: Theme, widthLength: number) =>
    css({
      width: `${widthLength}%`,
      height: '2px',
      backgroundColor: `${theme.colors.purple}`,
      marginBottom: '10px',
      animationName: `${slowShow}`,
      animationDuration: '0.5s',
    }),
};

const slowShow = keyframes`
 0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 92%;
  }
`;
