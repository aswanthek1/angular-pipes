import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Students";

@Pipe({
    name:'filter',
    standalone:true,
})
export class FilterPipe implements PipeTransform {
    transform(list: Student[], filterBy:string) {
        if(list.length ===0 || filterBy.toLowerCase() === 'all' || filterBy === '') {
            return list;
        }
        else {
            return list.filter((std) => {
                return std.gender.toLowerCase() === filterBy.toLowerCase();
            })
        }
    }

}