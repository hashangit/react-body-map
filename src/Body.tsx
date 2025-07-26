import React, { memo, useCallback } from "react";
import { differenceWith } from "ramda";

import { bodyFront } from "./assets/bodyFront";
import { bodyBack } from "./assets/bodyBack";
import { SvgMaleWrapper } from "./components/SvgMaleWrapper";

const DEFAULT_COLORS = [
  '#5db8f5', // "Selected"
  '#0eac0e', // "Concerning"
  '#e6c327', // "Needs attention"
  '#f8556d', // "Critical"
];

export type Slug =
  | "abs-upper"
  | "abs-lower"
  | "abs-middle"
  | "adductors-left"
  | "adductors-right"
  | "adductors-left-front"
  | "adductors-right-front"
  | "adductors-left-back"
  | "adductors-right-back"
  | "ankles-left"
  | "ankles-right"
  | "ankles-left-front"
  | "ankles-right-front"
  | "ankles-left-back"
  | "ankles-right-back"
  | "biceps-left"
  | "biceps-right"
  | "calves-left"
  | "calves-right"
  | "calves-left-front"
  | "calves-right-front"
  | "calves-left-back"
  | "calves-right-back"
  | "chest-left"
  | "chest-right"
  | "deltoids-left-front"
  | "deltoids-right-front"
  | "deltoids-left-back"
  | "deltoids-right-back"
  | "feet-left"
  | "feet-right"
  | "feet-right-front"
  | "feet-left-front"
  | "feet-right-back"
  | "feet-left-back"
  | "forearm-left"
  | "forearm-right"
  | "forearm-left-front"
  | "forearm-right-front"
  | "forearm-left-back"
  | "forearm-right-back"
  | "gluteal-left"
  | "gluteal-right"
  | "hamstring-left"
  | "hamstring-right"
  | "hands-left"
  | "hands-right"
  | "hands-left-front"
  | "hands-right-front"
  | "hands-left-back"
  | "hands-right-back"
  | "head-front"
  | "head-back"
  | "knees-left"
  | "knees-right"
  | "lower-back-left"
  | "lower-back-right"
  | "hips-left"
  | "hips-right"
  | "neck-front"
  | "neck-left-front"
  | "neck-right-front"
  | "neck-left-back"
  | "neck-right-back"
  | "obliques-left"
  | "obliques-right"
  | "quadriceps-left"
  | "quadriceps-right"
  | "tibialis-left"
  | "tibialis-right"
  | "trapezius-left-front"
  | "trapezius-right-front"
  | "trapezius-left-back"
  | "trapezius-right-back"
  | "triceps-left"
  | "triceps-right"
  | "triceps-left-front"
  | "triceps-right-front"
  | "triceps-left-back"
  | "triceps-right-back"
  | "upper-back-left"
  | "upper-back-right";

export interface BodyPart {
  intensity?: number;
  color: string;
  slug: Slug;
  pathArray?: string[];
}

type Props = {
  colors?: ReadonlyArray<string>;
  data: ReadonlyArray<BodyPart>;
  scale: number;
  frontOnly: boolean;
  backOnly: boolean;
  side: "front" | "back";
  onBodyPartPress: (b: BodyPart) => void;
  //onBodyPartHover?: (slug: Slug | null) => void;
};

const comparison = (a: BodyPart, b: BodyPart) => a.slug === b.slug;

const Body = ({
  data,
  scale = 1,
  colors = DEFAULT_COLORS,
  side = "front",
  frontOnly,
  backOnly,
  onBodyPartPress,
}: Props) => {
  const mergedBodyParts = useCallback(
    (dataSource: ReadonlyArray<BodyPart>) => {
      const innerData = data
        .map((d) => {
          return dataSource.find((t) => {
            return t.slug === d.slug;
          });
        })
        .filter((d) => d !== undefined);

      const coloredBodyParts = innerData.map((d) => {
        const bodyPart = data.find((e) => e.slug === d!.slug);
        let colorIntensity = 1;
        if (bodyPart?.intensity) colorIntensity = bodyPart.intensity;
        return { ...d, color: colors[colorIntensity - 1] };
      });

      const formattedBodyParts = differenceWith(comparison, dataSource, data);

      return [...formattedBodyParts, ...coloredBodyParts];
    },
    [data, colors]
  );

  const getColorToFill = (bodyPart: BodyPart) => {
    let color;
    if (bodyPart.intensity && bodyPart.intensity > 0)
      color = colors[bodyPart.intensity - 1];
    else color = bodyPart.color;
    return color;
  };

  const renderBodySvg = (data: ReadonlyArray<BodyPart>) => {
    const SvgWrapper = SvgMaleWrapper;
    return (
      <SvgWrapper side={side} scale={scale}>
        {mergedBodyParts(data).map((bodyPart: BodyPart) => {
          if (bodyPart.pathArray) {
            return bodyPart.pathArray.map((path: string) => {
              return (
                <path
                  key={path}
                  onClick={() => onBodyPartPress?.(bodyPart)}
                  id={bodyPart.slug}
                  fill={getColorToFill(bodyPart)}
                  d={path}
                />
              );
            });
          }
        })}
      </SvgWrapper>
    );
  };

  const bodyData = frontOnly
    ? bodyFront
    : backOnly
    ? bodyBack
    : side === "front"
    ? bodyFront
    : bodyBack;

  return renderBodySvg(bodyData);
};

export default memo(Body); 