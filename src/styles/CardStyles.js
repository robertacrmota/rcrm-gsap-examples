import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    card: {
        maxWidth: 300,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    mediaWrapper: {
        overflow: 'hidden'
    },
    media: {
        height: 140
            
    },
    content: {
        textAlign: "left",
        padding: theme.spacing(1),
        "& > p": {
            marginBottom: theme.spacing(2)
        }
    },
    containerAvatar: {
        display: 'flex',
        alignItems: 'center',  
        '& > *:first-child': {
            margin: `0 ${theme.spacing(1)}px`,
            transform: 'scale(1.5)',
            color: '#cecece'
        },
        '& > *': {
            margin: `${theme.spacing(2)}px 0`,
        },
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
          marginLeft: -theme.spacing(1.5)
        }
    }
}));