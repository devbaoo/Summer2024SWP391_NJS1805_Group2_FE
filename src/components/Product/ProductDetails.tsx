import { useParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { getProductById } from "../../service/features/productSlice";
import { useEffect } from "react";


const ProductDetails = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const { product } = useAppSelector((state) => state.products);
    const productId = params.id && parseInt(params.id) as number;


    useEffect(() => {
        if (productId) {
            dispatch(getProductById({ id: productId }));
        }
    }, [dispatch, productId])


    return (
        <>
            <section>
                <Header />
            </section>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src="https://lzd-img-global.slatic.net/g/p/a76230e0f618381db919783fd72ac32c.jpg_320x320.jpg_550x550.jpg"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product?.brand}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>
                            <p>{product?.description}</p>
                            <span className="title-font font-medium text-base text-gray-900">Quantity: {product?.quantity} </span>

                            <div className="flex mt-10">
                                <span className="title-font font-medium text-2xl text-gray-900">$ {product?.price}</span>
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    );
}

export default ProductDetails;
