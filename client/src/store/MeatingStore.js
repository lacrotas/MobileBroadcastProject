import { makeAutoObservable } from 'mobx';

export default class MeatingStore {
    constructor() {
        this._meating = [];
        makeAutoObservable(this);
    }
    //actions
    setMeating(meating) {
        this._meating = meating;
    }
    
    get meating() {
        return this._meating;
    }
}