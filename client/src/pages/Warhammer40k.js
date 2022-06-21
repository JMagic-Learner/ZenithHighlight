import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useQuery } from '@apollo/client';
import { QUERY_OBJECTIVES } from '../utils/queries';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Core code sourced from https://www.tutorialfunda.com/reactjs/increment-decrement-number-using-react-hooks-counter/ //
//Button Display//
import { ButtonIncrement } from '../components/IncrementButtons';
import ButtonDecrement from '../components/DecrementButtons';
import Display from '../components/Display';
import { VPIncrement } from '../components/IncrementVPButtons';
import  VPDecrement  from '../components/DecrementVPButtons';
import { CPIncrement } from '../components/IncrementCPButtons';
import CPDecrement from '../components/DecrementCPButtons';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  whiteSpace: "unset",
  wordBreak: "break-all"
}));

export default function Warhammer() {
  
  let objectivename1 = "";
  let objectivename2 = "";
  let objectivename3 = "";

 

  const  {loading, data } = useQuery(QUERY_OBJECTIVES);
  if (data) {
    console.log('We have succesfully queried objectives');
  }

  const [objective1, setObjective1] = React.useState('');
  const [objective2, setObjective2] = React.useState('');
  const [objective3, setObjective3] = React.useState('');
  const [roundCount, setroundCount] = React.useState(1);
  const [vpCount, setvpCount] = React.useState(0);
  const [cpCount, setcpCount] = React.useState(12);
  const incrementRound = () => setroundCount(roundCount + 1);
  let decrementRound = () => setroundCount(roundCount - 1);
  const incrementVP = () => setvpCount(vpCount + 1);
  let decrementVP = () => setvpCount(vpCount - 1);
  const incrementCP = () => setcpCount(cpCount + 1);
  let decrementCP = () => setcpCount(cpCount - 1);


  const cascadePlus = async (event) => {
    incrementRound();
    incrementCP();
  }

  const cascadeMinus = async (event) => {
    decrementRound();
    decrementCP();
  }
  
  const handleChange1 = async (event) => {
    setObjective1(event.target.value);
    objectivename1 = event.target.value;
    console.log(objectivename1);
    return objectivename1;
  };

  const handleChange2 = async (event) => {
    setObjective2(event.target.value);
    objectivename2 = event.target.value;
    console.log(objectivename2);
    return objectivename2;
  };

  const handleChange3 = async (event) => {
    setObjective3(event.target.value);
    objectivename3 = event.target.value;
    console.log(objectivename3);
    return objectivename3;
  };

  let HTMLArray = [
    {
      id:1,
      title: "Objective 1",
      val: objective1,
      funct: handleChange1
     },
     {
     id:2,
     title: "Objective 2",
     val: objective2,
     funct: handleChange2
     },
     {
      id:3,
      title: "Objective 3",
      val: objective3,
      funct: handleChange3
     }
  ]

  // Load all Warhammer 40k 2020 Objectives into this array.

  const ObjectivesArray = data?.objectives || [];


  // const { loading1, objectiveNameFound } = useQuery(QUERY_NAME_OBJECTIVES);
  // if (objectiveNameFound) {
  //   console.log('We have succesfully queried objective by name');
  // }
  // const { loading2, objectiveCATFound } = useQuery(QUERY_CAT_OBJECTIVES);
  // if (objectiveCATFound) {
  //   console.log('We have succesfully queried objective by category');
  // }

  return (


    <Box sx={{ flexGrow: 1 }}>
      <Typography sx={{ p: 2.0 }} variant="h2"> 40k Objectives</Typography>
      
      <Grid container spacing={2} style={{ display: "flex", justifyContent: "flex-start"}}>
      <Grid item xs={12} sm={10} md={10} sx={{ m: 'auto' }}>
      <div> 
      <ButtonIncrement onClickFunc={cascadePlus}/>
      <Display message={roundCount}/> 
      <ButtonDecrement onClickFunc={cascadeMinus}/>
      </div>
      <div> 
      <VPIncrement onClickFunc={incrementVP}/>
      <Display message={vpCount}/> 
      <VPDecrement onClickFunc={decrementVP}/>
      </div>
      <div> 
      <CPIncrement onClickFunc={incrementCP}/>
      <Display message={cpCount}/> 
      <CPDecrement onClickFunc={decrementCP}/>
      </div>
      

      </Grid>

        {/* {HTMLArray.forEach((HTMLtemplate) => {
          return(
             <Grid item xs={12} sm={10} md={10} sx={{ m: 'auto' }}>
             <CardContent>
               <Item>
                 <Typography> {HTMLtemplate.title} </Typography>
                 <FormControl fullWidth>
                   <InputLabel id="demo-simple-select-label">Select Objective 1</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={HTMLtemplate.val}
                     label={HTMLtemplate.title}
                     onChange={HTMLtemplate.funct}
   
                   >
                     {ObjectivesArray.map((element) => {
                       if (element) {
                         console.log("element has been detected")
                       }
                       return (
                         <MenuItem value={element.name} >
                           <CardContent>
                             <Item style={{ whiteSpace: 'normal', wordBreak: "break-word"}}>
                               <Typography> {element.category} </Typography>
                               <Typography>Objective: {element.name} </Typography>
                               <Typography>Priority: {element.priority} </Typography>
                               <Typography>When to score: {element.priorityDescription} </Typography>
                               <Typography>Description {element.description} </Typography>
                             </Item>
                           </CardContent>
                         </MenuItem>
                       );
                     })}
   
                   </Select>
                 </FormControl>
   
               </Item>
             </CardContent>
           </Grid>
        )})} */}

        <Grid item xs={12} sm={10} md={10} sx={{ m: 'auto' }}>
          <CardContent>
            <Item>
              <Typography> Objective 1 </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Objective 1</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={objective1}
                  label="Objective 1"
                  onChange={handleChange1}

                >
                  {ObjectivesArray.map((element) => {
                    if (element) {
                      console.log("element has been detected")
                    }
                    return (
                      <MenuItem value={element.name} >
                        <CardContent>
                          <Item style={{ whiteSpace: 'normal', wordBreak: "break-word"}}>
                            <Typography> {element.category} </Typography>
                            <Typography>Objective: {element.name} </Typography>
                            <Typography>Priority: {element.priority} </Typography>
                            <Typography>When to score: {element.priorityDescription} </Typography>
                            <Typography>Description {element.description} </Typography>
                          </Item>
                        </CardContent>
                      </MenuItem>
                    );
                  })}

                </Select>
              </FormControl>

            </Item>
          </CardContent>
        </Grid>



        <Grid item xs={12} sm={10} md={10} sx={{ m: 'auto' }}>
          <CardContent>
            <Item>
              <Typography> Objective 2 </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Objective 2</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={objective2}
                  label="Objective 2"
                  onChange={handleChange2}
                >
                  {ObjectivesArray.map((element) => {
                    if (element) {
                      console.log("element has been detected")
                    }
                    return (
                      <MenuItem value={element.name}>
                        <CardContent>
                          <Item style={{ whiteSpace: 'normal', wordBreak: "break-word"}}>
                            <Typography> {element.category} </Typography>
                            <Typography>Objective: {element.name} </Typography>
                            <Typography>Priority: {element.priority} </Typography>
                            <Typography>When to score: {element.priorityDescription} </Typography>
                            <Typography >Description {element.description} </Typography>
                          </Item>
                        </CardContent>
                      </MenuItem>
                    );
                  })}

                </Select>
              </FormControl>
            </Item>
          </CardContent>
        </Grid>



        <Grid item xs={12} sm={10} md={10} sx={{ m: 'auto' }}>
          <CardContent>
            <Item>
              <Typography> Objective 3 </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Objective 3</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={objective3}
                  label="Objective 3"
                  onChange={handleChange3}
                >
                  {ObjectivesArray.map((element) => {
                    if (element) {
                      console.log("element has been detected")
                    }
                    return (
                      <MenuItem value={element.name}>
                        <CardContent>
                          <Item style={{ whiteSpace: 'normal', wordBreak: "break-word"}}>
                            <Typography> {element.category} </Typography>
                            <Typography>Objective: {element.name} </Typography>
                            <Typography>Priority: {element.priority} </Typography>
                            <Typography>When to score: {element.priorityDescription} </Typography>
                            <Typography>Description {element.description} </Typography>
                          </Item>
                        </CardContent>
                      </MenuItem>
                    );
                  })}

                </Select>
              </FormControl>
            </Item>
          </CardContent>
        </Grid>


        <Grid item xs={12} sm={6} md={8} sx={{ m: 'auto' }}>
          {ObjectivesArray.map((element) => {
            if (element) {
              console.log("element has been detected")
            }

            return (

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
      