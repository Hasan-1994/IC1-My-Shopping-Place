import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className="block">
            <div className="text">
                <h3>Social Contact</h3>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button><InstagramIcon onClick={()=> alert("sdasdas")}/></Button>
                    <Button><LinkedInIcon onClick={()=> alert("sdasdas")}/></Button>
                    <Button><ShoppingBagIcon onClick={()=> alert("Hier Icon von Shop und Logo")}/></Button>
                    <Button><GitHubIcon onClick={()=> alert("Hier Icon von Shop und Logo")}/></Button>
                </ButtonGroup>
            </div>

        </div>
    )
}