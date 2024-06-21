import { ContactRest } from "@/service/rest/contact.rest";
import { BehaviorSubject, Observable, take} from "rxjs";
// import { AxiosResponse } from "axios";

export class HomeService{
        constructor(private _contacts = new ContactRest()){}

        private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
        contact: Observable<any> = this.contact$.asObservable();
        

        getContacts(): void {
          this._contacts.getContacts().pipe().subscribe({
            next: (response: any) => {
              this.contact$.next(response);
            },
          });
        }

        getContactById(id:number):void{
          this._contacts.getContactById(id).pipe(take(1)).subscribe({
              next: (response: any) => {
                this.contact$.next(response);
              },
            });
        }

        deleteContact(id: number): Observable<void> {
          return new Observable<void>((observer) => {
              this._contacts.deleteContact(id).pipe(take(1)).subscribe({
                  next: () => {
                      observer.next();
                      observer.complete();
                  },
                  error: (error: any) => {
                      observer.error(error);
                  }
              });
          });
      }
  
      }
