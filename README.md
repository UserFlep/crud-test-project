﻿# Rest API

# Локальный запуск с установленной бд:
1. Установка зависимостей:
```bash
$ pnpm install
```
или:
```bash
$ npm install
```
2. Инициализация ENV переменных.
В корне проекта лежит файл `.env`. В нем нужно задать значения для подключения к бд.
3. Инициализация PostreSQL с помощью миграции:

Шаг 1: Создание БД (crud_db - имя БД)
```bash
$ db-migrate db:create 'crud_db' 
```
Шаг 2: Создание таблиц
```bash
$ db-migrate up initialize
```
Все команды находятся в корне проекта, в файле `database.sql`.

3. Запуск проекта командой:
```bash
$ npm run dev
```
# Docker-compose:
В директории проекта выполнить команду 
```bash
$ docker-compose up
```

# Тестирование
Для тестирования можно использовать postman. Коллекции с запросами представленные в папке postman, в корне проекта.
Их нужно импорировать в postman. 
В качестве переменной {{host}} нужно использовать 
`http://localhost:4000/api` 
    или 
`https://immense-mountain-29781.herokuapp.com/api`
