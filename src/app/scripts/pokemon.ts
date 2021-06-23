import { Skill } from './skill';
import { Evolution } from './evolution';
export class Pokemon
{
    protected name:string;
    protected types:string;
    protected level:number;
    protected skills:Skill[];
    protected evolutions:Evolution[];

    constructor(name:string,types:string,level:number,skills:Skill[],evolutions:Evolution[])
    {
        this.name = name;
        this.types= types;
        this.level= level;
        this.skills= skills;
        this.evolutions=evolutions;
    }
}