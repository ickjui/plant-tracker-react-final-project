import React from "react";
import { DatePicker } from "@atlaskit/datetime-picker";

//information is not being stored in state - likely has other values that we can pass to
//store state - pass the date that is captured once it is change
const DatePickerDisableRangeExample = () => (
  <DatePicker defaultValue="2021-10-11" />
);

export default DatePickerDisableRangeExample;
