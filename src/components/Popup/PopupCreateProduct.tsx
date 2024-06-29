import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProduct } from "../../schema/schemaProduct";
import { createProduct, getAllProducts } from "../../service/features/productSlice";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Autocomplete,TextField,Stack } from "@mui/material";
import instance from "../../service/api/customAxios";

type ProductCreateState = {
    isPopupCreateProductOpen: boolean;
    closePopupCreateProduct: () => void;
};

type ProductCreateFormValues = {
    name: string;
    origin: string;
    brand: string;
    ingredient: string;
    sweetLevel: string;
    flavour: string;
    sample: string;
    capacity: string;
    description: string;
    price: number;
    quantity: number;
    storeId: number;
    expireAt: Date;
    status: string;
};

const PopupCreateProduct: React.FC<ProductCreateState> = ({
    isPopupCreateProductOpen,
    closePopupCreateProduct
}) => {
    const dispatch = useAppDispatch();
    const [imageSend, setImageSend] = useState<File | null>(null);
    const [form, setForm]=useState({
        name:'',
        description:'',
        origin:'',
        thumbnail: null as string | null,
        madeIn:'',
        brand:'Vinamilk',
        price: 1,
        promotionPrice: 1,
        quantity: 1,
        productCategories: [{ categoryId: ""}]
    })
    const [checkValid, setCheckValid]=useState({
        name: false,
        origin: false,
        thumbnail: false,
        madeIn: false,
    })
    const validation = () =>{
        setCheckValid(prev => ({...prev, name: form.name.trim() === '',
            origin: form.origin.trim() === '',
            madeIn: form.madeIn.trim() === '',
            thumbnail: form.thumbnail === null
        }))
        return form.name.trim() === '' || form.origin.trim() === '' || form.madeIn.trim() === ''
        || form.thumbnail === null
    }
    const handleCreateProduct = async() =>{
        if(validation()) return;
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('description', form.description)
        imageSend && formData.append('thumbnail', imageSend)
        formData.append('origin', form.origin)
        formData.append('madeIn',form.madeIn)
        formData.append('brand',form.brand)
        formData.append('price',form.price.toString())
        formData.append('promotionPrice', form.promotionPrice.toString())
        formData.append('quantity', form.quantity.toString())
        formData.append('productCategories', JSON.stringify(form.productCategories))
        await dispatch(createProduct(formData))
        await dispatch(getAllProducts()).then(()=>{
            setForm({
                name:'',
                description:'',
                origin:'',
                thumbnail: null,
                madeIn:'',
                brand:'Vinamilk',
                price: 1,
                promotionPrice: 1,
                quantity: 1,
                productCategories: [{ categoryId: ""}]
            })
            closePopupCreateProduct()
        })
    }

    const [productCategories, setProductCategories] = useState([])
    const loadProductCategories = async() =>{
        await instance.post('/categories/filter', {})
        .then(res => {
            const list = res.data.data.map((item: {
                id: string,
                name: string
              }) => ({label: item.name, value: item.id}))
            setProductCategories(list)
            setForm(prev => ({...prev, productCategories: list[0]}))
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{loadProductCategories()},[])
    return (
        isPopupCreateProductOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                <div className="relative p-6 bg-white border rounded-lg shadow-lg w-1/2">
                    <button
                        onClick={closePopupCreateProduct}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                        <XMarkIcon width={24} height={24} />
                    </button>
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Create Product</h2>
                    </div>
                    <div className="overflow-y-scroll h-96 w-auto">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-600 text-xl">*</span></label>
                                <input
                                    value={form.name} onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                {checkValid.name && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin <span className="text-red-600 text-xl">*</span></label>
                                {/* <input value={form.origin} onChange={(e) => setForm(prev => ({...prev, origin: e.target.value}))}
                                    type="text"
                                    name="origin"
                                    id="origin"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                /> */}
                                <Autocomplete options={['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']} value={form.brand}
                                disablePortal disableClearable size='small'
                                onChange={(e, value) => setForm(prev => ({...prev, origin: value}))}
                                renderInput={(params) => <TextField {...params} />} />
                                {checkValid.origin && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                                </div>
                            <div className="mb-4">
                                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Made in <span className="text-red-600 text-xl">*</span></label>
                                <input value={form.madeIn} onChange={(e) => setForm(prev => ({...prev, madeIn: e.target.value}))}
                                    type="text"
                                    name="madeIn"
                                    id="madeIn"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                {checkValid.madeIn && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                                </div>
                            <div className="mb-4">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Product category</label>
                               {productCategories.length>0 && <Autocomplete multiple options={productCategories}
                                    size='small' filterSelectedOptions
                                    onChange={(event, value) => {
                                        const newList = value.map((item: {label: string, value: string}) => ({categoryId: item.value}))
                                        setForm(prev => ({...prev, productCategories: newList}))
                                    }}
                                    renderInput={(params) => ( <TextField {...params} placeholder="Select multiple categories" /> )} />}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                                <Autocomplete options={['Vinamilk','TH True milk','Nutricare','Dutch Lady','NutiFood']} value={form.brand}
                                disablePortal disableClearable size='small'
                                onChange={(e, value) => setForm(prev => ({...prev, brand: value}))}
                                renderInput={(params) => <TextField {...params} />} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <input value={form.description} onChange={(e) => setForm(prev => ({...prev, description: e.target.value}))}
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                <input value={form.price} onChange={(e) => setForm(prev => ({...prev, price: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    name="price"
                                    id="price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Promotion price</label>
                                <input value={form.price} onChange={(e) => setForm(prev => ({...prev, promotionPrice: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    name="price"
                                    id="price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input value={form.quantity} onChange={(e) => setForm(prev => ({...prev, quantity: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    name="quantity"
                                    id="quantity"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Thumbnail <span className="text-red-600 text-xl">*</span></label>
                            {checkValid.thumbnail && <p className='text-red-500 text-xs mt-2'>Thumbnail is required!</p>}
                            {form.thumbnail === null || form.thumbnail === "" ? (
                                <img
                                    className="h-4/5 w-[40%]"
                                    src="https://cdn3.iconfinder.com/data/icons/online-states/150/Photos-512.png"
                                />
                                ) : (
                                <img
                                    alt="thumbnail-img"
                                    src={form.thumbnail}
                                    className="w-[50%] my-6"
                                />
                                )}
                            <Stack direction="row" spacing={2}>
                                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                                    onClick={() => {
                                        const fileInput = document.getElementById("fileInput");
                                        if (fileInput) {
                                        (fileInput as HTMLInputElement).click();
                                        }
                                    }}>Upload image</button>
                                <input id="fileInput" type="file" hidden={true} accept=".jpg, .jpeg, .png"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const files = e.target.files;
                                        if (files && files.length > 0) {
                                        const file = files[0];
                                        setForm(prev => ({
                                            ...prev,
                                            thumbnail: URL.createObjectURL(file)
                                        }));
                                        setImageSend(file);
                                        }
                                    }}
                                />
                                {form.thumbnail && (
                                    <button  onClick={() => {
                                        setForm(prev => ({ ...prev, thumbnail: null }));
                                        setImageSend(null);
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                    Clear image
                                </button>
                                )}
                </Stack>
                            <div className="flex justify-end">
                                <button onClick={handleCreateProduct}
                                    className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
                                    Create
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default PopupCreateProduct;
