import { Grid, Avatar, Typography } from "@mui/material";

function Testimonials() {
    let testimonials = [
        {
            id: 0,
            image: 'list',
            name: 'Master Linked List',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime ipsam esse!'
        },
        {
            id: 1,
            image: 'binaryTree',
            name: 'Binary Trees',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime ipsam esse!'
        },
        {
            id: 2,
            image: 'frontendDevelopment',
            name: 'Frontend Development Essentials Course',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime ipsam esse!'
        }
    ]
    return (
        <Grid container justifyContent='center' alignItems='center'>
            {
                testimonials.map(test => (
                    <Grid item alignSelf="center" sm={12} textAlign='center'>
                        <Avatar
                            alt="Remy Sharp"
                            src={`/images/${test.image}.png`}
                            sx={{ width: 56, height: 56, margin: 'auto' }}
                        />
                        <Typography variant="h5">{test.name}</Typography>
                        <Typography variant="body2">{test.description}</Typography>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Testimonials;