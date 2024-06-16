
const Footer = () => {
    return (


        <footer className="bg-pink-300 shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">SuaMe88™</a>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-700 dark:text-gray-400 sm:mt-0 gap-8 font-bold">
                    <li>
                        <a href="#" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">About US</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Policy & Term</a>
                    </li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer