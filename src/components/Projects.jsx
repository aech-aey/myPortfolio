import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cric from '../assets/cric.png'
import world from '../assets/world.png'
import ims from '../assets/ims.png'
import mazdoor from '../assets/mazdoor.png'
function Projects() {
    return (
        <div name='projects' className='w-full h-[380vh] sm:h-[250vh] lg:h-[200vh] bg-[#9a9a9a] text-[#141c06] flex items-center justify-center'>
            {/* Container */}
            <div className='max-w-[1000px] lg:max-w-[1000px] md:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#BAFF39] '>Projects</p>
                    <p className='py-5 md:text-2xl code'>// These are the projects I've made with ReactJS</p>
                </div>

                <div className='w-full flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-6 text-center py-8'>
                        <Card sx={{ maxWidth: 445, backgroundColor: "#8e8d8d" }}>
                            <CardMedia
                                component="img"
                                alt="Cricket Scoring"
                               
                                image={cric}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#141c06" }}>
                                    Cricket Scoring App.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "#141c06" }}>
                                This Cricket Scoring App simplifies the scoring process. With its intuitive features and real-time score updates, it's the ideal tool for players, coaches, and umpires to keep track of scores and players.                                                       </Typography>
                            </CardContent>
                            <CardActions className='flex items-center justify-center'>
                            <a href='https://csb-qkmqrs-41j2ykh1f-aech-aey.vercel.app/' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    Visit Website
                                </a>
                                <a href='https://github.com/aech-aey/cricketScoringApp' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    View Code 
                                </a>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 445, backgroundColor: "#8e8d8d" }}>
                            <CardMedia
                                component="img"
                                alt="World Map"
                                image={world}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#141c06" }}>
                                    World Map.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "#141c06" }}>
                                Created a world map app with region and country name search functionality, Used an API to get information about countries. Users can also explore detailed country information.
                                  </Typography>
                            </CardContent>
                            <CardActions className='flex items-center justify-center'>
                                <a href='https://world-map-countries.netlify.app/' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    Visit Website
                                </a>
                                <a href='https://github.com/aech-aey/worldMap' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    View Code 
                                </a>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 445, backgroundColor: "#8e8d8d" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={ims}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#141c06" }}>
                                    Inventory Management System.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "#141c06" }}>
                                An inventory management system with local storage for tracking products, quantities, units, and essential operations like add, update, delete, search, and quantity adjustments.
                                </Typography>
                            </CardContent>
                            <CardActions className='flex items-center justify-center'>
                            <a href='https://inventory-managment-system.netlify.app/' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    Visit Website
                                </a>
                                <a href='https://github.com/aech-aey/inventoryManagementSystem' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    View Code 
                                </a>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 445, backgroundColor: "#8e8d8d" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={mazdoor}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#141c06" }}>
                                   Mazdoor App.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "#141c06" }}>
                                A web app for finding skilled technicians. And If you are a technician, you can register.  It also have local storage to ensure that data can't be lost even after reloading. 
                                </Typography>
                            </CardContent>
                            <CardActions className='flex items-center justify-center'>
                            <a href='https://mazdoor.netlify.app/' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    Visit Website
                                </a>
                                <a href='https://github.com/aech-aey/mazdoorApp' className='text-lime-950 font-bold border-lime-950 group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#BAFF39]  duration-300 rounded-lg' target="_blank">
                                    View Code 
                                </a>
                            </CardActions>
                        </Card>

                </div>
            </div>
        </div>

    );
}


export default Projects