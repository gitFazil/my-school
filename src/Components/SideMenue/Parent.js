
import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import useStyles from './useStyle';

export default function Parent() {
    const classes = useStyles();
    const [openP, setOpenP] = useState(false);

    const handleClickP = () => {
        setOpenP(!openP);
      };
    return (
        <>
           
        </>
    )
}
