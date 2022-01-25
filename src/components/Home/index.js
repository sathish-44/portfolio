import React from 'react';
import Container from 'react-bootstrap/Container'
import './home.css'
import coverPic from '../../images/cover.jpg'
import profilePic from '../../images/profile.jpg'
import Typography from '@mui/material/Typography';
import infogain from '../../images/infogain.jpg'

function Home() {
    return <>
        <Container>
            <div className="the-header">
                <img className="header-background" src={coverPic} id="header-background-id" alt="background-img" />
            </div>
            <>
                <img className="profile-picture" src={profilePic} alt="profile" />
            </>
            <div className='personal_detail'>
                <div className='personal_infoL'>        
                    <Typography variant="h6" gutterBottom style={{margin: 0}}>
                        Sathish Madhavan
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom style={{margin: 0}}>
                        Consultant UI
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom >
                        Tamil Nadu, India
                    </Typography>
                </div>

                <div className='personal_infoR'>        
                    <Typography variant="overline" display="block" gutterBottom style={{margin: 0}}>
                    Learn to Clap in Others Victory, Then your Time'll Come. 
                    {/* In the meantime, I am enjoying myself by working with #React */}
                    </Typography>
                </div>

                <div className='personal_infoR'>        
                    <Typography variant="subtitle2" gutterBottom style={{margin: 0}}>
                       <img src={infogain} width={15}/> Infogain
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{margin: 0}}>
                        Gobi Arts & Science College
                    </Typography>
                </div>

            </div>
        </Container>
    </>;
}

export default Home;
