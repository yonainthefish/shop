import {
  StyleInput,
  StyleLabel,
} from 'components/common/Userinput/UserInputStyeld';

export default function UserInput({
  type,
  onChange,
  disabled,
  value,
  minLength,
  maxLength,
  min,
  max,
  id,
  placeholder,
  pattern,
  required,
  onKeyDown,
  onWheel,
  children,
  onBlur,
}) {
  return (
    <>
      <StyleLabel htmlFor={id}>{children}</StyleLabel>
      <StyleInput
        type={type}
        onChange={onChange}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        onBlur={onBlur}
        disabled={disabled}
      />
    </>
  );
}
