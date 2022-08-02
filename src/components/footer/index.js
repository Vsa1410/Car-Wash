
import './index.css'
import Home from "../home";
import { Link } from "react-router-dom";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Box from '@mui/material/Box';

function Footer (){
    const[value,setValue]= React.useState(0)
    return(
        <div className="footer">
        <Box sx={{width: 400}}>

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
            
           
                <BottomNavigationAction component={Link} to="/"label="Home" icon={<HomeIcon />} />
            



            
            
                <BottomNavigationAction component={Link} to="/payments" label="Lançamentos" icon={<LocalCarWashIcon />} />
            

            
                <BottomNavigationAction component={Link} to="/new" label="Adicionar" icon={<AddCircleIcon />} />
            
            

            
            <BottomNavigationAction component={Link} to="/saldo" label="Saldo" icon={<AccountBalanceIcon />} />
            
            
            <BottomNavigationAction label="Manutenção" icon={<EngineeringIcon />} />

            </BottomNavigation>


                    </Box>

        </div>
    )
}
export default Footer