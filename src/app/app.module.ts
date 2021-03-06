import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorServiceClient} from './services/course-navigator.service.client'
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import {TopicServiceClient} from './services/topic.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widgets.service.client';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import { AdminComponent } from './admin/admin.component';
import { AdminSectionControlComponent } from './admin-section-control/admin-section-control.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminComponent,
    AdminSectionControlComponent,
    AdminProfileComponent,
    SectionListComponent,
    QuizListComponent,
    QuizTakerComponent,
    QuizSubmissionsComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    QuizAnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    CourseNavigatorServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
