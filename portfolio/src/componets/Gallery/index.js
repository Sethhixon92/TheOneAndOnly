import * as React from 'react';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { ImageListItemBar } from '@mui/material';
import photo1 from "../../assests/Project1.png";
import photo2 from "../../assests/Project2.jpg";
import photo3 from "../../assests/Project3.png";

export default function TitlebarBelowImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img 
                     src={`${item.img}?w=248&fit=crop&auto=format`}
                     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                     alt={item.title}
                     loading="lazy"
                   />
                <ImageListItemBar
                   title={item.title}
                   subtitle={<span>by: {item.author}</span>}
                   position="below"
                />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: photo1,
        title: 'El Buen Sabor',
    },
    {
        img: photo2,
        title: 'Asanai Corp.',
    },
    {
        img: photo3,
        title: 'VividStrokes',
    },
];

