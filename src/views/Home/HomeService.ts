import { ContactRest } from "@/service/rest/contact.rest";
import { BehaviorSubject, Observable, take} from "rxjs";
// import { AxiosResponse } from "axios";

export class HomeService{
        constructor(private _contacts = new ContactRest()){}

        private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
        contact: Observable<any> = this.contact$.asObservable();

        getContactById(id:string):void{
          this._contacts.getContactById(id).pipe(take(1)).subscribe({
              next: (response: any) => {
                this.contact$.next(response);
              },
            });
        }
      }
