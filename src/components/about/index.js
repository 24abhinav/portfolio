import React from 'react';
import Avatar from '../../assets/avatar.jpg';
import {
    Container,
    AboutContent,
    AboutContainer,
    AboutInformation,
    ImageSection,
    AboutPrimaryHeading,
    Icon,
    List,
    Items
} from './styled';
import { PrimaryHeading } from '../ui/Headings';
import {aboutMe, AboutInfo, CURRENT_DESIGNATION } from '../../constant';

const info = () => {
    return (
        <React.Fragment>
            <AboutPrimaryHeading> { `${CURRENT_DESIGNATION} & Freelancer` }  </AboutPrimaryHeading>
            <AboutContent style={{padding: '0px 20px', fontStyle: 'italic'}} dangerouslySetInnerHTML={{__html: aboutMe}} />
            <List>
                {
                    AboutInfo.map(item => {
                        return (
                            <Items key={item.keyName}> <Icon className="fas fa-chevron-right" ></Icon> <b>{item.keyName}:</b> &nbsp;&nbsp;{item.value}</Items>
                        )
                    })
                }
            </List>
        </React.Fragment>
    )
}

const About = () => {
    return (
        <React.Fragment>
            <Container>
                <PrimaryHeading>About</PrimaryHeading>
                <AboutContent dangerouslySetInnerHTML={{__html: aboutMe}} />
                <AboutContainer>
                    <ImageSection src={Avatar}></ImageSection>
                    <AboutInformation>
                        {
                            info()
                        }
                    </AboutInformation>
                </AboutContainer>
            </Container>
        </React.Fragment>
    )
}

export default About;