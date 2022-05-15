import {Routes, Route} from 'react-router-dom'
import ListItems from '../../containers/ListItems';
import UserForm from "../../containers/UserForm";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ListItems />}/>
            <Route path="/list" element={<ListItems />}/>
            <Route path="/form" element={<UserForm />}/>
        </Routes>
    );
}

export default AppRoutes;