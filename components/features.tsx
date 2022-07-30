import { Grid, Card, CardContent, CardMedia, CardActionArea, Typography, Container } from '@mui/material';
import { School, People, NoteAlt, Construction, VideoLibrary, Assignment } from '@mui/icons-material';
import styles from '../styles/home.module.css';

function Features() {
    let features = [
        {
            id: 0,
            icon: <School sx={{ fontSize: '64px' }} />,
            title: 'Guidance',
            description: 'Get guidance in your career and life with the best mentors and experts across the world'
        },
        {
            id: 1,
            icon: <VideoLibrary sx={{ fontSize: '64px' }} />,
            title: 'Curated Videos',
            description: 'Learn through in-depth tutorials, how to approach an algorithm, how to implement it & how to optimise it.'
        },
        {
            id: 2,
            icon: <Assignment sx={{ fontSize: '64px' }} />,
            title: 'Assignments',
            description: 'Assignments and questions are provided to understand the concepts well.'
        },
        {
            id: 3,
            icon: <Construction sx={{ fontSize: '64px' }} />,
            title: 'Learn By Doing',
            description: 'Learn things by buidling awesome projects and doing open source contributions'
        },
        {
            id: 4,
            icon: <NoteAlt sx={{ fontSize: '64px' }} />,
            title: 'Notes',
            description: 'Get complete cheatsheet and source code for all lectures so that you can focus on learning and practising.'
        },
        {
            id: 5,
            icon: <People sx={{ fontSize: '64px' }} />,
            title: 'Grow with community',
            description: 'Compete with your friends, practise with them & enter live sessions to grow daily.'
        },
    ]
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Typography mb={5} variant="h3" align='center' fontWeight={'700'}>
                Features
            </Typography>
            <Grid container justifyContent="center" alignItems='center' spacing={3}>
                {
                    features.map(feature => (
                        <Grid item alignSelf="center" sm={6} md={4} textAlign='center' key={feature.id}>
                            <Card sx={{
                                textAlign: 'center',
                                maxWidth: 345,
                            }}
                                className={styles.glass}
                                key={feature.id}>
                                <CardActionArea>
                                    <Typography mt={2} color='#fff'>
                                        {feature.icon}
                                    </Typography>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" color='#fff'>
                                            {feature.title}
                                        </Typography>
                                        <Typography className={styles.subHeading}>
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default Features;