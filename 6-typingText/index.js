import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroHeart,
  HeroAniWarpper,
  HeroAniText,
  HeroP,
  HeroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Video from '../../videos/video.mp4';
// import { Button } from '../ButtonElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          I <HeroHeart /> Build
        </HeroH1>
        <HeroAniWarpper>
          <HeroAniText>WEBSITES</HeroAniText>
        </HeroAniWarpper>
        <HeroP>My Name is JAEYOUNG KIM</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            Contact{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
