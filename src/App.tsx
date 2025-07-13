import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import IconContainer from "./IconContainer";
import {Stack} from "@mui/material";

const icons = [
	{
		'Desc': 'Home',
		'path': '/icons/icons.svg#home',
		'color': 'black',
		'size': '50px',
	},
	{
		'Desc': 'Menu',
		'path': '/icons/icons.svg#menu',
		'color': 'black',
		'size': '50px',
	},{
		'Desc': 'Settings',
		'path': '/icons/icons.svg#settings',
		'color': 'black',
		'size': '50px',
	},{
		'Desc': 'Account',
		'path': '/icons/icons.svg#account',
		'color': 'black',
		'size': '50px',
	},
]

function App() {
	return (
		<Box className="App" sx={{ display: 'flex', width: '100%', justifyContent: 'center', margin: 'auto'}}>
			<Stack
				direction={"row"}
			   	sx={{
		   			position: 'absolute',
					top: '300px',
					width: '400px',
					height: 'fit-content',
					justifyContent: 'space-between',
					alignItems: 'center'
			}}>
				{icons.map((iconProps) => <IconContainer {...iconProps} key={iconProps.Desc}/>)}
			</Stack>

		</Box>
	);
}

export default App;
