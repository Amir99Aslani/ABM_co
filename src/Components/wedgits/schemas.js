import * as yup from "yup";

export const baseicSchema = yup.object().shape({
  neighbourhood: yup.string().required("لطفا اطلاعات محله را وارد کنید"),
  street: yup.string().required("لطفا اطلاعات خیابان را وارد کنید"),
  block: yup.string().required("لطفا پلاک را وارد کنید"),
  floor: yup.string().required("شماره واحد را وارد کنید"),
  post_code: yup.string().required("لطفا کد پستی را وارد کنید"),
  phone_number: yup.number().required("لطفا شماره تلفن گیرنده را وارد کنید"),
});
