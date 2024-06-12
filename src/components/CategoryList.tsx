import { MRT_ColumnDef } from "material-react-table";
import { ICategory } from "../models/Category";
import { useAppDispatch, useAppSelector } from "../service/store/store";
import { useEffect, useState } from "react";
import { getAllCategories } from "../service/features/categorySlice";
import { Button, Stack } from "@mui/material";
import CommonTable from "./Table/CommonTable";
import PopupCreateCategory from "./Popup/PopupCreateCategory";
import PopupCategoryDetail from "./Popup/PopupCategoryDetail";
import PopupRenameCategory from "./Popup/PopupRenameCategory";

const columns: MRT_ColumnDef<ICategory>[] = [
  {
    accessorKey: "name",
    header: "Category Name",
  },

  {
    accessorKey: "targetAudience",
    header: "Target Audience",
  },
  {
    accessorKey: "ageRange",
    header: "Age Range",
  },
  {
    accessorKey: "milkType",
    header: "Milk Type",
  },
];

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [cateData, setCateData] = useState<ICategory | null>(null);
  const [onPopupCategoryDetail, setOnPopupCategoryDetail] =
    useState<boolean>(false);
  const [openPopupRename, setOpenPopupRename] = useState<boolean>(false);
  const [setSelectedCateId] = useState<string | null>(null);
  // const [selectedCateId, setSelectedCateId] = useState<string | null>(null);

  // useEffect(() => {
  //     dispatch(getAllCategories());
  // }, [dispatch]);

  useEffect(() => {
    if (!isPopupOpen) {
      dispatch(getAllCategories());
    }
  }, [isPopupOpen, dispatch]);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleShowCategoryDetail = (cate: ICategory) => {
    setCateData(cate);
    setOnPopupCategoryDetail(true);
  };

  const handleOpenPopupRenameCategory = (id: string) => {
    setSelectedCateId(id);
    setOpenPopupRename(true);
  };

  return (
    <Stack sx={{ m: "2rem 0" }}>
      <CommonTable
        columns={columns}
        data={categories || []}
        onRowDoubleClick={handleShowCategoryDetail}
        toolbarButtons={
          <Button
            variant="contained"
            onClick={handlePopupOpen}
            sx={{
              color: "black",
              backgroundColor: "pink",
            }}
          >
            Add categories
          </Button>
        }
      />

      <PopupCreateCategory
        isPopupOpen={isPopupOpen}
        closePopup={handlePopupClose}
      />
      {cateData && (
        <>
          <PopupCategoryDetail
            cate={cateData}
            onPopupDetail={onPopupCategoryDetail}
            setOnPopupDetail={setOnPopupCategoryDetail}
            onRename={() => handleOpenPopupRenameCategory(cateData.id)}
          />
          <PopupRenameCategory
            onClosePopupDetail={() => setOnPopupCategoryDetail(false)}
            open={openPopupRename}
            closePopup={() => setOpenPopupRename(false)}
            name={cateData?.name ?? ""}
            cateId={cateData.id}
          />
        </>
      )}

      {/* Update Status */}
    </Stack>
  );
};

export default CategoryList;
