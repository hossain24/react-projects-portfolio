import React from 'react';
/* import '@fontsource/roboto/300.css'; */
import { Typography } from '@mui/material';


const HeroMaterial = () => {
    return (
        <>
            <div className="HeroMaterial">
                <Typography variant="h3" sx={{ textAlign: 'center', color: 'red' }}>
                    This is Material!
                </Typography>;
            </div>
        </>
    );
}

export default HeroMaterial;
