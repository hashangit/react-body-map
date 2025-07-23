import * as React from "react";
type SvgWrapperProps = {
    children: React.ReactNode;
    scale: number;
    side: "front" | "back";
    gender?: "male" | "female";
};
export declare const SvgMaleWrapper: React.FC<SvgWrapperProps>;
export {};
