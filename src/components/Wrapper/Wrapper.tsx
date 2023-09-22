import { FC, ReactNode } from "react";


interface WrapperProps {
  classes?: string;
  children: ReactNode;
}
export const Wrapper: FC<WrapperProps> = ({classes, children}) => {

  return (
    <div className={classes}>
      {children}
    </div>
  )
}