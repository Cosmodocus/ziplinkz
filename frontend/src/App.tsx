import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Resources from './Pages/Resources';
import Quote from './Pages/Quote';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/pricing'
					element={<Pricing />}
				/>
				<Route
					path='/resources'
					element={<Resources />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route
					path='/quote'
					element={<Quote />}
				/>
			</Routes>
		</>
	);
};

export default App;
