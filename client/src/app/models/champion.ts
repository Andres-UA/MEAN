export class Champion {

    constructor(_id='',name='',img='',lane=''){
        this._id = _id;
        this.name = name;
        this.img = img;
        this.lane = lane;
    }

    _id: string;
    name: string;
    img: string;
    lane: string;
}
