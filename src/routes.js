import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' //npm i react-router-dom
// выдает ошибку на стаке пишут что версия устарела и надо использовать
// npm install --save react-router-dom@4.2.2
/*Для react-router-domv6 просто замените Redirect на Navigate */
import { AuthPage } from './pages/AuthPage'
import { WelcomePage } from './pages/WelcomePage'
import { CreateRing } from './pages/CreateRing'
import { CreateUser } from './pages/CreateUser'
import { HomePage } from './pages/HomePage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) { 
        return (
            <Switch>
                <Route path='/ring' exact>
                    <CreateRing />
                </Route>
                <Route path='/home' exact>
                    <HomePage />
                </Route>
                <Redirect to='/home' />
            </Switch>
        )
    }
    return ( 
        <Switch>
            <Route path='/' exact>
                <WelcomePage />
            </Route>
            <Route path='/signin' exact>
                <AuthPage />
            </Route>
            <Route path='/signup' exact>
                <CreateUser />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}
