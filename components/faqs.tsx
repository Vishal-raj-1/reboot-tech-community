import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import style from '../styles/home.module.css';

export default function SimpleAccordion() {
    let faqs = [
        {
            question: 'What is Reboot Tech Community?',
            answer: 'Reboot Tech community helps you to learn new technology for free.'
        },
        {
            question: 'How to enroll in a course/bootcamps',
            answer: `You don't need to enroll yourself anywhere, just check out all playlist at youtube for free of cost, and ask your doubts in discord channel.`
        },
        {
            question: 'Are all of your courses free?',
            answer: `Yes! All of our courses are and will always be free. You can find those on our YouTube channel`
        },
        {
            question: 'Do you provide notes and assignments?',
            answer: "Yes. You will get cheatsheet and source code of every tutorial. It will help to revise that topic easily"
        },
        {
            question: 'Do you provide mentorship and guidance?',
            answer: "Yes. Lot's of mentorship programs are on the way!"
        },
    ]
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Typography mb={5} variant="h3" align='center' fontWeight={'700'}>
                FAQs
            </Typography>
            {
                faqs.map(faq => (
                    <Accordion key={faq.question} className={`${style.glass} ${style.subHeading}`}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className={style.subHeading}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Container>
    );
}
