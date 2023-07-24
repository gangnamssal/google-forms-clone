/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from '@emotion/react';
import { IToggleSwitchProps } from '../Answer/Modify/BaseModifyForm';

export default function ToggleSwitch<T extends IToggleSwitchProps>(props: T) {
  const theme = useTheme();

  return (
    <div>
      <input
        onChange={props.onChange}
        type='checkbox'
        id={`toggle${props.formListIndex as number}`}
        hidden
        css={toggleSwitchCss.toggleCheck(theme)}
      />
      <label
        htmlFor={`toggle${props.formListIndex as number}`}
        className='toggleSwitch'
        css={toggleSwitchCss.toggleSwitch(props)}>
        <span className='toggleButton' css={toggleSwitchCss.toggleButton(props)}></span>
      </label>
    </div>
  );
}

const toggleSwitchCss = {
  toggleCheck: (theme: Theme) =>
    css({
      '&:checked ~ .toggleSwitch': {
        backgroundColor: '#E1D8F1',
      },

      '&:checked ~ .toggleSwitch .toggleButton': {
        left: 'calc(100% - 21px)',
        backgroundColor: `${theme.colors.purple}`,
      },
    }),

  toggleSwitch: (props: IToggleSwitchProps) =>
    css({
      width: `${props.switchWidth}px`,
      height: `${props.switchHeight}px`,
      display: 'block',
      position: 'relative',
      borderRadius: '30px',
      backgroundColor: '#B9B9B9',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in',
    }),

  toggleButton: (props: IToggleSwitchProps) =>
    css({
      width: `${props.buttonWidth}px`,
      height: `${props.buttonHeight}px`,
      position: 'absolute',
      top: '50%',
      left: '0px',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      backgroundColor: 'white',
      transition: 'all 0.2s ease-in',
      boxShadow: '0px 1px 3px rgba(0,0,0,.4)',
    }),
};
