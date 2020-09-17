import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        //maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Post(post) {
    const classes = useStyles();
    const p = post.post;
    console.log(post.post);
    var res = p.author.charAt(0);

    // return <li>{post.post_title}</li>
    return (
        <List className={classes.root}>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={res} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {p.author}
                                </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="h6"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {p.post_title}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                </Grid>
            </Grid>
            <Grid item>
                <React.Fragment>
                    <Typography
                        //component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        align='right'
                    >
                        Number of comments: {p.num_comments}
                    </Typography>
                </React.Fragment>
                </Grid>
          </Grid>

            <Divider variant="inset" component="li" />
        </List>
    )

};