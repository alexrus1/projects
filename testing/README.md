# Практическая работа

## Цель практической работы
На практике научиться:
- определять, что нужно тестировать в компоненте;
- тестировать компоненты;
- генерировать отчет о покрытии тестами.


## Что нужно сделать

Есть написанное приложение Todo App (список дел). Данное приложение позволяет добавить новые дела - для этого необходимо 
ввести текст в поле ввода и нажать на кнопку-плюсик. Ниже отображается сам список дел в виде карточке: при наведении на 
карточку появляется корзина, при клике на которое она удаляется из списка. В нижней части располагается информация о количестве
невыполненных задач и кнопка “очистить все”, которая удалит все задачи. Если в списке отсутствуют задачи, то в нижней части 
отображается информация “все задачи выполнены”, кнопка при этом отсутствует.

Покройте приложение тестами, протестировав компоненты, и сгенерируйте отчет об оценке. Покрытие тестами в отчете должно быть не менее 80%.
1. Протестируйте компонент TaskInput (поле ввода с плюсиком)
2. Протестируйте компонент TaskCard (карточка задания)
3. Протестируйте компонент TaskFooter (футер карточки)
4. Сгенерируйте отчет о покрытии тестами

## Что оценивается
1. Покрытие тестами папки component должно быть >=80%

## Как отправить работу на проверку
Сдайте практическую работу через Skillbox GitLab. В поле для сдачи напишите «Сделано» и прикрепите ссылку на репозиторий
