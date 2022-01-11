import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { useQuery } from '@apollo/client';
import { QUERY_OBJECTIVES } from '../utils/queries';
import { QUERY_NAME_OBJECTIVES } from '../utils/queries';
import { QUERY_CAT_OBJECTIVES } from '../utils/queries';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Warhammer() {
  const { loading, data } = useQuery(QUERY_OBJECTIVES);
  if (data) {
    console.log('We have succesfully queried objectives');
  }
  // Load all Warhammer 40k 2020 Objectives into this array.
  const ObjectivesArray = data?.objectives || [];
  console.log(ObjectivesArray);
  // const { loading1, objectiveNameFound } = useQuery(QUERY_NAME_OBJECTIVES);
  // if (objectiveNameFound) {
  //   console.log('We have succesfully queried objective by name');
  // }
  // const { loading2, objectiveCATFound } = useQuery(QUERY_CAT_OBJECTIVES);
  // if (objectiveCATFound) {
  //   console.log('We have succesfully queried objective by category');
  // }

  return(

    <Box sx={{ flexGrow: 1 }}>
      <Typography sx={{ p: 2.0 }} variant="h2"> 40k Objectives</Typography>
      <Grid container spacing={2} style={{ display: "flex", justifyContent: "flex-start" }}>

     
        <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
        {ObjectivesArray.map((element) => {
        if(element) {
        console.log("element has been detected")
        }
        
        return(
          
      <CardContent>
          <Item>
          <Typography> {element.category} </Typography>
                <Typography> {element.name} </Typography>
                <Typography> {element.priority} </Typography>
                <Typography> {element.priorityDescription} </Typography>
                <Typography> {element.description} </Typography>
          </Item>
          </CardContent>
        );
            })
          }
        </Grid>
    
        
        
        
      </Grid>
    
    </Box>
     
  );
    // return(
    //     <Box sx={{ flexGrow: 1 }}>
          
    //       <Typography sx={{ p: 2.0 }} variant="h2"> Warhammer 40k - 9th Edition</Typography>
          
    //     <Card>
    //     <CardMedia
    //             component="img"
    //             height="550"
    //             image="./assets/images/DeathCompany3.jpg"
    //             alt="Death Company"
    //           /> 
    //           <CardContent>
    //             <Typography variant="h6">
    //              Death Company - Warhammer 40k
    //             </Typography>
    //           </CardContent>
    //            </Card>

    //         <Typography variant="h6">
    //           Released in August 2020, the 9th iteration of Warhammer 40k was designed to uproot problems 
    //         </Typography>
    //         <Grid container spacing={2}>
    //         <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
    //           {ObjectivesArray.map((element) => {
    //           if(element) {
    //           console.log("element has been detected")
    //           }
    //           if(element.name) {
    //             console.log("A objective has been detected");
    //             console.log("The name of this objective is: " + element.name);
    //           }
    //           return(
    //             <Item>
    //             <Typography> {element.category} </Typography>
    //             <Typography> {element.name} </Typography>
    //             <Typography> {element.priority} </Typography>
    //             <Typography> {element.priorityDescription} </Typography>
    //             <Typography> {element.description} </Typography>
    //             {ObjectivesArray.victoryPoints.map((VP) => {
    //               <Typography> {VP} </Typography>
    //             })}
    //             </Item>
    //           );
    //               })
    //             }
    //           </Grid>
    //           </Grid>
        
    //     </Box>
    // )
}