// этот хук для работы с сервером и он нам будет экспортировать сущности в данном модуле
import { useState, useCallback } from 'react' // useCallback чтоб реакт не входил в цикличную рекурсию

export const useHttp = () => { //внутри этого хука будем сами определять, грузится что-то или нет. и будем работать с этим флагом 
    const [loading, setLoading] = useState(false) // сущность setLoading, если происходит процесс загрузки
    const [error, setError] = useState(null) // и сущность ошибка, если они есть

    const request = useCallback(async (url, method = 'POST', body = null, headers = {}) => { // useCallback первый параметр набор зависимостей второй параметр пустй объект [] он ниже
        setLoading(true) // когда пошел запро то true
        try {
            if (body) {
                body = JSON.stringify(body) // распарсить метод json
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, { method, body, headers }) // метод fetch принимает 2 параметра url, и{набор опций} называть надо как в API
            const data = await response.json()
            if (!response.ok) { // если при запросе возникла ошибка
                throw new error(data.message || 'Что-то пошло не так')
            }

            setLoading(false) // когда закончился запрос 

            return data //если все хорошо возвращаем data
        } catch (e) {
            setLoading(false) // если прошла ошибка то всеравно ставим false т.к запрос отработал
            setError(e.message)
            throw e
        }
    }, []) //второй параметр пустй массив useCallback

    const clearError = useCallback(() => setError(null), []) // функция, которая чистит ошибки

    return { loading, request, error, clearError }
}