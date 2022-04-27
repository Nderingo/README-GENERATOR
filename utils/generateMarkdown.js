// const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
// const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
// const APACHE = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
// const BSD = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenseType) {
  console.log(licenseType);
  if (licenseType === 'MIT license') {
    return `'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseType === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'`;
  } else if (licenseType === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseType) {
  if (licenseType === 'MIT License') {
    return `[This application is licensed under MIT](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === 'Apache License 2.0') {
    return `[This application is licensed under Apache]((https://opensource.org/licenses/Apache-2.0))`;
  } else if (licenseType === 'GPL 3.0') {
    return `[This application is licensed under GPL](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseType === 'Boost Software License 1.0') {
    return `[This application is licensed under Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) {
  if (licenseType == 'none') {
    return ``;
  } else { 
    return `## License `;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(licenseType) {
  return `${renderLicenseSection(licenseType)}
  ${renderLicenseBadge(licenseType)}
  ${renderLicenseLink(licenseType)}`;
}

module.exports = generateMarkdown;
