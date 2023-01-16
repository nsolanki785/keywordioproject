import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Stack, Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button} from "@mui/material"; 
import { Formik } from "formik";
import Input from '../components/shared components/input/input'
import SubmitModal from "../components/shared components/model";



const MediaAdsForm = () => {
    const [open, setOpen] = useState(false);
    const navigate= useNavigate()
    const onhandleSubmit = (values) => {
        
    setTimeout(() => {
        navigate('/create-ads')
        }, 6000);
     }
   

    return (
        <>
        <Formik
            enableReinitialize={true}
            initialValues={{
               Headingone:  "",
               Headingtwo:  "",
               business_name: "",
               button_label: "",
               website_url:  ""
            }}
            // validationSchema={Validation}
            onSubmit={(values,) => {
                onhandleSubmit(values)
            }}
        >
            {({ errors, touched, values, isSubmitting, setFieldValue, handleChange, handleBlur, handleSubmit }) => {
    return (
        <>
            <Header>
                <Box  sx={{padding:'20px', border: '1px solid', borderColor: '#424242',margin: '90px', bgcolor: '#FFFFFF' }}>
                    <Stack  sx={{color:'rgb(44 56 74 / 95%)'}}>
                        <h6>MediaAdsForm</h6>
                    </Stack>
                    <form 
                    onSubmit={ handleSubmit}>
                        <Grid container xs={12} item spacing={2} sx={{marginTop:'2px',padding:'5px'}}>
                            <Grid item xs={6} md={6}>
                                <Stack>
                                    <Input
                                        label="Heading 01"
                                        id="Headingone"
                                        type="text"
                                        name="Headingone"
                                        value={values.Headingone}
                                        onChange={handleChange}
                                            onBlur={handleBlur}
                                    />
                                </Stack>
                                <Stack   sx={{marginTop:'17px'}}>
                                    <Input
                                        label="Heading 02"
                                        id="Headingtwo"
                                        type="text"
                                        name="Headingtwo"
                                        onChange={handleChange}
                                        value={values.Headingtwo}
                                        onBlur={handleBlur}
                                    />
                                </Stack>

                            </Grid>
                            <Grid item xs={6} md={6} sx={{marginTop:'15px'}}>

                                <Stack>
                                    <label for="discription">Description 01</label>
                                    <Stack>
                                        <textarea id="discription"   onChange={handleChange}
                                               value={values.discription} onBlur={handleBlur} name="discription" rows="4 " cols="45"></textarea>
                                    </Stack>
                                </Stack>
                            </Grid>

                            
                            <Grid item xs={6} md={6} sx={{marginTop:'10px'}}>
                                <Stack>
                                    <Input
                                        label="Business Name"
                                        placeholder="Add your business name"
                                        id="business_name"
                                        type="text"
                                        name="business_name"
                                        value={values.business_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={6} sx={{marginTop:'10px'}}>
                                <Stack>
                                    <Input
                                        label="Button Label"
                                        placeholder="Button Label"
                                        id="button_label"
                                        type="text"
                                        name="button_label"
                                        value={values.button_label}
                                        onChange={handleChange}
                                                onBlur={handleBlur}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={6} md={12} sx={{marginTop:'10px'}}>
                                <Stack>
                                    <Input
                                        label="Website URL"
                                        placeholder="Add the URL of the landing page you want to redirect users to"
                                        id="website_url"
                                        type="text"
                                        name="website_url"
                                        value={values.website_url}
                                        onChange={handleChange}
                                                onBlur={handleBlur}
                                    />
                                </Stack>
                            </Grid>

                        </Grid>
                        
                        <Grid
                            display={'flex'}
                            justifyContent={'end'}
                            mt={3}
                        >
                            <Button  variant='contained'   onClick={() => navigate('/')} sx={{ bgcolor: '#616161', marginRight: '20px',width:'10%',borderRadius:'5px' }}>Cancel</Button>
                            <Button
                                variant='contained'
                                type="submit"
                                sx={{width:'10%',borderRadius:'5px'}}
                                
                            >
                                submit
                            </Button>

                        </Grid>
                    </form>
                </Box>
            </Header>
        </>
    )
            }}
            </Formik>
            <SubmitModal
                open={open}
                 setOpen={setOpen}
            />
            </>
            )

}

export default MediaAdsForm;    