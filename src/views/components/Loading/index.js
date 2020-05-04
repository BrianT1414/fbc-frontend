import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Loading = (props) => {
  return (
    <div 
      className={props.classes.background} 
      style={{ 
        display: props.show ? 'block' : 'none', 
        position: 'absolute', 
        ...props.styles
      }}
    >
      <div className={props.classes.circle}>
        <CircularProgress size={props.size} thickness={props.thickness} />
      </div>
    </div>
  );
}

export default withStyles(styles)(Loading);
