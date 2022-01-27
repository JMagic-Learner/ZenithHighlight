import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_NAME_OBJECTIVES } from '../../utils/queries';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function DescriptionByName() {

    const {objectiveName} = useParams();

    const { loading, data } =  useQuery(QUERY_NAME_OBJECTIVES, {
        variables: { name: objectiveName },
      });

    const DescriptionArray = data?.objectivesByName || {};

    return(

        <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
        {DescriptionArray.map((element) => {
        if(element) {
        console.log("element has been detected")
        }
        
        return(
          
      <CardContent>
          <Item>
          <Typography> {element.category} </Typography>
                <Typography>Objective: {element.name} </Typography>
                <Typography>Priority: {element.priority} </Typography>
                <Typography>When to score: {element.priorityDescription} </Typography>
                <Typography>Description {element.description} </Typography>
          </Item>
          </CardContent>
        );
            })
          }
        </Grid> 
        
        );


}