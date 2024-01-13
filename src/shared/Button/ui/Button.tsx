import { memo, ReactNode } from 'react';
import cls from './button.module.css';
import classNames from 'classnames';

export const Button = memo(
  ({
    children,
    type,
    style,
  }: {
    children: ReactNode;
    type: 'primary' | 'secondary';
    style?: React.CSSProperties;
  }) => {
    return (
      <button style={style} className={classNames(cls.button, cls[type])}>
        {children}
      </button>
    );
  },
);
