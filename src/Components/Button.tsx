import { btnProps } from "../utils/types"
import { twMerge } from "tailwind-merge"
const Button = ({children,className, onClick}:btnProps) => {
  return (
    <button onClick={onClick} className={twMerge("border-[1px] border-black px-10 py-2 hover:bg-black/85 hover:text-white",className)}>{children}</button>
  )
}

export default Button