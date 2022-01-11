import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; 
//Image Components


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
    img: '../assets/images/yujing.jpg',
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
    img: '../assets/images/outriders.jpg',
    title: 'Bikers',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '../assets/images/DaofeiExample.jpeg',
    title: 'DaoFeiExample',
  },
  {
    img: '../assets/images/ParadeDaemonPrince1.jpg',
    title: 'Fern',
  },
  {
    img: '../assets/images/Banner3.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '../assets/images/JujakExample.jpeg',
    title: 'Jujak',
  },
  {
    img: '../assets/images/Leviathan.jpg',
    title: 'Sea star',
  },
  {
    img: '../assets/images/ChapterCommand1.jpg',
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
<Grid container spacing={2}> 
<Grid item xs={8} md={4}>
       

       

        <ImageList
  
  sx={{ width: '325%', height: 2900 }}
  variant="quilted"
  cols={4}
  rowHeight={484}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 484, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>

       
    
      </Grid>  
      </Grid>   
        </Box>  
    );
}

