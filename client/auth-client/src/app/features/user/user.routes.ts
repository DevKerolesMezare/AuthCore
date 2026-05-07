import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Registration } from "./registration/registration";




export const routes :Routes= [
    {
        path:'signin' , component:Login
    },
    {
        path: 'signup', component:Registration
    }

]
