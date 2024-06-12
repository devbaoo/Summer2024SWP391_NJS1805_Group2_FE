import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../service/store/store';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CategoryManagement from '../pages/CategoryManagement';

const AppRouter = () => {
    const token = sessionStorage.getItem('quickServeToken');
    const { account } = useAppSelector((state) => state.auth);



    return (
        <Routes>
            {token === null || account === null ? (
                <>
                    <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                    <Route path='/register' element={<Register />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/category-management' element={<CategoryManagement />} />

                </>
            ) : <>
            </>
            }
        </Routes>
    );
};

export default AppRouter;
