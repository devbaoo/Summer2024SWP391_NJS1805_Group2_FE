// SidebarComponent.tsx
import { Link, useLocation } from 'react-router-dom';
import menu from './listMenu';

const SidebarComponent = () => {
    const location = useLocation();
    const activeMenuItem = menu.storeManagementMenu.find(item => item.url === location.pathname);

    return (
        <div className='flex'>
            <div className="w-56 bg-pink-200 fixed h-full">
                <div className='my-2 mb-4'>
                    <h1 className="text-2xl font-bold ml-4 text-pink-800">
                        {activeMenuItem ? activeMenuItem.title : 'Admin Dashboard'}
                    </h1>
                </div>
                <hr />
                <ul className='mt-3 text-pink-800 font-bold'>
                    {menu.storeManagementMenu.map((item, index) => (
                        <Link to={item.url} key={index} className=''>
                            <li className={`ml-4 mb-2 gap-6 rounded hover:shadow hover:bg-pink-300 py-2 cursor-pointer flex ${item.url === location.pathname ? 'text-pink-500' : ''}`}>
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SidebarComponent;
