# employees-csv-express
Express application that reads an emplooyes CSV data and return a JSON of the specific emplooye.

[![Rockstars][rockstars-shield]][rockstars-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/SaulPuentes/employees-csv-express">
    <img src="./images/enroute.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee CSV Express</h3>

  <p align="center">
    This project is part of the <b>Enroute | Rockstars G5</b> apprenticeship program 2020.
    <br />
    <a href="https://github.com/SaulPuentes/employees-csv-express"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://repl.it/@SaulPuentes/employees-csv-express">View Demo</a>
    ·
    <a href="https://github.com/SaulPuentes/employees-csv-express/issues">Report Bug</a>
    ·
    <a href="https://github.com/SaulPuentes/employees-csv-express/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#known-issues">Known Issues</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The project consist on a Node application that reads and outputs data from
a CSV file that match certain criteria or scenarios.

Required features:
- Read user input from CLI.
- Identify the first argument as the ID of the employee.
- Identify a second argument as a property of the employee.
- Output the required information.

Additional features:
- Can be converted into an executable script to run without prepending 
    the `file_name` with command `node`.
- Identifies more than one property.
- Outputs all information if no parameters are given.

### Built With

* [Nodejs](https://nodejs.dev)
* [JavaScript](https://www.javascript.com)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this script your local environment should have at least these
installations.
* [Nodejs](https://nodejs.dev)
* [Bash](https://www.gnu.org/software/bash)
* Linux/UNIX based OS

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/SaulPuentes/employees-csv-express.git
   ```
2. Change to the newly cloned directory.
   ```sh
   cd employees-csv-express/
   ```
3. Run the next command. See <a href="#usage">Usage</a> to learn how to use it.
   ```sh
   node bin/employeeQuery.js <ID> <PROPERTY_1>
   ```

**NOTE**: To run the app as a shell script follow the next steps

1. Change the file permision.
  ```sh
  chmod +x bin/employeeQuery.js
```

2. Run the commands wthout `node` and by prepending the `file_name` with `./` 
    (See the `.` dot before the slash `/`)
  ```sh
  bin/employeeQuery.js <ID> <PROPERTY_1>
  ```

<!-- USAGE EXAMPLES -->
## Usage

```sh
node bin/employeeQuery.js <ID> <PROPERTY_1> <PROPERTY_2> ...
```

- The `ID` values goes from `1` to `10`.
- The properties to choose from are:
  - `id`
  - `first_name`
  - `email`
  - `ip_address`

- Search for specific user by `ID` number.
  ```sh
  # Input
  node bin/employeeQuery.js 1

  # Output
  {
    id: '1',
    first_name: 'Giorgia',
    last_name: 'Tyne',
    email: 'gtyne0@deliciousdays.com',
    ip_address: '176.146.145.226'
  }
  ```

- Search for specific user by `property` value.
  ```sh
  # Input
  node bin/employeeQuery.js Giorgia last_name

  # Output 
  { first_name: 'Giorgia', last_name: 'Tyne' }
  ```

- Search for specific User data with more than one arguments.
  ```sh
  # Input
  node bin/employeeQuery.js Giorgia last_name email

  # Output 
  {
    first_name: 'Giorgia',
    last_name: 'Tyne',
    email: 'gtyne0@deliciousdays.com'
  }
  ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/SaulPuentes/employees-csv-express/issues) for a list of proposed features (and known issues).

<!-- KNOWN ISSUES -->
## Known Issues

- Queries only work with non-duplicate entries in the data. If there are duplicated 
    values, the application will only retrieve the information from the last 
    element found.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to 
be learn, inspire, and create. Any contributions you make are 
**greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/SaulPuentes/employees-csv-express/blob/main/LICENSE.md) for more information.

<!-- CONTACT -->
## Contact

**Saul Puentes** 

- LinkedIn: [@saul-puentes](https://www.linkedin.com/in/saul-puentes/)
- GitHub:   [@SaulPuentes](https://www.github.com/SaulPuentes)
- Twitter:   [@saulcodes](https://www.twitter.com/saulcodes)
- E-mail:   saul.puentess@gmail.com

Project Link: [Employee CSV Node](https://github.com/SaulPuentes/epmloyee-csv-node)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Enroute](https://www.enroutesystems.com)
* [Rodrigo Rodriguez](https://github.com/roier-rodriguez) | Enroute Systems

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[rockstars-shield]: https://img.shields.io/badge/Rockstar%20G5-Enroute-yellow?style=for-the-badge
[rockstars-url]: https://www.enroutesystems.com
[contributors-shield]: https://img.shields.io/github/contributors/SaulPuentes/employees-csv-express.svg?style=for-the-badge
[contributors-url]: https://github.com/SaulPuentes/employees-csv-express/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SaulPuentes/employees-csv-express.svg?style=for-the-badge
[forks-url]: https://github.com/SaulPuentes/employees-csv-express/network/members
[stars-shield]: https://img.shields.io/github/stars/SaulPuentes/employees-csv-express.svg?style=for-the-badge
[stars-url]: https://github.com/SaulPuentes/employees-csv-express/stargazers
[issues-shield]: https://img.shields.io/github/issues/SaulPuentes/employees-csv-express.svg?style=for-the-badge
[issues-url]: https://github.com/SaulPuentes/employees-csv-express/issues
[license-shield]: https://img.shields.io/badge/license-MIT-red?style=for-the-badge
[license-url]: https://github.com/SaulPuentes/employee-csv-express/blob/main/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/saul-puentes/
[product-screenshot]: ./images/screenshot.png
