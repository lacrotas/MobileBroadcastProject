import { makeAutoObservable } from 'mobx';


export default class ExpertStatements {
    constructor() {
        this._expertStatements = [];
        makeAutoObservable(this);
    }

    //actions
    setExpertStatemnets(obj) {
        this._expertStatements = obj;
    }

    get expertStatements() {
        return this._expertStatements;
    }
}