# REACT 301 - An overview of `react-router`

vs. server side router -> different. Updates viewers view without changing the url address.

* handled by the browser instead of the server, but still getting the info from the server.

cons:
- handling state across different viewers
    which is handled by REDUX to eliminate this issue

* Note: routing deals with matching the view with the build

npm i react-router-Dom 

```import { BrowserRouter } from 'react-router-dom'```

starting file is index.js

broadcasting
```import { NavLink, Routes, Route } from 'react-router-dom';```

```<NavLink to "/">Home</NavLink>```

subscribing
```<Route path = "/" element=(<Landing />) />```