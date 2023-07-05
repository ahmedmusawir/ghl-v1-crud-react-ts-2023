import { Container, Row, Box } from "../components/layouts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import useAppointments from "../hooks/useAppointments";
import Spinner from "../components/ui-ux/Spinner";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} from "../RTK_APPOINTMENTS/services/dummyTriggerApi";

const RtkTestPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // ALL PRODUCTS
  const { data: allProducts, isFetching: isFetchingAllProducts } =
    useGetAllProductsQuery();
  //   console.log("Dummy Json Data:", allProducts?.products);

  // SINGLE PRODUCT
  const { data: singleProduct } = useGetSingleProductQuery(51);
  //   console.log("Dummy Json Data:", singleProduct);

  // CATEGORIES ARRAY
  const { data: categories } = useGetProductCategoriesQuery();
  //   console.log("Dummy Json Data:", categories);

  // CATEGORIES ARRAY
  const { data: productByCats } = useGetProductByCategoryQuery("laptops");
  console.log("Dummy Json Data:", productByCats?.products);

  if (isFetchingAllProducts) return <Spinner />;

  return (
    <Container className={""} FULL pageTitle={"Appointments"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Appointments</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"flex p-1"}>
        <Box className={"flex-1 border bg-gray-100 prose max-w-none px-3"}>
          <Box className="">
            <h2>Get All Products</h2>
            <hr />
            <pre>{allProducts && JSON.stringify(allProducts, null, 2)}</pre>
          </Box>
          <Box className="">
            <h2>Get Single Product</h2>
            <hr />
            <pre>{allProducts && JSON.stringify(singleProduct, null, 2)}</pre>
          </Box>
          <Box className="">
            <h2>Get Categories</h2>
            <hr />
            <pre>{allProducts && JSON.stringify(categories, null, 2)}</pre>
          </Box>
          <Box className="">
            <h2>Get Products by Category</h2>
            <hr />
            <pre>
              {allProducts && JSON.stringify(productByCats?.products, null, 2)}
            </pre>
          </Box>
        </Box>
      </Row>
    </Container>
  );
};

export default RtkTestPage;
