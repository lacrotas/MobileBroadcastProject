import { makeAutoObservable } from 'mobx';

export default class CityStore {
    constructor() {
        this._cityes = [];
        makeAutoObservable(this);
    }
    //actions
    setCity(city) {
        this._cityes = city;
    }
    
    get city() {
        return this._cityes;
    }
}