import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' //npm i react-router-dom
// выдает ошибку на стаке пишут что версия устарела и надо использовать
// npm install --save react-router-dom@4.2.2
/*Для react-router-domv6 просто замените RedirectнаNavigate */
import { AuthPage } from './pages/AuthPage'
import { WelcomePage } from './pages/WelcomePage'
import { Rings } from './pages/Rings'
import { Skills } from './pages/Skills'
import { UserPage } from './pages/UserPage'
import { CreateUser } from './pages/CreateUser'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) { /* если юзер не  зашел в систему то выводим эти роуты */
        return (
            <Switch>
                <Route path='/ring' exact>
                    <Rings />
                </Route>
                <Route path='/skills' exact>
                    <Skills />
                </Route>
                <Route path='/user' exact>
                    <UserPage />
                </Route>
                <Redirect to='/user' />

            </Switch>
        )
    }
    return ( /* если юзер авторизован */


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
