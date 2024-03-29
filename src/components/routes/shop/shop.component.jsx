import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../redux-store/categories/category.action";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route
        path=":category"
        element={<Category />}
      />
    </Routes>
  );
};
export default Shop;
