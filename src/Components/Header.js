import { AppBar, Badge, Grid, GridListTileBar, IconButton, Input, InputBase, Toolbar } from '@material-ui/core'
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Header() {
    return (
     <AppBar style={{height:'50px',}} position='static' color='transparent'>
        <Toolbar>
            <Grid container>
                <Grid item sm={6}>
                 <InputBase
                 placeholder='Search topics'
                 startAdornment={ <SearchIcon fontSize='small' />} />
                </Grid>
                <Grid item sm></Grid>
                <Grid>
                  <IconButton>
                      <Badge badgeContent={4} color='secondary'>
                       <NotificationsNoneIcon fontSize='small' />
                      </Badge>
                  </IconButton>
                  <IconButton >
                      <Badge badgeContent={4} color='primary'>
                       <MailOutlineIcon fontSize='small' />
                      </Badge>
                  </IconButton>
                  <IconButton >
                      <PowerSettingsNewIcon fontSize='small' />
                  </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
     </AppBar>
    )
}
