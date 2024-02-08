import { makeAutoObservable } from "mobx";

export default class AdminStore{
  constructor(){
    this._users = [] //[{ "id": 1, "userId": 3, "name": "Алексей Григорьев", "courseId": 1, "title": "Все хорошо", "groupId": null, "date": "2023-12-16T08:16:05.897Z"}]
    this._sales = []
    this._groups = [] 

  //   [
  //     {
  //         "courseId": 2,
  //         "id": 3,
  //         "name": "1703179293385",
  //         "title": "Люблю себя",
  //         "people": "1",
  //         "students": [
  //             {
  //                 "id": 1,
  //                 "name": "Михаил",
  //                 "surname": "Лагутик"
  //             }
  //         ],
  //         "lessons": [
  //             {
  //                 "id": 8,
  //                 "title": "Что такое любовь к себе"
  //             }
  //         ]
  //     },
  //     {
  //         "courseId": 2,
  //         "groupId": 2,
  //         "name": "1703179008334",
  //         "title": "Люблю себя",
  //         "people": "1",
  //         "students": [
  //             {
  //                 "id": 2,
  //                 "name": "Иван",
  //                 "surname": "Петров"
  //             }
  //         ],
  //         "lessons": [
  //             {
  //                 "id": 4,
  //                 "title": "Что такое любовь к себе"
  //             },
  //             {
  //                 "id": 5,
  //                 "title": "Почему полюбить себя бывает сложно"
  //             },
  //             {
  //                 "id": 6,
  //                 "title": "Как полюбить себя"
  //             },
  //             {
  //                 "id": 7,
  //                 "title": "Любовь к себе и эгоизм"
  //             }
  //         ]
  //     },
  //     {
  //         "courseId": 1,
  //         "groupId": 1,
  //         "name": "1703177637323",
  //         "title": "Мир мужчин",
  //         "people": "1",
  //         "students": [
  //             {
  //                 "id": 2,
  //                 "name": "Иван",
  //                 "surname": "Петров"
  //             }
  //         ],
  //         "lessons": [
  //             {
  //                 "id": 1,
  //                 "title": "Такова природа"
  //             },
  //             {
  //                 "id": 2,
  //                 "title": "Получите распишитесь"
  //             },
  //             {
  //                 "id": 3,
  //                 "title": "Не надо расхлёбывать самим"
  //             }
  //         ]
  //     }
  // ]
    this._group = {}
    this._filteredUsers = []
    makeAutoObservable(this)
  }

  setUsers(data){
    this._users = data
  }

  setGroups(data){
    this._groups = data
  }

  setGroup(id){
    this._group = this._groups.find(group => group.id === id)
  }

  setFilteredUsers(id){
    this._filteredUsers = this._users.filter(user => user.courseId === id && !user.groupId)
  }

  setShow(bool){
    this._show = bool
  }

  get users(){
    return this._users
  }

  get groups(){
    return this._groups
  }

  get group(){
    return this._group
  }

  get sales(){
    return this._sales
  }

  get filteredUsers(){
    return this._filteredUsers
  }

  get show(){
    return this._show
  }
}