import React from 'react';

// Styles
import './loader.scss';

export default function Loader(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div
      className={`loader-container fadeOut ${!props.show ? 'cf-hide' : ''}`}
    ></div>
  );
}
