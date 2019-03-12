<img alt="React Native Custom Icon" src="https://github.com/WrathChaos/react-native-custom-icon/blob/master/assets/Screenshots/logo.png" width="1050"/>

Custom Icon Lib for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-custom-icon.svg)](https://www.npmjs.com/package/react-native-custom-icon)
[![npm](https://img.shields.io/npm/dt/react-native-custom-icon.svg)](https://www.npmjs.org/package/react-native-custom-icon)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Custom Icon" src="https://github.com/WrathChaos/react-native-custom-icon/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>

## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-custom-icon
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.x.x"
```

## Basic Usage

```ruby
import MyIcon from "react-native-custom-icon";
import IcomoonConfig from "./assets/icomoon/selection.json";


<MyIcon name="fireworks" color="red" size={50} config={IcomoonConfig} />
```

## Documentation
<a href="Medium Article: https://freakycoder.com/react-native-library-react-native-custom-icon-1ec0b734d691">
<img alt="React Native Custom Icon" src="https://github.com/WrathChaos/react-native-custom-icon/blob/master/assets/Screenshots/Wordmark_Black.png" width="175" height="45"/>
</a>

#### Read how to use react-native-custom-icon on Medium blog. DO NOT FORGET to implement your .ttf file on iOS and Android original files!



### Configuration - Props


| Property |  Type  | Default | Description                                                         |
| -------- | :----: | :-----: | ------------------------------------------------------------------- |
| name     | string |  null   | use this to set icon's name                                         |
| color    | color  |  null   | use this to set icon's color                                        |
| size     | number |   16    | use this to change icon's size                                      |
| config   |  JSON  |  null   | must use this to provide which config and data to use as IconConfig |


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Custom Icon Library is available under the MIT license. See the LICENSE file for more info.
