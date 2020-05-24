import React from 'react'
import classes from './MenuToggle.module.css'
import Drawer from '../Drawer/Drawer'


const MenuToggle = props => {

  const cls = [
    classes.MenuToggle,
    'fa',
  ]

  if( props.isOpen){
    cls.push('fa-times');
    cls.push(classes.open)
  }else{
    cls.push('fa-bars')
  }
  
   

  return(
    <div>
      <Drawer />
      <i 
        className={cls.join(' ')}
        onClick={props.onToggle}
      />
    </div>
  )
  
  
}

export default MenuToggle; 