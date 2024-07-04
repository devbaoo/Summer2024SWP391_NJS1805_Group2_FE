import { XMarkIcon } from '@heroicons/react/16/solid';
import { IVoucher } from '../../models/Voucher';

type PopupVoucherDetailProps = {
    voucher: IVoucher | null;
    onPopupDetail: boolean;
    setOnPopupDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupVoucherDetail: React.FC<PopupVoucherDetailProps> = ({
    voucher,
    onPopupDetail,
    setOnPopupDetail,
}) => {
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
                                    <div>
                                        <span>{voucher?.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Code
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.code}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            From
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.from}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            To
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.to}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Minimum Order Value
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.minordervalue}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Quantity
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.quantity}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-back-500 font-bold">
                                            Voucher Value
                                        </span>
                                    </div>
                                    <div>
                                        <span>{voucher?.value}</span>
                                    </div>
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
                                        <button
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
