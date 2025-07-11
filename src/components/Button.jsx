function Button({ text, variant }) {
  const classes = variant === 'primary'
    ? 'download-btn'
    : 'learn-btn';

  return (
    <button className={classes}>{text}</button>
  );
}

export default Button;
