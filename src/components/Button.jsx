import { FaAndroid } from 'react-icons/fa';

function Button({ text, variant }) {
  const classes = variant === 'primary'
    ? 'download-btn'
    : 'learn-btn';

  return (
    <div style={{ textAlign: 'left' }}>
      <a
        href="https://arielrosasc.github.io/landing_page_appAgua/assets/apk/FIE_water_consumption_v1.apk"
        download
        style={{ textDecoration: 'none' }}
      >
        <button className={classes}>
          <FaAndroid className="icon" />
          <span>{text}</span>
        </button>
      </a>

      <p style={{ marginTop: '20px' }}>
        Developed by{' '}
        <a
          href="https://github.com/arielrosasc"
          target="_blank"
          style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}
        >
          @arielrosasc
        </a>{' '}
        &{' '}
        <a
          href="https://github.com/MartinFits"
          target="_blank"
          style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}
        >
          @MartinFits
        </a>
      </p>
    </div>
  );
}

export default Button;
