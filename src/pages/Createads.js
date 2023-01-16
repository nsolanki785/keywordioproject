import React from 'react';
// import { styled }   from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { Button ,Grid} from '@mui/material';
import Header from '../components/Header';


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);



const CreateAds = () => {
  const navigate = useNavigate()

  const [selectform, setselectForm] = React.useState("");

 


  const handleselect = (e) => {
    setselectForm(e.target.value)
    console.log("value", e.target.value);
  }
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }


  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,

  };
  
  return (
    <>
      <Header>
        <Card  sx={{margin:'100px', padding: "20px",height:'100vh'}}>
          <RadioGroup name="use-radio-group" defaultValue="first">
             <Stack sx={{display:'flex',justifyContent:'center',flexDirection:'revert',marginTop:'50px'}}>
            <Card sx={{ width:'20%',maxWidth: 345, marginRight: '40px',height:'50vh' }} >
              <MyFormControlLabel value="text-ads"  control={<Radio />} onChange={(e) => handleselect(e)} />
              <CardMedia
                component="img"
                height="194"
                image="/mad_11119659961.png"
                alt="Paella dish"
              />
              <CardContent sx={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                <Typography variant="body2" color="text.secondary">
                  Create Text Ad
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{width:'20%', maxWidth: 345, marginRight: '20px' }} >
              <MyFormControlLabel value="media-ads"  control={<Radio />} onChange={(e) => handleselect(e)} />
              <CardMedia
                component="img"
                height="194"
                image="google-top-websites-carousel-1486645747.png"
                alt="Paella dish"
              />
              <CardContent sx={{display:'flex',justifyContent:'center' ,marginTop:'20px'}}>
                <Typography variant="body2" color="text.secondary">
                  Media Ad
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          </RadioGroup>
        <Grid
          display={'flex'}
          justifyContent={'end'}
          mt={5}
        >
          <Button variant="contained" onClick={() => navigate(`/${selectform}`)}>Select Ads Type</Button>
          </Grid>
          </Card>
      </Header>
    </>
  )
}
export default CreateAds;