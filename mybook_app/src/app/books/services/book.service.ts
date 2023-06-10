import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(): BookModel[] {
    return [
      {
        "id": 1,
        "title": "Angular",
        "totalPages": 455,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 55
        }
      },
      {
        "id": 2,
        "title": "React",
        "totalPages": 455,
        "author": "Sagar Saini",
        "price": {
          "currency": "INR",
          "value": 99
        }
      },
      {
        "id": 3,
        "title": "Vue Js",
        "totalPages": 435,
        "author": "Abhinav Saini",
        "price": {
          "currency": "INR",
          "value": 59
        }
      },
      {
        "id": 4,
        "title": "Dot Net Core",
        "totalPages": 599,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 999
        }
      },
      {
        "id": 5,
        "title": "Bacis foundamental",
        "totalPages": 599,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 999
        }
      },
      {
        "id": 7,
        "title": "History of code",
        "totalPages": 599,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 999
        }
      },
      {
        "id": 7,
        "title": "Dot Net fundamentals",
        "totalPages": 59,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 999
        }
      },
      {
        "id": 8,
        "title": "Dot Net fundamentals",
        "totalPages": 559,
        "author": "Abhay Saini",
        "price": {
          "currency": "INR",
          "value": 999
        }
      }



    ]
  }
}
