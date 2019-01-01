import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SettingsGuard } from './guards/settings.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AddpostComponent } from './components/admin/addpost/addpost.component';
import { PostsComponent } from './components/admin/posts/posts.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleComponent } from './components/pages/single/single.component';
import { SliderComponent } from './components/pages/slider/slider.component';
import { SlidesComponent } from './components/pages/slides/slides.component';
import { PostComponent } from './components/pages/post/post.component';
import { PostslistComponent } from './components/pages/postslist/postslist.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminnavComponent } from './components/layouts/adminnav/adminnav.component';
import { EditpostComponent } from './components/admin/editpost/editpost.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [SettingsGuard]},
  {path: 'admin', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin/settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'admin/posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'admin/posts/add', component: AddpostComponent, canActivate: [AuthGuard]},
  {path: 'admin/posts/edit/:id', component: EditpostComponent, canActivate: [AuthGuard]},
  {path: 'post/:id', component: SingleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddpostComponent,
    PostsComponent,
    DashboardComponent,
    SettingsComponent,
    HomeComponent,
    SingleComponent,
    SliderComponent,
    SlidesComponent,
    PostComponent,
    PostslistComponent,
    LoginComponent,
    RegisterComponent,
    AdminnavComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    SettingsGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
