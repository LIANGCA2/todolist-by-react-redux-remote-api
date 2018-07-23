export default class Todo {

    constructor(id,content,complete) {
        this.id = id;
        this.content = content;
        this.complete = complete;

    }

    toggleComplete() {
        this.complete = true;
    }

    static get ACTIVE() {
        return "active";
    }

    static get COMPLETED() {
        return "complete";
    }

    static get ALL() {
        return "all";
    }
   static get id(){
        return this.id
   }
    static get content(){
        return this.content
    }
    static get complete(){
        return this.complete
    }

    static get generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }


    toggleActive() {
        console.log(this.complete);
        this.complete = this.complete === true ? false : true;
    }
    changeContent(content){
        this.content = content;
    }

}
