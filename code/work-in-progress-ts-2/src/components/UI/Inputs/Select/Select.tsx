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

  // const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  //   control: (provided, state) => {
  //     const { selectProps } = state;
  //     // provided has CSSObject type
  //     // state has ControlProps type

  //     // return type is CSSObject which means this line will throw
  //     // error if uncommented
  //     // return false;

  //     return {
  //       ...provided,
  //       ...customControlStyles,
  //     };
  //   },
  // };

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
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "red",
              neutral20: "pink",
              neutral80: "lime",
            },
          })}
        />
      </div>
    </React.Fragment>
  );
};

export default Select;
