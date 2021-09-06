import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });
  
  topicList: Topic[] = [];

  constructor(private http: HttpClient) {
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
      .subscribe(() => {
        this.getTopics();
      })
    // subscribe성공콜백에서 재조회
    // this.getTopics();
  }

  update(): void {
    console.log("dsadas")
    this.http
      .put("http://localhost:3000/board",
        {
          'title': this.topicForm.controls.title.value,
          'desc': this.topicForm.controls.description.value,
          'id': this.topicForm.controls.id.value,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      .subscribe((response: any) => {
        this.getTopics();
      })
  }

  delete(): void {
    console.log("ccccc")

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let params = new HttpParams().
    set('boardId', this.topicForm.controls.id.value).
    set('xxx', 'safdasdf');

    
    this.http
      .delete(`http://localhost:3000/board/${this.topicForm.controls.id.value}`,
        {
          headers,
          params
        }
      )
      .subscribe(res => {
        this.getTopics();
      })
  }




  selected(topic: Topic): void {
    this.topicForm.controls.title.setValue(topic.title);
    this.topicForm.controls.description.setValue(topic.description);
    this.topicForm.controls.id.setValue(topic.id);
  }
}
