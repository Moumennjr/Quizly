import LoginPage from './login-page/login-page'
import SignupPage from './signup-page/signup-page'
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './welcome-page/welcome-page';
import HomePage from './home-page/home-page';
import SideBar2 from '../components/sidebar2/sidebar2';
import ExplorePage from './explore-page/explore-page';
import Filters from '../components/filters/filters';
import CreatePostPage from './create-post-page/create-post-page';
function RouterApp(){

    return (
        <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/create-post' element={<CreatePostPage />} />
        </Routes>

    )

}

export default RouterApp;