# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)


# install sanity cli globaly
npm install -g @sanity/cli

# creating new sanity project
login in saniy website ----> create new project

npm -y create sanity@latest <--- run this command : this will create new sanity project

# creating new sanity schema
cd sanity project dir
cs schemas
create new js file -- any as per your schema name
define schema as per fields
open index.js --> export your schema file --> add it into schemaType array 
eg. 
import products from './product';
export const schemaTypes = [products]