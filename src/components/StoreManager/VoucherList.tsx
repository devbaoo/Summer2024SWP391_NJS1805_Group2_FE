import { MRT_ColumnDef } from "material-react-table";
import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../service/store/store";
import CommonTable from "../Table/CommonTable";
import { IVoucher } from "../../models/Voucher";
import PopupCreateProduct from "../Popup/PopupCreateProduct";
import { getAllVouchers } from "../../service/features/voucherSlice";
import PopupVoucherDetail from "../Popup/PopupVoucherDetail";

const columns: MRT_ColumnDef<IVoucher>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "code",
        header: "Code",
    },

    {
        accessorKey: "from",
        header: "From",
    },
    {
        accessorKey: "to",
        header: "To",
    },
    {
        accessorKey: "minOrderValue",
        header: "Minimum Order Value",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "value",
        header: "Voucher Value",
    },    
    {
        accessorKey: "status",
        header: "Status",
    }, 
];
    
<button>Edit</button>

const VoucherList = () => {
    const dispatch = useAppDispatch();
    const { vouchers } = useAppSelector((state) => state.vouchers);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [voucherData, setVoucherData] = useState<IVoucher | null>(null);
    const [onPopupVoucherDetail, setOnPopupVoucherDetail] = useState<boolean>(false);
    console.log(vouchers);
    // Create   


    useEffect(() => {
        if (!isPopupOpen) {
            dispatch(getAllVouchers());
        }
    }, [isPopupOpen, dispatch]);

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };
    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };


    const handleShowVoucherDetail = (pro: IVoucher) => {
        setVoucherData(pro);
        setOnPopupVoucherDetail(true);
    };

    return (
        <Stack sx={{ m: "2rem 0" }}>
            <CommonTable
                columns={columns}
                data={vouchers || []}
                onRowDoubleClick={handleShowVoucherDetail}
                toolbarButtons={
                    <Button
                        variant="contained"
                        onClick={handlePopupOpen}
                        sx={{
                            color: "black",
                            backgroundColor: "pink",
                        }}
                    >
                        Add New Voucher
                    </Button>
                }
            />
            <PopupCreateVoucher
                isPopupCreateVoucherOpen={isPopupOpen}
                closePopupCreateVoucher={handlePopupClose}
            />
            {voucherData && (
                <PopupVoucherDetail
                    voucher={voucherData}
                    onPopupDetail={onPopupVoucherDetail}
                    setOnPopupDetail={setOnPopupVoucherDetail}
                />
            )}
        </Stack>
    );
};

export default VoucherList;
