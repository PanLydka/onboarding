import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Container from '@material-ui/core/Container';
import "./styles.scss";
import Form from './Form';
import Form2 from './Form2';
import VideoFrontCard from './VideoFrontCard';
import VideoBackCard from './VideoBackCard';
import VideoSelfie from './VideoSelfie';

const App = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="container">
        {activeStep === 0 && <Form />}
        {activeStep === 1 && <Form2 />}
        {activeStep === 2 && <VideoFrontCard />}
        {activeStep === 3 && <VideoBackCard />}
        {activeStep === 4 && <VideoSelfie />}

        <div className="stepper">
          <MobileStepper
            variant="progress"
            steps={6}
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
    </div>
  );
}

export default App;
