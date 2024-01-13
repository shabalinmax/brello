import { memo } from 'react';
import cls from './input.module.css';
import classNames from 'classnames';

export const Input = memo(({ placeholder }: { placeholder: string }) => {
  return <input className={classNames(cls.input)} placeholder={placeholder} />;
});
