import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/destination' element={<Destination />}></Route>
				<Route path='/crew' element={<Crew />}></Route>
				<Route path='/technology' element={<Technology />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
