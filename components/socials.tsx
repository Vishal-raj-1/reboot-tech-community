import { Twitter, LinkedIn, Instagram, GitHub, YouTube } from "@mui/icons-material"
import { Typography } from "@mui/material";

const Socials = () => {
    let socials = [
        {
            link: 'https://twitter.com/vishalraj_1',
            icon: <Twitter fontSize='large' />
        },
        {
            link: 'https://www.linkedin.com/in/vishalraj1/',
            icon: <LinkedIn fontSize='large' />
        },
        {
            link: 'https://www.instagram.com/vishal_raj_1_/',
            icon: <Instagram fontSize='large' />
        },
        {
            link: 'https://www.youtube.com/c/VishalRajput_1',
            icon: <YouTube fontSize='large' />
        },
        {
            link: 'https://github.com/Vishal-raj-1',
            icon: <GitHub fontSize='large' />
        }
    ]
    return (
        <Typography align="center">
            {
                socials.map(social => (
                    <a href={social.link} target='_blank'
                        style={{
                            padding: '5px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            width: '50px',
                            height: '50px',
                            margin: '5px',
                            color: '#fff'
                        }}
                    >
                        {social.icon}
                    </a>
                ))
            }
        </Typography>
    )
}

export default Socials;