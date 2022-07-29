import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Chip, CardActions, Grid } from '@mui/material';
import { YouTube, Visibility } from '@mui/icons-material';
function Courses() {
    let courses = [
        {
            id: 0,
            image: 'frontendDevelopment',
            title: 'Frontend Development',
            description: 'In Frontend Development Essential Course, we will learn HTML, CSS, CSS FlexBox, CSS Grid, JavaScript, Asynchronous Programming, Git & GitHub. We will also build 5+ projects to understand each and every topic. Finally, We will build our portfolio and also learn how to host our website on internet for FREE.',
            youtubeLink: 'https://www.youtube.com/watch?v=YCbCGuq_NWE&list=PLSH9gf0XETou_b8C3SJm8rk69Z41eUgbQ&index=1',
        },
        {
            id: 1,
            image: 'binaryTree',
            title: 'Binary Trees',
            description: 'In this course, We will deep dive into Binary Tree Data Structure. We will start from Binary Tree Traversals, solve some basic fundamental questions then gradually increase the dificulty level of question and solve most frequently asked interview questions too. We will solve questions using multiple approaches i.e, Bottom Up, Top Down, Recursive & Iterative.',
            youtubeLink: 'https://www.youtube.com/watch?v=PBcgUy-XI-A&list=PLSH9gf0XETotuua1g7YYXWfZXZnU_LB5S&index=1'
        },
        {
            id: 2,
            image: 'list',
            title: 'Master Linked List',
            description: 'In Master Linked List course, we will start from learning fundamentals operation on linked list, then we will solve classical easy questions and then we will move to medium hard level problems. We will learn in depth, how to use of two pointer approach and dummy node.',
            youtubeLink: 'https://www.youtube.com/watch?v=c8a4sRSPJvU&list=PLSH9gf0XETourRyZW56Rdh9e0Phx-AJM5&index=1',
        },
        {
            id: 3,
            image: 'stack',
            title: 'Stack Data Structure',
            description: 'In this playlist, we will be learn about some pattern of stack questions. We are going to solve easy, medium and hard level problems. We use stack for Depth first Search, so we will solve more of stack question in Binary Tree course.',
            youtubeLink: 'https://www.youtube.com/watch?v=saN4Mi_rXfs&list=PLSH9gf0XETotSpywVcJGIYODBNL_j0P0u&index=1',
        },
        {
            id: 4,
            image: 'hashmap',
            title: 'HashMap & HashSet',
            description: 'In this course, we will be learn fundamental design of hashset and hashmap, then we will solve classical array and string question on hashmap. Priority Queue with hashmap is one of the important topic for interview preperation. That we are going to learn in this course.',
            youtubeLink: 'https://www.youtube.com/watch?v=QfgH3_MmrOM&list=PLSH9gf0XETouStSgwNw_7YCHhRgQU4lvd&index=1',
        },
    ]
    return (
        <Container sx={{ py: 8 }} maxWidth="lg" id="courses">
            <Typography mb={5} variant="h3" align='center'>
                Courses
            </Typography>
            {/* End hero unit */}
            <Grid container justifyContent='center' spacing={3}>
                {courses.map((course) => (
                    <Grid item key={course.id} xs={12} sm={6} lg={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} className='glass'
                        >
                            <CardMedia
                                component="img"
                                image={`/images/${course.image}.png`}
                                alt="random"
                                sx={{p:1}}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {course.title}
                                </Typography>
                                <Typography color='#4d4850'>
                                    {course.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href={course.youtubeLink} target='_blank'>
                                    <Chip icon={<YouTube />} label="YouTube" variant='filled' color='error' sx={{ my: 'auto', cursor: 'pointer' }} />
                                </a>
                                
                                <a href={course.youtubeLink} target='_blank'>
                                    <Chip icon={<Visibility />} label="View More" variant='filled' sx={{ my: 'auto', cursor: 'pointer' }} />
                                </a>
                                {/* <Button size="small">Edit</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Courses;
