import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: "#253053",
      color:'#fff',
    },
    nested: {
      paddingLeft: theme.spacing(4),
      backgroundColor:'#172245'
    },
    icon:{
        color:'#e3bf0e',
    },
    header:
    {backgroundColor:'#e3bf0e',height:'64px',
    color:'white',fontSize:'30px',fontWeight:'bold',
    alignItems:'center'
  }
  }));
  export default useStyles;