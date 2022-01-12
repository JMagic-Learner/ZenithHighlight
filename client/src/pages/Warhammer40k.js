import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { useQuery } from '@apollo/client';
import { QUERY_OBJECTIVES } from '../utils/queries';
import { QUERY_NAME_OBJECTIVES } from '../utils/queries';
import { QUERY_CAT_OBJECTIVES } from '../utils/queries';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

  const [objective, setObjective] = React.useState('');

  const handleChange = (event) => {
    setObjective(event.target.value);
  };
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
        <CardContent>
          <Item>
            <Typography> Objective 1 </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective}
                label="Objective 1"
                onChange={handleChange}
              >
                {ObjectivesArray.map((element) => {
                   if(element) {
                    console.log("element has been detected")
                  } 
                  return(
                <MenuItem value={element.name}>{element.name}</MenuItem>
                  );
                })}
              
              </Select>
            </FormControl>
          </Item>
        </CardContent>
    </Grid>
        <CardContent>
          <Item>
            <Typography> Objective 2 </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective}
                label="Objective 2"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </CardContent>

        <CardContent>
          <Item>
            <Typography> Objective 3 </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective}
                label="Objective 3"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </CardContent>

     
        <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
        {ObjectivesArray.map((element) => {
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
    
        
        
        
      </Grid>
    
    </Box>
     
  );
        }