import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({quote, name}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0});
  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});
  }, [quote])
  return (
    <>
        <blockquote 
          className="blockquote text-end"
          style={{display: 'flex'}}
        >
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{name}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
 
}
Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }