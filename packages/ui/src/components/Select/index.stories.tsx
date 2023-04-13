import React from "react";
import Select, { Select2 } from "./Select";

export default {
  title: "Atoms/Select",
};

export const Default = () => (
  <div>
    <Select id="select" label="Time zone" value="America/Bogota -5:00" />
    <Select2 />
  </div>
);
