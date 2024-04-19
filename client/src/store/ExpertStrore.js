import { makeAutoObservable } from 'mobx';


export default class ExpertStrore {
    constructor() {
        this._experts = [];
        makeAutoObservable(this);
    }

    //actions
    setExperts(obj) {
        this._experts = obj;
    }

    get experts() {
        return this._experts;
    }
}