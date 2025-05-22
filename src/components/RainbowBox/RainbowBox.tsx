import React, { ReactNode } from 'react';
import styles from './RainbowBox.module.less';

export interface RainbowBoxProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const RainbowBox: React.FC<RainbowBoxProps> = ({ 
  children, 
  className = '',
  style = {}
}) => {
  return (
    <div className={`${styles.box} ${className}`} style={style}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};