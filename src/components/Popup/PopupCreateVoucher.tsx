import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaVoucher } from "../../schema/schemaVoucher";
import { createVoucher, getAllVouchers } from "../../service/features/voucherSlice";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Autocomplete,TextField,Stack } from "@mui/material";
import instance from "../../service/api/customAxios";

type VoucherCreateState = {
    isPopupCreateVoucherOpen: boolean;
    closePopupCreateVoucher: () => void;
};

type VoucherCreateFormValues = {

};

const PopupCreateProduct: React.FC<VoucherCreateState> = ({
    isPopupCreateVoucherOpen,
    closePopupCreateVoucher
}) => {
    const dispatch = useAppDispatch();
    const [imageSend, setImageSend] = useState<File | null>(null);
    const [form, setForm]=useState(
        {
            "code": "",
            "name": "",
            "from": new Date(),
            "to": "",
            "minOrderValue": 1,
            "value": 1,
            "quantity": 1
          }
    )
    const [checkValid, setCheckValid]=useState({
        code: false,
        name: false,
        from: false,
        to: false,
        minOrderValue: false,
        value: false,
        quantity: false,

    })
    const validation = () => {
        setCheckValid(prev => ({
            ...prev,
            name: form.name.trim() === '',
            code: form.code.trim() === '',
            to: form.to.trim() === '',
            value: form.value.trim() === '',
            minOrderValue: form.minOrderValue.trim() === '',
            quantity: form.quantity.trim() === '',
        }));
    };
    const handleCreateProduct = async() =>{
        console.log(form.name)
        if(validation()) return;
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('code', form.code)
        formData.append('from', form.from)
        formData.append('to',form.to)
        formData.append('value',form.value)
        formData.append('minOrderValue',form.minOrderValue.toString())
        formData.append('value', form.value.toString())
        formData.append('quantity', form.quantity.toString())
        // await dispatch(createVoucher(formData))
        // await dispatch(getAllVouchers()).then(()=>{
        //     setForm({
        //         name:'',
        //         code: '',
        //     }) 
        //     closePopupCreateVoucher()
        // })
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
        isPopupCreateVoucherOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                <div className="relative p-6 bg-white border rounded-lg shadow-lg w-1/2">
                    <button
                        onClick={closePopupCreateVoucher}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                        <XMarkIcon width={24} height={24} />
                    </button>
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Create Voucher</h2>
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
                                <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code <span className="text-red-600 text-xl">*</span></label>
                                <input
                                    value={form.code} onChange={(e) => setForm(prev => ({...prev, code: e.target.value}))}                                   
                                    type="text"
                                    id="code"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                {checkValid.code && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From <span className="text-red-600 text-xl">*</span></label>
                                <input 
                                    value={form.from} onChange={(e) => setForm(prev => ({...prev, from: e.target.value}))}
                                    type="date"
                                    id="from"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                {checkValid.code && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                                </div>

                                <div className="mb-4">
                                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To <span className="text-red-600 text-xl">*</span></label>
                                <input 
                                    value={form.to} onChange={(e) => setForm(prev => ({...prev, to: e.target.value}))}
                                    type="date"
                                    id="to"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                {checkValid.code && <p className='text-red-500 text-xs mt-2'>This field is required!</p>}
                                </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Value</label>
                                <input 
                                    value={form.value} onChange={(e) => setForm(prev => ({...prev, value: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="value"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="minordervalue" className="block text-sm font-medium text-gray-700">Minimum Order Value</label>
                                <input value={form.minordervalue} onChange={(e) => setForm(prev => ({...prev, minordervalue: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input value={form.quantity} onChange={(e) => setForm(prev => ({...prev, quantity: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="quantity"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                        
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
