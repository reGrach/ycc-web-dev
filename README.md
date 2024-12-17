# Проект по сопровождению учебного курса "Основы web-разработки"

Ссылка на 
[Google таблицу](https://docs.google.com/spreadsheets/d/1bnXPJO38Tnxb4olS6Dsk7lbCnUeDNBKs2e5wKXXsCz4/edit?usp=sharing/) с Вашим текущим прогрессом по курсу

## Задания 1-ого полугодия

### `git` Задание 1.1
1. Создать репозиторий (проект) на github.com
2. Склонировать проект в свою рабочую папку. Рабочая папка:<br/>`~/Документы/"Ваша фамилия"/`
3. Внести любые изменения в проект
4. Убедиться, что для репозитория корректно указаны user.name и user.email
> [!TIP]
> Команды для проверки:
> ```
> git config --local user.name
> git config --local user.email
> ```
> Команды для установки:
> ```
> git config --local user.name "Ваше имя"
> git config --local user.email "Ваш email"
> ```
5. Выполнить коммит всех изменений. Проверить, что коммит выполнен от Вашего имени
6. Выполнить пуш коммита на GitHub.com
7. Выйти из своих профилей (VS Code, github.com) и закрыть проект в VS Code
8. Скинуть ссылку на репозиторий в личку в vk.com


### `html` Задание 1.2
1. Создать новый репозиторий (проект) на github.com
> [!TIP]
> Не использовать другие репозитории
2. Создать простой HTML-документ, представляющий собой анкету/справку о чем- или о ком-либо. Требования к содержимому странички:
    * Не менее одного изображения;
    * Не менее двух заголовков;
    * Не менее двух ссылок на внешние ресурсы.
3. О чем конкретно и как это будет выглядеть - все в рамках вашей фантазии :blush:
4. Залить все изменения в проекте на github.com
5. Скинуть ссылку на репозиторий в личку в vk.com


### `html+css` Задание 1.3

1. Пример страницы входа находиться в папке `html_css/public` текущего репозитория
2. Создать репозиторий (проект) на github.com.
3. Реализовать аналогичную страницу входа. Стили должны отличаться от  примера из данного репозитория. 
4. Реализовать страницу регистрации. Требования к форме регистрации:
    * различные и разнообразные поля для ввода
    * стилизация в соответствии со страницей входа
    * возможность перейти со страницы входа на страницу регистрации и обратно
5. Стили и набор полей для регистрации зависят исключительно от Вашего воображения :blush:

## Задания 2-ого полугодия

### `JS` Задание 2.1
1. Создать репозиторий (проект) на github.com
2. В свой проект добавить все файлы из папки `js` из текущего репозитория
    * файл package.json - системный
    * файл catalog.js - файл, содержащий каталог книг
    * файл index.js - файл для реализации функций. При этом первые константы содержат данные для функций, которые необходимо реализовать
3. В проекте реализовать следующий функционал:
    * функцию, которая выводит в консоль все уникальные языки, на которых написаны книги из каталога (то есть языки не должны повторяться);
    * функцию, которая выводит все книги указанного века (`const century`);
    * функцию, которая выводит все книги, удовлетворяющие поисковому запросу (`const search`). При этом поиск должен быть реализован как по названию, так и по автору.
4. Формат вывода зависит от Вашего воображения :blush:
5. Залить все свои изменения на github и скинуть ссылку на него в личку в vk.com