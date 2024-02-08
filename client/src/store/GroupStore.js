import {makeAutoObservable} from 'mobx'

export default class GroupStore{
  constructor(){
    this._groups = [
      {
        "id": 1,
        "course": "Мир Женщин",
        "lessons": [
          {
            "id": '1',
            "title": 'Введение',
            "content": 'На этом уроке мы окунемся в содержание курса и познакомимся',
          },
          {
            "id": '2',
            "title": 'Ранги и примативность',
            "content": 'Разбираемся в основных типах мужчин и учимся разбираться в выборе партнера',
          }
        ],
        "duration": 4,
        "price": 30000,
        "img": "08a65dc2-1eef-4c2c-81ba-df7b9e49a07c.jpg",
      },
      {
        "id": 2,
        "title": "Мир Мужчин",
        "description": "Cотвори богиню из себя",
        "lessons": [
          {
            "id": '1',
            "title": 'Введение',
            "content": 'Посидим, поболтаем, покалякаем, обкашляем вопросики',
          },
          {
            "id": '2',
            "title": 'Первое правило',
            "content": 'Никто не должен знать о клубе богинь',
          },
          {
            "id": '3',
            "title": 'Второе правило',
            "content": 'О клубе богинь не должен знать никто, даже твой муж',
          }
        ],
        "duration": 2,
        "price": 30000,
        "img": "08a65dc2-1eef-4c2c-81ba-df7b9e49a07c.jpg",
      }
    ];
    this._selectedCourse = {};

    makeAutoObservable(this);
  }

  setCourses(courses){
    this._courses = courses
  }

  setSelectedCourse(id){
    this._selectedCourse = this._courses.find(course => course.id === id)
  }

  get courses(){
    return this._courses
  }

  get selectedCourse(){
    return this._selectedCourse
  }
}