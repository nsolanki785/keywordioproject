import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { color } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
const Header = ({children}) => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#FFFFFF" }}>
                <Toolbar>
                    <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
                    {isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "2%", color: '#424242' }}>
                                App Logo
                            </Typography>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Typography sx={{ fontSize: "2rem", paddingLeft: "2%", color: '#424242' }}>
                                App Logo
                            </Typography>
                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                // indicatorColor="#f44336"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >

                                <Tab label="DASHBOARD" onClick={()=>navigate('/')} sx={{ color: '#424242' }} />
                                <Tab label="CREATE ADS"  onClick={()=>navigate('/create-ads')} sx={{ color: '#424242' }} />
                            </Tabs>
                            {/* <Link to="/">DASHBOARD</Link> */}
                        </>
                    )}
                </Toolbar>
            </AppBar>
            {children}
        </React.Fragment>
    );
};

export default Header;
