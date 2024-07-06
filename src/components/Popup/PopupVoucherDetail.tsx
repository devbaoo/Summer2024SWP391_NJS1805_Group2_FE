import { XMarkIcon } from '@heroicons/react/16/solid';
import { IVoucher } from '../../models/Voucher';
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import { useState, useEffect } from "react";
import { updateVoucher, getAllVouchers } from "../../service/features/voucherSlice";

type PopupVoucherDetailProps = {
    voucher: IVoucher | null;
    onPopupDetail: boolean;
    setOnPopupDetail: React.Dispatch<React.SetStateAction<boolean>>;
    isPopupCreateVoucherOpen: boolean;
    closePopupCreateVoucher: () => void;
}


const PopupVoucherDetail: React.FC<PopupVoucherDetailProps> = ({
    voucher,
    onPopupDetail,
    setOnPopupDetail,
    closePopupCreateVoucher
}) => {
    const dispatch = useAppDispatch();
    const [form, setForm]=useState(
        {
            "code": "",
            "name": "",
            "from": "",
            "to": "",
            "minOrderValue": 1,
            "value": 1,
            "quantity": 1,
            "thumbnailUrl": "string",
          }
    )
    const handleUpdateVoucher = async() =>{
        console.log(form)
        await dispatch(updateVoucher(form))
        await dispatch(getAllVouchers()).then(()=>{
            setForm({
                "code": "",
                "name": "",
                "from": "",
                "to": "",
                "minOrderValue": 1,
                "value": 1,
                "quantity": 1,
                "thumbnailUrl": "string",
            })
            closePopupCreateVoucher()
        })
    }
    return (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto ${onPopupDetail ? '' : 'hidden'
                }`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity"
                    aria-hidden="true"
                ></div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="bg-white-700 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full pb-2">
                                <div className="flex">
                                    <h3
                                        className="text-lg leading-6 w-full font-medium text-gray-900"
                                        id="modal-title"
                                    >
                                        Product Detail
                                    </h3>
                                    <XMarkIcon
                                        width={16}
                                        height={16}
                                        className="h-6 w-6 ml-auto cursor-pointer"
                                        onClick={() => setOnPopupDetail(false)}
                                    />
                                    <hr className="mt-2 text-black-700" />
                                </div>
                                <div className="mt-4 border-t grid grid-cols-2 gap-4 p-8">
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Name
                                        </span>
                                    </div>
                                <input value={form.name} onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}  
                                    type="text" 
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Code
                                        </span>
                                    </div>
                                <input value={form.code} onChange={(e) => setForm(prev => ({...prev, code: e.target.value}))}  
                                    type="text" 
                                    name="code"
                                    id="code"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            From
                                        </span>
                                    </div>
                                    <input 
                                    value={form.from} onChange={(e) => setForm(prev => ({...prev, from: e.target.value}))}
                                    type="date"
                                    id="from"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            To
                                        </span>
                                    </div>
                                    <input 
                                    value={form.to} onChange={(e) => setForm(prev => ({...prev, to: e.target.value}))}
                                    type="date"
                                    id="to"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Minimum Order Value
                                        </span>
                                    </div>
                                    <input value={form.minOrderValue} onChange={(e) => setForm(prev => ({...prev, minOrderValue: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="price"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Quantity
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                <input value={form.quantity} onChange={(e) => setForm(prev => ({...prev, quantity: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="quantity"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                            </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Voucher Value
                                        </span>
                                    </div>
                                    <input 
                                    value={form.value} onChange={(e) => setForm(prev => ({...prev, value: parseInt(e.target.value)}))}
                                    type="number" min={1}
                                    id="value"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Status
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.status}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Action
                                        </span>
                                    </div>
                                    <div className="w-auto flex gap-4">
                                        <button onClick={handleUpdateVoucher}
                                            className="text-xs w-24 border border-blue-500p-1 bg-blue-500 text-white font-bold rounded-lg"
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="text-xs w-24 border border-blue-500p-1 bg-red-500 text-white font-bold rounded-lg"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupVoucherDetail;
