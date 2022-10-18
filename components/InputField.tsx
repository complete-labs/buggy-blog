interface inputFieldProps {
    labelName: string;
    placeholderName: string;
    value: string | '';
    inputWidth?: string;
    onChange?: Function | null;
    icon?: any;
    type: string;
    disabled?: boolean;
    required?: boolean;
    rootClassName?: string;
  }
  
  export const InputField = (props: inputFieldProps) => {
  
    const handleChange = (e: any) => {
      if (props.onChange === null) {
        return;
      }
      if (props?.onChange) {
        props.onChange(e.target.value);
      }
    };
    return (
      <div className={`flex   first:mt-0 w-full`}>
        <div className="flex flex-col relative w-full">
          <input
            name={props.placeholderName}
            className={`peer focus:ring-0 p-2 bg-white placeholder-transparent  focus:outline-none  border-t-0 border-l-0 border-r-0  border-b-2 border-[#acb1b3] ${props.inputWidth}`
            }
            title={props.placeholderName}
            placeholder={props.placeholderName}
            onChange={(e) => handleChange(e)}
            value={props.value}
            type='text'
          
          />
          <label
            htmlFor={props.labelName}
            className=" transition-all absolute left-2   text-sm text-gray opacity-50 -top-3  
            peer-focus:-top-3.5 peer-focus:text-xs
             peer-placeholder-shown:top-2   peer-placeholder-shown:text-red"
          >
            {props.labelName}
          </label>
        </div>
      </div>
    );
  };
  