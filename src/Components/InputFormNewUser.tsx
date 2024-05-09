import { IconType } from "react-icons";
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFormNewUserProps{
  placeholder: string;
  icon: IconType;
  type: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string | null;
}

export default function InputFormNewUser({placeholder, icon:Icon, type, register, errorMessage}:InputFormNewUserProps) {
  return (
    <div>
      <div className=" flex rounded-lg items-center gap-4 bg-transparent pl-3 border border-emerald-500">
        <i className=" text-xl text-[#BABABA]">
          <Icon/>
        </i>
        <input type={type} placeholder={placeholder} {...register} className=" text-[#BABABA] w-full h-10 bg-transparent focus:outline-none"/>
      </div>
      {errorMessage && <p className=" text-sm text-rose-500 font-medium">{errorMessage}</p>}
    </div>
  )
}
