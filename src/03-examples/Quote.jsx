import PropTypes from 'prop-types';

export const Quote = ({quote, name}) => {
  return (
    <>
        <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{name}</footer>
        </blockquote>
    </>
  )
 
}
Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }