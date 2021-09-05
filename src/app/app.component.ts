import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

interface Topic {
  id?: number,
  title: string,
  description: string,
  created?: string,
  authorId?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  topicList: Topic[] = [];

  constructor(private http: HttpClient,) {
    this.getTopics();
    // http요청 보낸 데이터를 datas에다가 넣어주면 끝!
  }

  getTopics() {
    this.http.get("http://localhost:3000/board")
      .subscribe((response: any) => {
        this.topicList = response;
      })
  }
  
  save(): void {
      this.http
      .post("http://localhost:3000/board",
      {
        'title': this.topicForm.controls.title.value,
        'desc': this.topicForm.controls.description.value
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
        
      })
      .subscribe((response: any) => {

      })
    // http POST

    // subscribe성공콜백에서 재조회
    // this.getTopics();
  }


}


// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// interface Topic {
//   id?: number,
//   title: string,
//   description: string,
//   created?: string,
//   authorId?: number
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css']
// })
// export class AppComponent {
//   topicForm = new FormGroup({
//     title: new FormControl(''),
//     description: new FormControl(''),
//   });

//   topicList: Topic[] = [];

//   constructor(private http: HttpClient) {
//     // this.getTopics();
//     // http요청 보낸 데이터를 datas에다가 넣어주면 끝!
//   }

//   getTopics() {
//     this.http.get("http://localhost:3000/board")
//       .subscribe((response: any) => {
//         this.topicList = response;
//       })
//   }

//   save(): void {
//     this.topicForm = 
//     dlqfurg입력한 값이 들어오는지, 들어오면 쏘기

//     this.http.post("http://localhost:3000/board",
//       {
//         "title": "",
//         "description": ""
//       })
//       .subscribe((response: any) => {

//       })
//     // http POST

//     // subscribe성공콜백에서 재조회
//     // this.getTopics();
//   }


// }



class 집 {
  handPhone = ''
  noteBook = '';

  constructor(handPhone: string, notebook: string, ) {
    this.handPhone = handPhone;
    this.noteBook = notebook;
  }

  notebookSystemOn() {
    
  }
}

function a(xxx: string, bbb: string) {

}
var home = new 집('asus', '01023720531');
home.handPhone

