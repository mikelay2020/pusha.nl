import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' //npm i react-router-dom
// выдает ошибку на стаке пишут что версия устарела и надо использовать
// npm install --save react-router-dom@4.2.2
/*Для react-router-domv6 просто замените RedirectнаNavigate */
import { AuthPage } from './pages/AuthPage'
import { WelcomePage } from './pages/WelcomePage'
import { CreateRing } from './pages/CreateRing'
import { CreateUser } from './pages/CreateUser'
import { HomePage } from './pages/HomePage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) { /* если юзер не  зашел в систему то выводим эти роуты */
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
    return ( /* если юзер авторизован */
        <Switch>
            <Route path='/ring' exact>
                <CreateRing />
            </Route>
            <Route path='/home' exact>
                <HomePage/>
            </Route>
            <Redirect to='/home' />
 
        </Switch>




    )
}
