import React from 'react';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from './pages/Anasehife/Anasehife';
import Contact from './pages/Contact/Contact';
import Endirim from './pages/Kampaniyalar/Endirim/Endirim';
import Kateqoriya from './pages/Məhsullar/Kateqoriya/Kateqoriya';
import Favoriler from './pages/Favoriler/Favoriler';
import Basket from './pages/Basket/Basket';
import Errorpage from './pages/Error/Errorpage';

import Giris from './pages/Account/Giris/Giris'
import Qeydiyyat from './pages/Account/Qeydiyyat/Qeydiyyat'
import Resetpass from './pages/Account/Resetpassword/Resetpass';
import Profile from './pages/Account/Profile/Profile'
import Profilbilgi from './pages/Account/Profilbilgi/Profilbilgi';
import Məhsullarim from './pages/Account/Məhsullarim/Məhsullarim'
import Məhsuləlavə from './pages/Account/Məhsuləlavə/Məhsuləlavə'
import Settings from './pages/Account/Settings/Settings'

import Admin from './Admin/Panel/Admin';
import Users from './Admin/Admincomponent/Users/Users'
import Adduser from './Admin/Admincomponent/Adduser/Adduser'
import Edituser from './Admin/Admincomponent/Edituser/Edituser'
import Changeadmin from './Admin/Admincomponent/ChangeAdmin/Changeadmin';

import Products from './Admin/Admincomponent/Products/Products';
import Addproducts from './Admin/Admincomponent/Addproducts/Addproducts';
import Editproducts from './Admin/Admincomponent/Editproducts/Editproducts'
import Details from './pages/Details/Details';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Endirim",
        element:<Endirim/>
      },
      {
        path:"/Məhsullar/:Category/:Kind",
        element:<Kateqoriya/>
      },
      {
        path:"/Basket",
        element:<Basket/>
      },
      {
        path:"/Favoriler",
        element:<Favoriler/>
      },
      {
        path:"/Details/:id",
        element:<Details/>
      },
      {
        path:"/Giris",
        element:<Giris/>
      },
      {
        path:"/Qeydiyyat",
        element:<Qeydiyyat/>
      },
      {
        path:"/resetpassword",
        element:<Resetpass/>
      },
      {
        path:"/Profile",
        element:<Profile/>,
        children:[
          {
            path:"/Profile",
            element:<Profilbilgi/>
          },
          {
            path:"/Profile/Məhsullarım",
            element:<Məhsullarim/>
          },
          {
            path:"/Profile/Məhsulunuəlavəet",
            element:<Məhsuləlavə/>
          },
          {
            path:"/Profile/Settings",
            element:<Settings/>
          }
        ]
      },
    ],
    errorElement:<Errorpage/>
  },
  {
    path:"/adminpanel",
    element:<Admin/>,
    children:[
      {
        path:"/adminpanel/",
        element:<Users/>
      },
      {
        path:"/adminpanel/adduser",
        element:<Adduser/>
      },
      {
        path:"/adminpanel/edituser/:id",
        element:<Edituser/>
      },
      {
        path:"/adminpanel/products",
        element:<Products/>
      },
      {
        path:"/adminpanel/addproduct",
        element:<Addproducts/>
      },
      {
        path:"/adminpanel/editproduct",
        element:<Editproducts/>
      },
      {
        path:"/adminpanel/editproduct/:id",
        element:<Editproducts/>
      },
      {
        path:"/adminpanel/changeadminpassword",
        element:<Changeadmin/>
      }
    ],
    errorElement:<Errorpage/>
  }
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
