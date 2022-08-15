import React, { CSSProperties } from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";
import { OptionsAndGroupsType, OptionType } from "../../../../types";
import { AppProps } from "../../../../types/props";
import styles from "./Select.module.css";

interface SelectProps extends AppProps {
  id: string;
  label: string;
  options: OptionsAndGroupsType;
  isClearable?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  value?: OptionType[];
  onChange?: (val: SingleValue<any>, action: ActionMeta<any>) => void;
}

const Select = ({
  id,
  label,
  options,
  onChange,
  value,
  isClearable = false,
  isLoading = false,
  placeholder = "Select...",
  className = "",
}: SelectProps) => {
  const inputClass = styles.container + " " + className;

  return (
    <React.Fragment>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={inputClass}>
        <ReactSelect
          id={id}
          options={options}
          isClearable={isClearable}
          isLoading={isLoading}
          isSearchable={true}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          theme={(theme) => ({
            ...theme,
            // colors: {
            //   ...theme.colors,
            //   primary: "red",
            //   neutral20: "pink",
            //   neutral80: "lime",
            // },
            spacing: {
              ...theme.spacing,
              menuGutter: 4,
              controlHeight: 30,
              baseUnit: 2,
            },
          })}
        />
      </div>
    </React.Fragment>
  );
};

export default Select;
