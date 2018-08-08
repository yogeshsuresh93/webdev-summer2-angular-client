import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  lessons = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.moduleId, this.courseId);

  }

  loadLessons(moduleId, courseId) {
    this.moduleId = moduleId;
    this.courseId = courseId;
    console.log("In lesson component.ts:"+courseId);
    console.log("IN lesson component.ts:"+moduleId);
    this.service.findLessonsForModule(moduleId,courseId)
      .then(lessons => this.lessons = lessons);

  }
  ngOnInit() {
  }

}
