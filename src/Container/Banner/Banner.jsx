import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';
import { banner_image } from '../../Database/banner_data';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const [bannerData, setBannerData] = useState([])


    useEffect(()=>{
        async function fetchBanner(){
            try{
                const res = await axios.get(`${banner_image}`)
                setBannerData(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchBanner()
    },[])

    console.log(bannerData)

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {bannerData.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 800,
                  display:'block',
                  overflow: 'hidden',
                  width: '100%',
                  zIndex:22,
                }}
                src={step.image}
                alt={step.image}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
  );
}

export default Banner;