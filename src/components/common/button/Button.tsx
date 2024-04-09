import { WhiteButton, BaseButton } from 'components/common/button/ButtonStyled';

export default function Button({
  variant = 'basic',
  type = 'button',
  ...props
}) {
  const button = {
    basic: BaseButton,
    white: WhiteButton,
  };

  const SelectedButton = button[variant] || BaseButton;

  return <SelectedButton type={type} {...props} />;
}
