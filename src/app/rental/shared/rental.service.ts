import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';

@Injectable()
export class RentalService{
    private rentals:Rental[]=[{
        id: "1",
        title: "central Appartment",
        city: "Mississauga",
        street: "Mavis Road",
        category: "apartment",
        image: "http://via.placeholder.com/350*250",
        bedrooms:3,
        description:"very nice apartment",
        dailyRate: 34,
        shared:false,
        created:"30/12/2019"
      },
      {
        id: "2",
        title: "central Appartment 2",
        city: "Brampton",
        street: "Bramele city center",
        category: "condo",
        image: "http://via.placeholder.com/350*250",
        bedrooms:2,
        description:"very nice apartment",
        dailyRate: 12,
        shared:true,
        created:"30/12/2019"
      },
      {
        id: "3",
        title: "central Appartment 3",
        city: "Hamilton",
        street: "Main Road",
        category: "house",
        image: "http://via.placeholder.com/350*250",
        bedrooms:6,
        description:"very nice apartment",
        dailyRate: 54,
        shared:true,
        created:"30/12/2019"
      },
      {
        id: "4",
        title: "central Appartment 3",
        city: "Toronto",
        street: "Cae Road",
        category: "house",
        image: "http://via.placeholder.com/350*250",
        bedrooms:10,
        description:"very nice apartment",
        dailyRate: 84,
        shared:true,
        created:"30/12/2019"
      }];

      public getRentalById(rentalId:string): Observable<Rental>{
        return new Observable<Rental>((observer) => {
            setTimeout(()=>{
               const foundRental = this.rentals.find((rental)=>{
                 return rental.id == rentalId;
               }); 
               observer.next(foundRental);
            },500);
        });

      }
      public getRentals(): Observable<Rental[]>{
        return new Observable<Rental[]>((observable)=>{
          setTimeout(()=>{
            observable.next(this.rentals)
          },1000);
        });
          
      }

}