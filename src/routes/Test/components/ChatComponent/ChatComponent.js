import React, { Component } from 'react'
import classes from './ChatComponent.scss'
import { ParallaxProvider } from 'react-scroll-parallax';
import ProfileCascade from 'components/UIElements/ProfileCascade'
import Button from 'components/UIElements/UIButton'
import classNames from 'classnames'
import Searchbox from '../Searchbox'

export default class ChatComponent extends Component {
  render() {

    const profileArray = [
        {url: "http://www.photoshopfiles.com/photoshop_files/121/preview.png", name: "User 1"},
        {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png", name: "User 2"},
        {url: "https://png.icons8.com/color/260/person-female.png", name: "User 3"},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yT3BRuHo3nm9cw4jpBJTI3axCOkbdCsUZmisy9thfwxak14K", name: "User 4"},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISOPofgFneb_24u478hajFwvhY61pQxtJ9ZaCEhcMz066HBJJ", name: "User 5"},
        {url: "https://findicons.com/files/icons/631/dapino_people/512/sunglass_woman_red.png", name: "User 6"},
    ]

    return (
      <div className={classes.container}>
        <div className={classes.topContainer}></div>
        <div className={classes.bottomContainer}></div>
        <div className={classes.overlayDiv}>
            
            <div className={classes.block1}>
                    <div className={classes.titleAndWave}>
                        <div className={classes.block1Title}>{`Hi, we're Intercom`}</div>
                        <img className={classes.handWave} src={"https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/waving-hand-sign_1f44b.png"}></img>
                    </div>
                    
                <div className={classes.block1SubTitle}>We help your business grow by connecting you to your customers</div>
            </div>

            <div className={classes.block2}>
                <div className={classes.contentWrapper}>    
                    <div className={classes.startConv}>Start a conversation</div>
                    <div className={classes.subtitle}>The team typically replies in 1 hour</div>
                    <div className={classes.collaboratorImages}>
                        <ProfileCascade profileArray={profileArray} size={'52'}/>
                    </div>    
                    <Button color={"blue"} className={classes.buttonStyles}>New Converastion</Button>
                </div>
            </div>

            <div className={classes.block2} style={{height: "160px"}}>
                <div className={classes.contentWrapper}>    
                    <div className={classes.findAnswer}>Find and answer quickly</div>
                    <div className={classes.searchBox}>
                        <Searchbox name={"search"} placeholder={"Search our Help Center"}/>
                    </div>
                </div>     
            </div>

            <div style={{height: "140px"}} className={classes.block2}>
                <div className={classes.contentWrapper}> 
                    <div className={classes.imageAndText}>
                        <img className={classes.sampleImage} src={"http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg"} />
                        <div className={classes.titleAndSubtitle}>
                            <div className={classes.title}>Check out our Product Tours</div>
                            <div className={classes.subtitle}>These tours features best practices to help you work better with Intercom.</div>
                        </div>
                    </div>
                </div>    
            </div>


            <div style={{height: "240px"}} className={classes.block2}>
                <div className={classes.contentWrapper}> 
                    <div className={classes.newsletter}>Get the Inside Intercom newsletter</div>
                    <div className={classes.subText}>Join over 35,000 subscribers from companies like Airbnb, Google, and Spotify who get our freshest content in their inbox every week.</div>
                    <div className={classes.searchBox}><Searchbox name={"search"} placeholder={"name@example.com"}/></div>
                </div>
            </div>

            <div style={{height: "240px"}} className={classes.block2}>
                <div className={classes.contentWrapper2}> 
                    <div className={classes.imageAndText}>
                        <img className={classes.sampleImage} src={"http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg"} />
                        <div className={classes.titleAndSubtitle}>
                            <div className={classes.title}>Check out our Product Tours</div>
                            <div className={classes.subtitle}>These tours features best practices to help you work better with Intercom.</div>
                        </div>
                    </div>
                </div>    
                <div className={classes.upvoteButton}><Button color={"blue"} inputStyle={{borderRadius: "4px", width: "100%"}}>Upvote (1200)</Button></div>
            </div>


        </div>
        {/* <ParallaxProvider
            slowerScrollRate
            tag="figure">
        
        </ParallaxProvider> */}
      </div>
    )
  }
}
