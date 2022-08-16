# crud-test-project

## Шаги для запуска:
1. Установка зависимостей командой:
```bash
$ pnpm install
```
или:
```bash
$ npm install
```
2. Инициализация PostreSQL. 
Все команды находятся в корне проекта, в файле database.sql.
db-migrate db:create 'crud_db' 
db-migrate up initialize

3. Запуск проекта командой:
```bash
$ npm run dev
```
## Тестирование
Для тестирования можно использовать postman. Коллекции с запросами представленные в папке postman, в корне проекта.
Их нужно импорировать в postman. 
В качестве переменной {{host}} нужно использовать "http://localhost:4000/api"