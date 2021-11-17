<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.kushim.vc/">
    <img src="https://www.kushim.vc/assets/img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Kushim Coding Test</h3>

  <p align="center">
    A Walkthrough for the Kushim coding test
    <br />
    <br />
    <br />
  </p>
</div>



<!-- ABOUT THE PROJECT [![Product Name Screen Shot][product-screenshot]](https://example.com)
-->
## About The Project


For this exercise, we need to connect to an API, get data, store them and display them to the user.
*  Get a free API key on Fixer.io
*  Create a React Native App
*  Create a first page to let the user select his currency and the desired currency and input the amount to exchange (USD, EUR, RSD)
For instance 100 000€ to be USD 118989,00.
*  Get the value from Fixer.io
*  All currency conversion logic should be implemented in React Native for android and iOS respectively




### Built With

The project is built using the following frameworks/libraries

* [React-Native](https://reactnative.dev/)
* [Axios](https://github.com/axios/axios/)
* [React-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)

<!-- GETTING STARTED -->
## Getting Started
You need to have already [Setup the developement environement](https://reactnative.dev/docs/environment-setup) for react native

Please follow these instructions in order to get started with the project and test it.

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/wassimbrsimo/KushimCodingTest
   ```
3. Move to project directory and install NPM packages
   ```sh
   cd KushimCodingTest && npm install
   ```
4. Enter the API key in `Config/config.js`
   ```js
   const KEY = 'PUT API KEY HERE';
   ```

### Run (IOS)

1. Install pods for IOS
   ```sh
    cd ios && pod install
   ```
1. Run iOS 
   ```sh
   npx react-native run-ios
   ```

### Run (Android)

Launch the KushimCodingTest/android project on android studio for the first time and run the project

to build the project using commands make sure you run the android emulator before running the android build using the following :

1. Run Android 
   ```sh
   npx react-native run-android
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Progress

- [x] Basic Conversion Request
- [x] Weekly Conversion Request
- [x] Weekly Graph Display
- [x] Readme instructions



[product-screenshot]: images/screenshot1.png
[product-screenshot2]: images/screenshot2.png
