import {makeAutoObservable} from 'mobx'

export default class CourseStore{
  constructor(){
    this._courses = []; 
  //   {
  //     "id": 1,
  //     "title": "Мир мужчин",
  //     "subTitle": "Вопрос психологии отношений между мужчиной и женщиной довольно щекотливый и имеет множество подводных камней.",
  //     "description": "Вопрос психологии отношений между мужчиной и женщиной довольно щекотливый и имеет множество подводных камней. Как минимум из-за полярности их суждений и реакций, в силу природных особенностей.",
  //     "img": "d2c63714-cfda-412c-a41c-bd84b425cdbf.jpg",
  //     "price": 56000,
  //     "createdAt": "2023-12-13T11:09:04.277Z",
  //     "updatedAt": "2023-12-13T11:09:04.277Z",
  //     "lessons": [
  //         {
  //             "id": 1,
  //             "title": "Такова природа"
  //         },
  //         {
  //             "id": 2,
  //             "title": "Получите распишитесь"
  //         },
  //         {
  //             "id": 3,
  //             "title": "Не надо расхлёбывать самим"
  //         }
  //     ]
  // }
    this._course = {};
  //   {
  //     "id": 2,
  //     "title": "Люблю себя",
  //     "subTitle": "Что такое любовь к себе и чем она отличается от эгоизма? ",
  //     "description": "Что такое любовь к себе и чем она отличается от эгоизма? Почему это важно — научиться любить себя и что делать, если не получается? Разбираемся вместе с психологами.",
  //     "img": "41c1b49b-0897-482c-b8c9-ee2de685d754.jpg",
  //     "price": 90000,
  //     "createdAt": "2023-12-13T15:22:20.602Z",
  //     "updatedAt": "2023-12-13T15:22:20.602Z",
  //     "lessons": [
  //         {
  //             "id": 4,
  //             "title": "Что такое любовь к себе"
  //         },
  //         {
  //             "id": 5,
  //             "title": "Почему полюбить себя бывает сложно"
  //         },
  //         {
  //             "id": 6,
  //             "title": "Как полюбить себя"
  //         },
  //         {
  //             "id": 7,
  //             "title": "Любовь к себе и эгоизм"
  //         }
  //     ]
  // }

    this._lessons = []

    makeAutoObservable(this);
  }

  setCourses(courses){
    this._courses = courses
  }

  setCourse(id){
    const filteredCourse = this._courses.find(course => course.id === id)
    filteredCourse ? this._course = filteredCourse : this._course = []
  }

  setLessons(lessons){
    this._lessons = lessons
  }

  get courses(){
    return this._courses
  }

  get course(){
    return this._course
  }

  get lessons(){
    return this._lessons
  }
}