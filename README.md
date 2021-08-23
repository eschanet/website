[![Website eschanet.com](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://eschanet.com/)
[![deploy](https://github.com/eschanet/website/workflows/publish%20website/badge.svg)](https://github.com/eschanet/website/actions/workflows/publish.yml)
[![CodeQL](https://github.com/eschanet/website/workflows/CodeQL/badge.svg)](https://github.com/eschanet/website/actions/workflows/codeql-analysis.yml)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![GitHub release](https://img.shields.io/github/v/release/eschanet/website)](https://github.com/eschanet/website/releases/)
[![GitHub tag](https://img.shields.io/github/tag/eschanet/website.svg)](https://github.com/eschanet/website/tags/)

# [eschanet.com](http://eschanet.com) 

My personal website built using javascript with React, Express, React-Router, Github actions and a bunch of other fancy stuff. 

## Set up

1. Download the repository and install the dependencies:

    ```bash
    git clone git://github.com/eschanet/website.git
    cd website
    npm install
    ```

2. Next, create an `.env` file:

    ```bash
    cp sample.env .env
    ```

    Change values as appropriate.

3. Build the react application and serve it including hot module reloading:

    ```bash
    npm start
    ```
