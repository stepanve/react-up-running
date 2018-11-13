/* @flow */
import classNames from 'classnames';
import React, {PropTypes} from 'react';

type Props = {
  href: ?string,
  className: ?string
}

const Button = (props: Props) => 
  props.href
    ? <a {...props} className={classNames('Button', props.className)}/>
    : <button {...props} className={classNames('Button', props.className)}/>

// const Button = (props: Object) => 
//   props.href
//     ? <a {...props} className={classNames('Button', props.className)}/>
//     : <button {...props} className={classNames('Button', props.className)}/>


// Button.propTypes = {
//   href: PropTypes.string,
// };

export default Button

