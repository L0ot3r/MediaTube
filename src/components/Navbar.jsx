import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import { logo } from '../utils/constants';
import { SearchBar } from '../components';

const Navbar = () => (
	<Stack
		direction={{sx: 'column', sm: 'row'}}
		alignItems='center'
		rowGap={2}
		p={2}
		sx={{
			position: 'sticky',
			background: '#000',
			top: 0,
			justifyContent: 'space-between',
			zIndex: 20,
		}}
	>
		<Link to='/' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<img src={logo} alt='logo' height={35} />
			<Typography
				variant='h3'
				sx={{
					color: '#f1f1f1',
					fontSize: '2rem',
					ml: '8px',
				}}
			>
				MediaTube
			</Typography>
		</Link>
		<SearchBar />
	</Stack>
);

export default Navbar;
