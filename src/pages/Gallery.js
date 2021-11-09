import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';

//Image Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Image from '../assets/images/BloodAngelsLineup.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: '../assets/images/BloodAngelsLineup.jpg',
    title: 'BACollection',
    rows: 2,
    cols: 2,
  },
  {
    img: '../assets/images/AssaultIntercessor.jpg',
    title: 'Intercessor',
  },
  {
    img: '../assets/images/YujingRoster2.jpg',
    title: 'Yujing Roster',
  },
  {
    img: '../assets/images/TifaExpo.jpeg',
    title: 'Tifa',
    cols: 2,
  },
  {
    img: '../assets/images/ParadeMortisContemptor2.jpg',
    title: 'Contemptor',
    cols: 2,
  },
  {
    img: '../assets/images/Outriders8.jpg',
    title: 'Bikers',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      transparency:'0.70',
      height:'50%'
  }
};

export default function Gallery() {
    return(
      
        <Box sx={{ flexGrow: 1 }}>

        <Typography variant="h3">
          <h1> Gallery </h1>
        </Typography>

        <ImageList
  sx={{ width: 2000, height: 1800 }}
  variant="quilted"
  cols={4}
  rowHeight={484}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

       
      </Box>
      
        
    );
}

