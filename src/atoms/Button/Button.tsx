import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string | null;
  type?: ButtonType;
  title?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'custom'; // Define different variants here
}

const Button = (props: Props) => {
  const getVariantStyles = (variant: Props['variant']) => {
    switch (variant) {
      case 'primary':
        return 'w-[305px] h-[63px] px-52 py-18 gap-[18px] rounded-tl-9 bg-green-400';
      case 'secondary':
        return ''; // Define secondary variant styles here
      case 'custom':
        return ''; // Define custom variant styles here
      default:
        return ''; // Default styles
    }
  };

  const variantStyles = props.variant ? getVariantStyles(props.variant) : '';

  return (
    <button
      onClick={props.handleClick}
      className={` ${props.className} ${variantStyles}`}
      type={props.type}
      title={props.title}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
