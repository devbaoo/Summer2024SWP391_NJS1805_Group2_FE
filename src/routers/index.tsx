import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../service/store/store';
import Login from '../pages/client/Login';
import Register from '../pages/client/Register';
import Dashboard from '../pages/StoreManager/Dashboard';
import CategoryManagement from '../pages/StoreManager/CategoryManagement';
import Home from '../pages/client/Home';
import ProductDetails from '../components/Product/ProductDetails';
import ProductManagement from '../pages/StoreManager/ProductManagement';

const AppRouter = () => {
    const token = sessionStorage.getItem('suame88');
    const { account } = useAppSelector((state) => state.auth);

    const isStoreOwner = account?.userResult.role.includes('StoreOwner');
    const isCustomer = account?.userResult.role.includes('Customer');

    if (!token || !account) {
        return (
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            {isStoreOwner && (
                <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/category-management" element={<CategoryManagement />} />
                    <Route path="/product-management" element={<ProductManagement />} />
                </>
            )}
            {isCustomer && (
                <>
                    <Route path="/home" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </>
            )}
            <Route path="*" element={<Navigate to={isCustomer ? "/home" : "/dashboard"} replace />} />
        </Routes>
    );
};

export default AppRouter;
