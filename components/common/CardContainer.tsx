import { ReactNode } from "react";

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-[30px] rounded-[6px] min-w-[300px]">
      {children}
    </div>
  );
};
