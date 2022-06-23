import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { DataTypeConfig } from "@kensho/adapter-react";

type NativeSelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export interface InputProps extends NativeSelectProps {
  label?: string | boolean;
  unbound?: boolean;
  datatype?: DataTypeConfig;
}

const capitalize = (value: string | undefined) => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const Select: FC<InputProps> = (props) => {
  props = {
    label:
      typeof props.label === "undefined" || props.label === true
        ? props.name
        : props.label,
    ...props,
  };

  const { label, unbound, datatype, ...rest } = props;

  let selectClass =
    "block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 focus:border-indigo-400 focus:ring-indigo-300 focus:ring-opacity-40  focus:outline-none focus:ring shadow-sm rounded-sm";

  if (!rest.multiple) selectClass = selectClass + " single";

  return (
    <div>
      {!label ? null : (
        <label
          className="text-gray-700 text-sm block text-sm font-medium"
          htmlFor={rest.name}
        >
          {capitalize(label as string)}
        </label>
      )}
      <select
        {...rest}
        data-unbound={unbound}
        data-datatype={datatype}
        className={selectClass}
      />
      <style jsx>{`
        select.single {
          --chevron: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23bbbbbb'><polygon points='12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414'/></svg>");
          -o-appearance: none;
          -ms-appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: var(--chevron) right 8px center no-repeat white;
        }
        select.single:hover {
          cursor: pointer;
          --chevron: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23444444'><polygon points='12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414'/></svg>");
        }
      `}</style>
    </div>
  );
};

export default Select;
