import React from 'react';
import './project-two.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const ProjectTwo = () => {

    const itemData = [
        {
            img: './images/svg/wisdom/svg-1.svg',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            img: './images/svg/wisdom/svg-2.svg',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: './images/svg/wisdom/svg-3.svg',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: './images/svg/wisdom/svg-4.svg',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            img: './images/svg/wisdom/svg-5.svg',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: './images/svg/wisdom/svg-6.svg',
            title: 'Honey',
            author: '@arwinneil',
        }
    ];

    return (
        <>
            <div className="ProjectTwo">
                <ImageList className="ImageList" variant="quilted" cols={3} gap={10}>
                    {itemData.map((item) => (
                        <ImageListItem className="ImageListItem" key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

        </>
    );
}

export default ProjectTwo;
