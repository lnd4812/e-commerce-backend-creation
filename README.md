

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Title

e-commerce-back-end-creation

## Description

This program integrates MySQL with Express.js API configured with Sequelize to build a backend for an e-commerce site that allows the user to manage and make changes to merchandise dynamically.

Output is based on the acceptance criteria outlined in the Module 13 Assignment Overview [Module-13-assignment](https://courses.bootcampspot.com/courses/1181/assignments/23361?module_item_id=464776).

Animations from the Challenge outline provide examples of expectations from testing via Insomnia.

![1st animation](assets/13-orm-homework-demo-01.gif)

![2nd animation](assets/13-orm-homework-demo-02.gif)

![3rd animation](assets/13-orm-homework-demo-03.gif)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Credits](#credits)
* [Questions](#questions)

## Installation

* Run MySQL to create the ecommerce_db database via "source db/schema.sql", using the schema.sql file from the starter code;
* Set sequelize.sync in the "server.js" file to "force: true" to create and seed the tables for the ecommerce_db database;
* Enter "npm start" in the terminal to start the server,then type in "npm run seed" to see the tables from the starter code files;
* Stop server to set sequelize.sync to "force: false" to avoid overwriting the now seeded tables;* Start the server again and test all of the API routes using Insomnia;

## Usage

This program creates a backend for an ecommerce site using API end routes through which a user can retrieve, create, change and delete data from the established database tables.

## License

This application is covered under the MIT license.  [MIT license link](https://choosealicense.com/licenses/mit/)

## Contributing

Please visit [Contributor Covenant website](https://contributor-covenant.org) for guidance.

## Testing

Apply RESTful commands GET, POST, PUT and DELETE, through Insomnia to test the application's API routes. Separate route files have been created for the Category, Product and Tag tables, with coding that will GET all items in a data base, GET one item by id, POST a new item, update an item via PUT by id and DELETE an item by id.

## Credits

Much of the program was supplied via the Starter Code, with several useful references from Module 13 in Canvas and the module's main exercise providing much of the rest. The course Tutor assigned to me and several visits to Stack Overflow [website](https://stackoverflow.com) provided some finetuning in order to get the program running properly.

## Questions?

If you have any questions, please see my contact details below:

## GitHub Username

My GitHub Username is github.com/lnd4812

## GitHub Repository

My GitHub repository link for this project is via this [Link](https://github.com/lnd4812/e-commerce-backend-creation)

## Application Video Link

The link to the application video may be accessed at to follow

## Contact information

To contact me directly, please feel free to drop me an e-mail at: <a hef="mailto:laureldavid64@gmail.com">laureldavid64@gmail.com</a>
