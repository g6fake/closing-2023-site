import { CSSProperties, ReactElement, ReactNode } from 'react';

export function GradientBlock({
  className,
  bottomColor,
  background,
  style,
  children,
}: {
  className?: string;
  bottomColor?: string;
  background?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}): ReactElement {
  const toBottomgradient: CSSProperties = {
    background: `linear-gradient(to bottom, transparent 10%, ${bottomColor || 'transparent'} 100%)`,
    height: '100%',
  };

  const backgrouundStyles: CSSProperties = {
    background: background || 'transparent',
    height: '100%',
  };

  return (
    <div style={backgrouundStyles}>
      <div style={toBottomgradient}>
        <div style={style} className={className}>
          {children}
        </div>
      </div>
    </div>
  );
}
