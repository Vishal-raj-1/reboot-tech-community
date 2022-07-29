import { CardMedia, Grid, Typography, Container, CardContent, Card } from '@mui/material'
import React from 'react'
import Socials from './socials'

const AboutFounder = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container alignItems={'center'} justifyContent='space-around' spacing={4} wrap='wrap'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <CardMedia
                        component="img"
                        image="/images/vishalRajput.png"
                        alt="Vishal Rajput"
                        className='founderImage'
                    />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} md={6}>
                    <Card className='glass'>
                        <CardContent>
                            <Typography mb={5} variant="h3" align='center' color='#fff'>
                                About Founder
                            </Typography>
                            <Typography mb={2} align='center' className='subHeading'>
                                Vishal Rajput is frontend developer from India. He have worked for 5 startups in last 2 years.
                            </Typography>
                            <Typography mb={3} align='center' className='subHeading'>
                                He have mentored 1000+ students regarding web development, data structure and algorithms, open source, interview preperation and lot more.
                            </Typography>
                            <Socials />
                        </CardContent>
                    </Card>
=======
                <Grid item xs={12} sm={8} md={5}>
                    <CardContent>
                        <Typography mb={5} variant="h3" align='center'>
                            About Founder
                        </Typography>
                        <Typography mb={2} align='center'>
                            Vishal Rajput is frontend developer from India. He has worked for 5 startups in last 2 years.
                        </Typography>
                        <Typography mb={3} align='center'>
                            He has mentored 1000+ students regarding web development, data structure and algorithms, open source, interview preperation and lot more.
                        </Typography>
                        <Socials />
                    </CardContent>
>>>>>>> 200164fd31486a84c53c966b8e9f8eda003177b1
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutFounder
