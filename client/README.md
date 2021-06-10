# Webex by Cisco React SPA (Batteries Included)

## Introduction & Mission Statement
The aim of this project is to demonstrate the power of Webex by Cisco. For demo purposes this is a SPA (single page application). 

For example, the Room Demo is meant to be the first of many instances of showcasing how to use the Webex by Cisco browser SDK in an early stages mobile first React appplication. 

To be sure, [react-widgets](https://github.com/webex/react-widgets) and spaces are one option for developers working in React using very similar technologies (i.e., React, Redux, browser SDK). As the web accelerates toward critical infelction points it is important to give developers the freedom the choose, which is why tools like TypeScript, eslint, prettier, stylelint, babel, and custom build tooling with webpack are included out of the box.  

## Structure & Content
| File/folder       | Description                                        |
|-------------------|----------------------------------------------------|
| `src`             | Source code of the project  |
| `src/components`  | Source code of the project  |
| `src/sections`    | Home page, navigation menu, and other resuable site elements will live here.|
| `src/components`  | Modular components, WIP folder indicates works in progress.|
| `src/demoPages`   | Complete experiences ready to showcase.|
| `src/services`    | Microservices, etc.|
| `dist`            | Output folder that will serve content on a deploy  |
| `. (aka root)`    |  Boat loads of developer tooling!                  |

### Technical Specifications:
* Webex by Cisco Integration via Client Id
* Browser SDK React Integration
* Redux
* Conforms to [Webex code style guides](https://github.com/webex/web-styleguide).
* Github Action deployment.
* Protect yo secrets with example env configuration!

## Next Steps & Future Work

An open internet, in reason, is non negotiable, and as everyone learns to work in play in a remote context deliverying unprecendented value is top of mind. With respect to prioritization of new fetures and content for future work here are the principles that will help guide us:

* Good feeback is a gift.
    * Yes, and? 
        * Consider this, I built this project in part b/c of woes with the install experience of a react-widgets (i.e., npm install was not painless... yet). Version problems through up some road blocks, so I pivoted, etc.). 
* Inclusive Iterative Development.
    * For example, perhaps a simmilar demonstration with web components would also be compelling to developers and customers.
* Ask questions and be bold!


### Backlog for this particular repo:
* Add a home landing page and navigation menu.
* Maybe land this example on the [awesome list](https://github.com/CiscoDevNet/awesome-webex), pending stakeholder feedback... 
* Add a Spaces chat to the Room functionality and continue the conversation.
* Leverage the work of others from widgets swimlane to add additional experiences.
* Build an example with a serverless proxy to manage and load balance.
* Integrate Jest or another testing framework. 