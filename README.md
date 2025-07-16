# react-native-body-highlighter

[![npm](https://img.shields.io/npm/v/react-native-body-highlighter.svg)](https://www.npmjs.com/package/react-native-body-highlighter) [![Downloads](https://img.shields.io/npm/dt/react-native-body-highlighter.svg)](https://www.npmjs.com/package/react-native-body-highlighter)
[![CircleCI](https://circleci.com/gh/HichamELBSI/react-native-body-highlighter.svg?style=svg)](https://circleci.com/gh/HichamELBSI/react-native-body-highlighter)

> SVG human body parts highlighter for react-native (Expo and Web compatible).

<div style="text-align:center;width:100%;">
  <img src="./docs/screenshots/example-female-front.PNG" width="150" alt="body-highlighter" />
  <img src="./docs/screenshots/example-female-back.PNG" width="150" alt="body-highlighter" />
  <img src="./docs/screenshots/example-male-front.PNG" width="150" alt="body-highlighter" />
  <img src="./docs/screenshots/example-male-back.PNG" width="150" alt="body-highlighter" />
</div>

## Installation

npm

```bash
$ npm install react-native-body-highlighter
```

pnpm

```bash
$ pnpm add react-native-body-highlighter
```

yarn

```bash
$ yarn add react-native-body-highlighter
```

## Web Example

This repository contains a Next.js example in the `pages` directory. To run it, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/HichamELBSI/react-native-body-highlighter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-native-body-highlighter
   ```
3. Install dependencies (pnpm is recommended):
   ```bash
   pnpm install
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the example.

## Usage

### Basic example

```jsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Body, { BodyPart } from "react-native-body-highlighter";

const App = () => {
  const [data, setData] = useState<BodyPart[]>([
    { slug: "chest-left", intensity: 1, color: "" },
    { slug: "abs-upper", intensity: 2, color: "" },
  ]);

  const onBodyPartPress = (bodyPart: BodyPart) => {
    const isSelected = data.find((item) => item.slug === bodyPart.slug);
    if (isSelected) {
      setData(data.filter((item) => item.slug !== bodyPart.slug));
    } else {
      setData([...data, { ...bodyPart, intensity: 1, color: "" }]);
    }
  };

  return (
    <View style={styles.container}>
      <Body
        data={data}
        onBodyPartPress={onBodyPartPress}
        gender="female"
        side="front"
        scale={1.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
```

## Props

| Prop            | Required | Purpose                                                                                                                  |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| data            | Yes      | `BodyPart[]` - Array of `BodyPart` to highlight                                                              |
| onBodyPartPress | No       | `Func` - (bodyPart: BodyPart) => {} Callback called when a user tap a body part                                    |
| colors          | No       | `String[]` - Defaults to `['#0984e3', '#74b9ff']`                                                                        |
| side            | No       | `string` - Can be "back" or "front", Defaults to `front`                                                                 |
| gender          | No       | `string` - Can be "male" or "female", Defaults to `male` - :warning: Please consider `female` as a beta work in progress |
| scale           | No       | `Float` - Defaults to `1`                                                                                                |

## BodyPart object model

- #### BodyPart : `{ slug: Slug, intensity?: number, color: string }`

- #### Slug : Body part name to highlight (See the list of available body parts below)

- #### intensity : Color intensity (if the `colors` property is set: from 1 to `colors.length`. If not, intensity can be 1 or 2)

- #### color: A string to override the color from the `colors` array.

## List of body parts

| BodyParts       | Side  |
| --------------- | ----- |
| trapezius       | Both  |
| triceps         | Both  |
| forearm         | Both  |
| obliques        | Both  |
| adductors       | Both  |
| calves          | Both  |
| head            | Both  |
| neck            | Both  |
| deltoids        | Both  |
| hands           | Both  |
| feet            | Both  |
| ankles          | Both  |
| tibialis        | Both  |
| chest           | Front |
| biceps          | Front |
| abs             | Front |
| upper-back      | Back  |
| lower-back      | Back  |
| hamstring       | Back  |
| gluteal         | Back  |
