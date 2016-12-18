import { Pipe, PipeTransform } from "@angular/core"


import * as moment from "moment";
import "moment/locale/es";

@Pipe({
    name:"publicationDateFromNow"
})
export class PublicationDatePipe implements PipeTransform{
    transform(number:Number): string {
        return moment(number).fromNow();
    }

}
