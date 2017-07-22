import { Component } from '@angular/core';
import { DialogsService } from './dialog/dialogs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialog = false;
  public result: any;

  constructor(private dialogsService: DialogsService) { }

  title = 'Welcome To The Library!';
  createBook = 'Add a New Book';
  books = [
    {
      title: 'my -@@true little troll',
      author: 'johny Johnson',
      date: '14/02/1990',
      deleted: true,
    },

    {
      title: 'the !$*never ending story',
      author: 'johny Johnson',
      date: '14/02/1990',
      deleted: true,
    },

    {
      title: 'my true little troll',
      author: 'johny Johnson',
      date: '14/02/1990',
      deleted: true,
    },

    {
      title: 'my true -little troll',
      author: 'johny Johnson',
      date: '14/02/1990',
      deleted: true,
    },

    {
      title: 'my true little troll',
      author: 'johny Johnson',
      date: '14/02/1990',
      deleted: true,
    }
  ];

  addBook(title, author, date) {
    this.books.push({ title: title , author: author, date: date, deleted: true});
  }

  public deleteBook(book) {
    this.dialogsService
      .confirm('Are You Sure?', 'Are you sure you want to delete this book?')
      .subscribe(res => { this.result = res;   if ( this.result === true ) {
      book.deleted = false;
      // this.result = null;
    }});

  }

  public editBook(book, title, author, date) {
    console.log(book);
    book.title = title;
    book.author = author;
    book.date = date;
    console.log(book);
  }
}
