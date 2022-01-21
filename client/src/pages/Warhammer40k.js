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

  let objectiveName = ''
  const { loading, data } = useQuery(QUERY_OBJECTIVES);
  if (data) {
    console.log('We have succesfully queried objectives');
  }

  const { loading1, data1 } = useQuery(QUERY_NAME_OBJECTIVES, {
    variables: { name: objectiveName },
  });


  const [objective1, setObjective1] = React.useState('');
  const [objective2, setObjective2] = React.useState('');
  const [objective3, setObjective3] = React.useState('');
  const [description1, setDescription1] = React.useState('');
  const [description2, setDescription2] = React.useState('');
  const [description3, setDescription3] = React.useState('');


  const handleChange1 = async (event) => {
    setObjective1(event.target.value);
    objectiveName = event.target.value;
    setDescription1(ObjectivesDescriptionArray);
    console.log(setDescription1);
  };

  const handleChange2 = async (event) => {
    setObjective2(event.target.value);
  };

  const handleChange3 = async (event) => {
    setObjective3(event.target.value);
  };
 
  // Load all Warhammer 40k 2020 Objectives into this array.
  const ObjectivesArray = data?.objectives || [];
  console.log(ObjectivesArray);
  const ObjectivesDescriptionArray = data?.objectivesByName.description || [];
  if (ObjectivesDescriptionArray) {
      console.log("we have queried via nbame");
  }

  
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
              <InputLabel id="demo-simple-select-label">Objective 1</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective1}
                label="Objective 1"
                onChange={handleChange1}
              >
                {ObjectivesArray.map((element) => {
                   if(element) {
                    console.log("element has been detected")
                  } 
                  return(
                <MenuItem value={element.name}>
                <Typography> {element.name} </Typography>
                </MenuItem>
                  );
                })}
              
              </Select>
            </FormControl>
            <Typography> {description1} </Typography>
          </Item>
        </CardContent>
    </Grid>
    <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
        <CardContent>
          <Item>
            <Typography> Objective 2 </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Objective 2</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective2}
                label="Objective 2"
                onChange={handleChange2}
              >
               {ObjectivesArray.map((element) => {
                   if(element) {
                    console.log("element has been detected")
                  } 
                  return(
                <MenuItem value={element.name}>{element.name} </MenuItem>
                  );
                })}
              
              </Select>
            </FormControl>
          </Item>
        </CardContent>



    </Grid>
    <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
        <CardContent>
          <Item>
            <Typography> Objective 3 </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Objective 3</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective3}
                label="Objective 3"
                onChange={handleChange3}
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