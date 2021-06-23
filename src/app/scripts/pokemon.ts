import { Skill } from './skill';
import { Evolution } from './evolution';
export class Pokemon
{
    name:string;
    types:string;
    level:number;
    skills:Skill[];
    evolutions:Evolution[];

    constructor(name:string,types:string,level:number,skills:Skill[],evolutions:Evolution[])
    {
        this.name = name;
        this.types= types;
        this.level= level;
        this.skills= skills;
        this.evolutions=evolutions;
    }

    getName():string
    {
        return this.name;
    }
    getTypes():string
    {
        return this.types;
    }
    getLevel():number
    {
        return this.level;
    }
    getSkills():Skill[]
    {
        return this.skills;
    }
    getEvolutions():Evolution[]
    {
        return this.evolutions;
    }

}