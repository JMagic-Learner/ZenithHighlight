import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'

export default function Carousel1(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "./assets/images/ParadeDaemonPrince1.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "./assets/images/TifaExpo.jpeg"
        },
        {
            name: "Random Name #2",
            description: "A collection",
            image: "./assets/images/Lineup.jpg"
        }
    ]

    return (
        <Carousel 
        indicatorIconButtonProps={{
            style: {
                padding: '10px',    // 1
                color: 'black',       // 3
                next: {
                    right: 0
                },
                // Applies to the "prev" button wrapper
                prev: {
                    left: 0
                }
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: 'orange' // 2
            }
        }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
    )
}

function Item(props)
{
    return (
        <Paper>
            
            <img src={props.item.image}/>
       
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
           
        </Paper>
    )
}