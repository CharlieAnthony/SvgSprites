import React from 'react';
import Box from "@mui/material/Box";

const IconContainer = ({ Desc, path, color, size }: { Desc: string; path: string; color: string, size: string }) => {
	return (
		<Box sx={{ width: size, height: size, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<svg width='100%' height='auto'><use href={path} fill={color}/></svg>
		</Box>
	);
};


export default IconContainer;