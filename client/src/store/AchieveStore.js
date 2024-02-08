import { makeAutoObservable } from "mobx";

export default class AchieveStore{
  constructor(){
    this._achieve = []
    this._media = []
    this._roles = ["Танцор", "Актриса", "Постановщик", "Судья", "Создатель", "Модель"]


    makeAutoObservable(this)
  }

  setAchieve(data){
    this._achieve = data
  }

  setMedia(data){
    this._media = data
  }

  get achieve(){
    return this._achieve
  }

  get roles(){
    return this._roles
  }

  get media(){
    return this._media
  }
}