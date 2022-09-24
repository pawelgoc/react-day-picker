import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

/** The props for the {@link Dropdown} component. */
export interface DropdownProps {
  /** The name attribute of the element. */
  name?: string;
  /** The caption displayed to replace the hidden select. */
  caption?: React.ReactNode;
  children?: React.SelectHTMLAttributes<HTMLSelectElement>['children'];
  className?: string;
  ['aria-label']?: string;
  style?: React.CSSProperties;
  /** The selected value. */
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

/**
 * Render a styled select component – displaying a caption and a custom
 * drop-down icon.
 */
export function Dropdown(props: DropdownProps): JSX.Element {
  const { onChange, value, children, caption, className, style } = props;
  const {
    components: { IconDropdown },
    ...dayPicker
  } = useDayPicker();

  return (
    <div className={className} style={style}>
      <span className={dayPicker.classNames.vhidden}>
        {props['aria-label']}
      </span>
      <select
        name={props.name}
        aria-label={props['aria-label']}
        className={dayPicker.classNames.dropdown}
        style={dayPicker.styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div
        className={dayPicker.classNames.caption_label}
        style={dayPicker.styles.caption_label}
        aria-hidden="true"
      >
        {caption}
        {
          <IconDropdown
            className={dayPicker.classNames.dropdown_icon}
            style={dayPicker.styles.dropdown_icon}
          />
        }
      </div>
    </div>
  );
}
