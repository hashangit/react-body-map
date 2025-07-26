# React Body Map

[![npm](https://img.shields.io/npm/v/react-body-map)](https://www.npmjs.com/package/react-body-map)
[![npm](https://img.shields.io/npm/dt/react-body-map)](https://www.npmjs.com/package/react-body-map)

A versatile and interactive body map component for React and Next.js applications. Allows for easy selection, highlighting, and annotation of body parts.

## Features

-   **Interactive Body Map**: Click to select and deselect body parts.
-   **Front and Back Views**: Easily toggle between front and back views of the body.
-   **Customizable Colors**: Define your own color scheme for different intensity levels.
-   **Scalable**: Zoom in and out of the body map.
-   **TypeScript Support**: Fully typed for a better development experience.

## Installation

```bash
pnpm add react-body-map
```

## Usage

Here's a simple example of how to use the `Body` component:

```jsx
import React, { useState } from 'react';
import { Body, BodyPart, Slug } from 'react-body-map';

const App = () => {
    const [selectedParts, setSelectedParts] = useState<BodyPart[]>([]);

    const handlePartClick = (part: { slug: Slug; intensity?: number }) => {
        const { slug } = part;
        const newSelectedParts = [...selectedParts];
        const existingPartIndex = newSelectedParts.findIndex((p) => p.slug === slug);

        if (existingPartIndex !== -1) {
            // Deselect part
            newSelectedParts.splice(existingPartIndex, 1);
        } else {
            // Select part
            newSelectedParts.push({ slug, intensity: 1 });
        }
        setSelectedParts(newSelectedParts);
    };

    return (
        <div>
            <Body
                parts={selectedParts}
                onPartPress={handlePartClick}
            />
        </div>
    );
};

export default App;
```

For a more advanced example with a notes UI, intensity selection, and more, please see the [example directory](./example) in the repository.

## Props

| Prop          | Required | Type                                     | Description                                                                                |
| ------------- | -------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| `parts`       | Yes      | `BodyPart[]`                             | An array of `BodyPart` objects to highlight.                                               |
| `onPartPress` | No       | `(bodyPart: BodyPart) => void`           | A callback function that is triggered when a body part is clicked.                         |
| `colors`      | No       | `string[]`                               | An array of colors to use for different intensity levels. Defaults to a four-color scheme. |
| `side`        | No       | `'front' │ 'back'`                       | The side of the body to display. Defaults to `'front'`.                                    |
| `scale`       | No       | `number`                                 | The scale of the SVG. Defaults to `1`.                                                     |
| `frontOnly`   | No       | `boolean`                                | If `true`, only the front view will be displayed.                                          |
| `backOnly`    | No       | `boolean`                                | If `true`, only the back view will be displayed.                                           |

## `BodyPart` Object

The `BodyPart` object has the following structure:

-   `slug`: The name of the body part to highlight.
-   `intensity`: A number from 1 to `colors.length` that determines which color to use.

A full list of available body parts can be found in [bodyFront.ts](./src/assets/bodyFront.ts) and [bodyBack.ts](./src/assets/bodyBack.ts).

## License

This project is licensed under the MIT License.
