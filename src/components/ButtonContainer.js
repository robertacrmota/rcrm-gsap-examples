import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { useEffect } from "react";

const useStyles = makeStyles(theme => ({
    containerButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: '50px',
        },
    },
}));

function ButtonContainer(props) {
    const styles = useStyles();
    
    return (
        <div className={styles.containerButton}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => props.tl.play()}>Play</Button>
                <Button onClick={() => props.tl.pause()}>Pause</Button>
                <Button onClick={() => props.tl.reverse()}>Reverse</Button>
                <Button onClick={() => props.tl.restart()}>Restart</Button>
            </ButtonGroup>
        </div>
    );
}

export default ButtonContainer;