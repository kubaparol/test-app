import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {Link} from 'react-router-dom'


const Menu = ({ open, items, ...props }) => {
  
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        {items.map(item => {
          return (
            <Link key={item.id} to={item.to}>{item.text}</Link>
          )
        })}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;