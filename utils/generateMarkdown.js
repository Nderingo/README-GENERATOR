const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
const APACHE = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const BSD = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenseType) {
  if (licenseType === 'MIT') {
    return MIT;
  } else if (licenseType === 'GPL 3.0') {
    return GNU;
  } else if (licenseType === 'APACHE 2.0') {
    return APACHE;
  } else if (licenseType === 'BSD 3') {
    return BSD;
  } else if (licenseType === 'NONE') {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseType) {
  if (licenseType === 'MIT License') {
    return `[This application is licensed under MIT](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === 'Apache License 2.0') {
    return `[This application is licensed under Apache]((https://opensource.org/licenses/Apache-2.0))`;
  } else if (licenseType === 'GPL') {
    return `[This application is licensed under GPL](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseType === 'BSD 3') {
    return `[This application is licensed under BSD](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) {
  if (licenseType) {
    return `This application is covered under the ${licenseType} license.`;
  } else {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(licenseType) {
  return `${renderLicenseSection(licenseType)}
  ${renderLicenseBadge(licenseType)}
  ${renderLicenseLink(licenseType)}`;
}

module.exports = generateMarkdown;
