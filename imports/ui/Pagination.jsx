import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const PaginationComponent = ({ postsPerPage, totalPosts, paginate}) => {
    const classes = useStyles();

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);
    console.log(page);

    return (
        <div className={classes.root}>
            <Pagination 
                count={pageNumbers.length} 
                page={page}
                onClick={() => paginate(page)}
                onChange={handleChange}
                shape="rounded" />
        </div>
    )
}

export default PaginationComponent;