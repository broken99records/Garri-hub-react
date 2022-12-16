import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/istockphoto-1155123594-612x612_adobe_express.svg')}
            alt="Open"
            border-radius={50}
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;