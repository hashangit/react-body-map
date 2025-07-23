import React from "react";
export type Slug = "abs-upper" | "abs-lower" | "abs-middle" | "adductors-left" | "adductors-right" | "adductors-left-front" | "adductors-right-front" | "adductors-left-back" | "adductors-right-back" | "ankles-left" | "ankles-right" | "ankles-left-front" | "ankles-right-front" | "ankles-left-back" | "ankles-right-back" | "biceps-left" | "biceps-right" | "calves-left" | "calves-right" | "calves-left-front" | "calves-right-front" | "calves-left-back" | "calves-right-back" | "chest-left" | "chest-right" | "deltoids-left-front" | "deltoids-right-front" | "deltoids-left-back" | "deltoids-right-back" | "feet-left" | "feet-right" | "feet-right-front" | "feet-left-front" | "feet-right-back" | "feet-left-back" | "forearm-left" | "forearm-right" | "forearm-left-front" | "forearm-right-front" | "forearm-left-back" | "forearm-right-back" | "gluteal-left" | "gluteal-right" | "hamstring-left" | "hamstring-right" | "hands-left" | "hands-right" | "hands-left-front" | "hands-right-front" | "hands-left-back" | "hands-right-back" | "head-front" | "head-back" | "knees-left" | "knees-right" | "lower-back-left" | "lower-back-right" | "hips-left" | "hips-right" | "neck-front" | "neck-left-front" | "neck-right-front" | "neck-left-back" | "neck-right-back" | "obliques-left" | "obliques-right" | "quadriceps-left" | "quadriceps-right" | "tibialis-left" | "tibialis-right" | "trapezius-left-front" | "trapezius-right-front" | "trapezius-left-back" | "trapezius-right-back" | "triceps-left" | "triceps-right" | "triceps-left-front" | "triceps-right-front" | "triceps-left-back" | "triceps-right-back" | "upper-back-left" | "upper-back-right";
export interface BodyPart {
    intensity?: number;
    color: string;
    slug: Slug;
    pathArray?: string[];
}
type Props = {
    colors: ReadonlyArray<string>;
    data: ReadonlyArray<BodyPart>;
    scale: number;
    frontOnly: boolean;
    backOnly: boolean;
    side: "front" | "back";
    onBodyPartPress: (b: BodyPart) => void;
    onBodyPartHover?: (slug: Slug | null) => void;
};
declare const _default: React.MemoExoticComponent<({ data, scale, colors, side, onBodyPartPress, onBodyPartHover, }: Props) => React.JSX.Element>;
export default _default;
