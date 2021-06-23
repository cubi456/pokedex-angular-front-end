export class Evolution{
    protected name:string;
    protected types:string;
    protected level:number;

    constructor(name:string,types:string,level:number)
    {
        this.name = name;
        this.types= types;
        this.level= level;
    }
}