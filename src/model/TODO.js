export default class Todo {

    constructor(id, content, status) {
        this.id = id;
        this.content = content;
        this.status = status;

    }


    static get ACTIVE() {
        return "active";
    }

    static get COMPLETED() {
        return "completed";
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
        return this.status
    }




    changeContent(content){
        this.content = content;
    }

}
