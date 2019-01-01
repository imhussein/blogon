(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-adminnav *ngIf=\"isLoggedIn && isHomepage\"></app-adminnav>\n<div class=\"container mt-3\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService, settingsService) {
        this.router = router;
        this.authService = authService;
        this.settingsService = settingsService;
        this.title = 'Blogon - Blog SAP With Angular & Bootstrap';
        this.isLoggedIn = false;
        this.isHomepage = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.addSettings();
        this.router.events.subscribe(function () {
            if (_this.router.url == '/' || _this.router.url.split('/')[1] === 'post') {
                _this.isHomepage = false;
            }
            else {
                _this.isHomepage = true;
            }
        });
        this.authService.isAuthentiacted().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_settings_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/settings.guard */ "./src/app/guards/settings.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layouts/navbar/navbar.component */ "./src/app/components/layouts/navbar/navbar.component.ts");
/* harmony import */ var _components_admin_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/addpost/addpost.component */ "./src/app/components/admin/addpost/addpost.component.ts");
/* harmony import */ var _components_admin_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/posts/posts.component */ "./src/app/components/admin/posts/posts.component.ts");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "./src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _components_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/settings/settings.component */ "./src/app/components/admin/settings/settings.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_single_single_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/single/single.component */ "./src/app/components/pages/single/single.component.ts");
/* harmony import */ var _components_pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/slider/slider.component */ "./src/app/components/pages/slider/slider.component.ts");
/* harmony import */ var _components_pages_slides_slides_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/slides/slides.component */ "./src/app/components/pages/slides/slides.component.ts");
/* harmony import */ var _components_pages_post_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/post/post.component */ "./src/app/components/pages/post/post.component.ts");
/* harmony import */ var _components_pages_postslist_postslist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/postslist/postslist.component */ "./src/app/components/pages/postslist/postslist.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/auth/register/register.component */ "./src/app/components/auth/register/register.component.ts");
/* harmony import */ var _components_layouts_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/layouts/adminnav/adminnav.component */ "./src/app/components/layouts/adminnav/adminnav.component.ts");
/* harmony import */ var _components_admin_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin/editpost/editpost.component */ "./src/app/components/admin/editpost/editpost.component.ts");






























var appRoutes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
    { path: 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"] },
    { path: 'register', component: _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], canActivate: [_guards_settings_guard__WEBPACK_IMPORTED_MODULE_13__["SettingsGuard"]] },
    { path: 'admin', component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/settings', component: _components_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/posts', component: _components_admin_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/posts/add', component: _components_admin_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_16__["AddpostComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'admin/posts/edit/:id', component: _components_admin_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_29__["EditpostComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'post/:id', component: _components_pages_single_single_component__WEBPACK_IMPORTED_MODULE_21__["SingleComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_admin_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_16__["AddpostComponent"],
                _components_admin_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _components_admin_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _components_pages_single_single_component__WEBPACK_IMPORTED_MODULE_21__["SingleComponent"],
                _components_pages_slider_slider_component__WEBPACK_IMPORTED_MODULE_22__["SliderComponent"],
                _components_pages_slides_slides_component__WEBPACK_IMPORTED_MODULE_23__["SlidesComponent"],
                _components_pages_post_post_component__WEBPACK_IMPORTED_MODULE_24__["PostComponent"],
                _components_pages_postslist_postslist_component__WEBPACK_IMPORTED_MODULE_25__["PostslistComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _components_auth_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
                _components_layouts_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_28__["AdminnavComponent"],
                _components_admin_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_29__["EditpostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _guards_settings_guard__WEBPACK_IMPORTED_MODULE_13__["SettingsGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/addpost/addpost.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin/addpost/addpost.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRkcG9zdC9hZGRwb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/addpost/addpost.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/addpost/addpost.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h2 class=\"card-header text-center\">\n    Add New Post\n  </h2>\n  <div class=\"card-body\">\n    <form #f=\"ngForm\" (ngSubmit)=\"addPost(f)\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"form-label\" for=\"title\">Post Title</label>\n        <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"newPost.title\" required minlength=\"5\" #noTitle=\"ngModel\">\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noTitle.errors?.required && noTitle.touched\">\n          Please Add Post Title\n        </small>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noTitle.errors?.minlength && noTitle.touched\">\n          Title Must be at least 5 characters\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"details\" class=\"form-label\">Details</label>\n        <textarea name=\"details\" id=\"details\" cols=\"30\" rows=\"7\" class=\"form-control\" [(ngModel)]=\"newPost.details\" required minlength=\"5\" #noDetails=\"ngModel\"></textarea>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noDetails.errors?.required && noDetails.touched\">\n          Please Add Post Some Details\n        </small>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noDetails.errors?.minlength && noDetails.touched\">\n          Details Must be at least 5 characters\n        </small>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"custom-file\">\n          <input type=\"file\" name=\"image\" id=\"image\" class=\"cutsom-file-field\" (change)=\"uploadImage($event)\">\n          <label for=\"image\" class=\"custom-file-label\">Upload Post Thumbnail</label>\n        </div>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"imageErr\">\n          {{imageErr}}\n        </small>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"progress mb-3\" [hidden]=\"!uploadPercent\">\n          <div class=\"progress-bar progress-bar-striped\" [class.bg-primary]=\"!isDone\" [class.bg-success]=\"isDone\" [ngStyle]=\"{width: uploadPercent}\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div [hidden]=\"!imageUrl\">\n              <img [src]=\"imageUrl || '//:0'\" class=\"img-thumbnail\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <input type=\"submit\" value=\"Add Post\" class=\"btn btn-success btn-block\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/addpost/addpost.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin/addpost/addpost.component.ts ***!
  \***************************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");






var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(flashMessagesService, router, afStorage, postsService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.afStorage = afStorage;
        this.postsService = postsService;
        this.newPost = {
            title: '',
            details: '',
            image: '',
            createdAt: Date.now(),
        };
        this.imageErr = '';
        this.isDone = false;
    }
    AddpostComponent.prototype.ngOnInit = function () {
    };
    AddpostComponent.prototype.uploadImage = function (e) {
        var _this = this;
        var image = e.target.files[0];
        var path = "posts/" + image.name;
        if (image.type.split('/')[0] !== 'image') {
            this.imageErr = 'Only Upload Images';
        }
        else {
            var uploadTask = this.afStorage.upload(path, image);
            var imageRef = this.afStorage.ref(path);
            uploadTask.percentageChanges().subscribe(function (value) {
                _this.uploadPercent = value + "%";
                if (value == 100) {
                    _this.isDone = true;
                }
                else {
                    _this.isDone = false;
                }
            });
            imageRef.getDownloadURL().subscribe(function (url) {
                _this.imageUrl = url;
            });
        }
    };
    AddpostComponent.prototype.addPost = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            value.createdAt = Date.now();
            value.image = this.imageUrl;
            this.postsService.addPost(value);
            this.flashMessagesService.show('Post Added', {
                cssClass: 'alert alert-success',
                timeout: 3000,
            });
            this.router.navigate(['/admin/posts']);
        }
        else {
            this.flashMessagesService.show('Please Fill In All Fields', {
                cssClass: 'alert alert-danger',
                timeout: 3000,
            });
            this.router.navigate(['/admin/posts/add']);
        }
    };
    AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/components/admin/addpost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/components/admin/addpost/addpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"]])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <h2 class=\"card-header text-center bg-dark text-white\">\n        Total Posts : {{postsNumber}}\n      </h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"holder\" *ngIf=\"latestPosts.length; else noPosts\">\n      <div class=\"card\">\n        <h3 class=\"text-center card-header\">\n          Latest Posts\n        </h3>\n        <div class=\"card-body\">\n          <ul *ngFor=\"let post of latestPosts; let i = index\" class=\"list-group\">\n            <li class=\"list-group-item mb-2\">\n              <a href=\"#\" [routerLink]=\"'/post/' + post.$key\" class=\"nounderline\" style=\"color: #000; text-decoration: none\">{{post.title}}</a>\n              <h4 class=\"display-2 badge badge-primary\">\n                {{i}}\n              </h4>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <ng-template #noPosts>\n      <div class=\"col-md-6 mx-auto\">\n        <div class=\"jumbotron text-center\">\n          <h3>No Posts Found</h3>\n          <a href=\"/\" routerLink=\"/admin/posts/add\" class=\"btn btn-primary\">Getting Started</a>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(postsService) {
        this.postsService = postsService;
        this.latestPosts = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().snapshotChanges().subscribe(function (posts) {
            _this.postsNumber = posts.length;
            posts.forEach(function (post) {
                var key = post.payload.toJSON();
                key['$key'] = post.key;
                _this.latestPosts.push(key);
            });
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/admin/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/editpost/editpost.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin/editpost/editpost.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZWRpdHBvc3QvZWRpdHBvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/editpost/editpost.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/editpost/editpost.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h2 class=\"card-header text-center\">\n    Edit Post\n  </h2>\n  <div class=\"card-body\">\n    <form #f=\"ngForm\" (ngSubmit)=\"updatePost(f)\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"form-label\" for=\"title\">Post Title</label>\n        <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"post.title\" required minlength=\"5\" #noTitle=\"ngModel\">\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noTitle.errors?.required && noTitle.touched\">\n          Please Add Post Title\n        </small>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noTitle.errors?.minlength && noTitle.touched\">\n          Title Must be at least 5 characters\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"details\" class=\"form-label\">Details</label>\n        <textarea name=\"details\" id=\"details\" cols=\"30\" rows=\"7\" class=\"form-control\" [(ngModel)]=\"post.details\" required minlength=\"5\" #noDetails=\"ngModel\"></textarea>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noDetails.errors?.required && noDetails.touched\">\n          Please Add Post Some Details\n        </small>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"noDetails.errors?.minlength && noDetails.touched\">\n          Details Must be at least 5 characters\n        </small>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"custom-file\">\n          <input type=\"file\" name=\"image\" id=\"image\" class=\"cutsom-file-field\" (change)=\"uploadImage($event)\">\n          <label for=\"image\" class=\"custom-file-label\">Upload Post Thumbnail</label>\n        </div>\n        <small class=\"font-weight-normal text-danger\" *ngIf=\"imageErr\">\n          {{imageErr}}\n        </small>\n      </div>\n      <div class=\"mb-3\">\n        <div class=\"progress mb-3\" [hidden]=\"!uploadPercent\">\n          <div class=\"progress-bar progress-bar-striped\" [class.bg-primary]=\"!isDone\" [class.bg-success]=\"isDone\" [ngStyle]=\"{width: uploadPercent}\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div *ngIf=\"imageUrl; else noImage\">\n              <img [src]=\"imageUrl || '//:0'\" class=\"img-thumbnail\">\n            </div>\n            <ng-template #noImage>\n              <div>\n                <img [src]=\"post.image || '//:0'\" class=\"img-thumbnail\">\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <input type=\"submit\" value=\"Update Post\" class=\"btn btn-success btn-block\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/editpost/editpost.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/editpost/editpost.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostComponent", function() { return EditpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");






var EditpostComponent = /** @class */ (function () {
    function EditpostComponent(flashMessagesService, router, afStorage, postsService, route) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.afStorage = afStorage;
        this.postsService = postsService;
        this.route = route;
        this.post = {
            title: '',
            details: '',
            image: '',
            createdAt: Date.now(),
        };
        this.imageErr = '';
        this.isDone = false;
    }
    EditpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.postsService.getPost(this.id).valueChanges().subscribe(function (post) {
            _this.post.title = post.title;
            _this.post.details = post.details;
            _this.post.image = post.image;
            _this.createdAt = post.createdAt;
        });
    };
    EditpostComponent.prototype.uploadImage = function (e) {
        var _this = this;
        var image = e.target.files[0];
        var path = "posts/" + image.name;
        if (image.type.split('/')[0] !== 'image') {
            this.imageErr = 'Only Upload Images';
        }
        else {
            var uploadTask = this.afStorage.upload(path, image);
            var imageRef = this.afStorage.ref(path);
            uploadTask.percentageChanges().subscribe(function (value) {
                _this.uploadPercent = value + "%";
                if (value == 100) {
                    _this.isDone = true;
                }
                else {
                    _this.isDone = false;
                }
            });
            imageRef.getDownloadURL().subscribe(function (url) {
                _this.imageUrl = url;
            });
        }
    };
    EditpostComponent.prototype.updatePost = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            value.image = this.imageUrl || '';
            value.createdAt = this.createdAt;
            this.postsService.updatePost(this.id, value);
            this.flashMessagesService.show('Post Added', {
                cssClass: 'alert alert-success',
                timeout: 3000,
            });
            this.router.navigate(['/admin/posts']);
            console.log(value);
        }
        else {
            this.flashMessagesService.show('Please Fill In All Fields', {
                cssClass: 'alert alert-danger',
                timeout: 3000,
            });
            this.router.navigate(['/admin/posts/add']);
        }
    };
    EditpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editpost',
            template: __webpack_require__(/*! ./editpost.component.html */ "./src/app/components/admin/editpost/editpost.component.html"),
            styles: [__webpack_require__(/*! ./editpost.component.css */ "./src/app/components/admin/editpost/editpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditpostComponent);
    return EditpostComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/posts/posts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/admin/posts/posts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/posts/posts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/admin/posts/posts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\n  <div class=\"row\" *ngIf=\"posts.length > 0; else noPosts\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12 mb-5\" *ngFor=\"let post of posts\">\n      <div class=\"card\">\n        <img *ngIf=\"post.image\" [src]=\"post.image\" alt=\"Post Image\" class=\"card-image-top img-thumbnail\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{post.title}}</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\" [routerLink]=\"'/admin/posts/edit/' + post.$key\" class=\"btn btn-primary btn-sm\">Edit</a>&nbsp; \n          <a href=\"#\" (click)=\"deletePost(post.$key, $event)\" class=\"btn btn-danger btn-sm\">Delete</a>\n          &nbsp; \n          <a href=\"#\" [routerLink]=\"'/post/' + post.$key\" class=\"btn btn-info btn-sm\">View</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #noPosts>\n    <div class=\"preloader-holder\">\n      <div class=\"lds-roller preloader\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/posts/posts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/posts/posts.component.ts ***!
  \***********************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(postsService, flashMessagesService, router) {
        this.postsService = postsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().snapshotChanges().subscribe(function (actions) {
            actions.forEach(function (action) {
                var key = action.payload.toJSON();
                key['$key'] = action.key;
                _this.posts.push(key);
                _this.posts.sort(function (a, b) {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
            });
        });
    };
    PostsComponent.prototype.deletePost = function (id, event) {
        event.preventDefault();
        this.postsService.deletePost(id);
        this.flashMessagesService.show('Post Deleted', {
            cssClass: 'alert alert-success',
            timeout: 3000,
        });
        this.router.navigate(['/admin/posts']);
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/admin/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/admin/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/settings/settings.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin/settings/settings.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/settings/settings.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/settings/settings.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h3 class=\"card-header\">\n    Settings\n  </h3>\n  <div class=\"card-body\">\n    <form (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"allowRegisteration\" class=\"form-label\">AllowRegisteration</label>\n        <input type=\"checkbox\" name=\"allowRegisteration\" id=\"allowRegisteration\" style=\"margin-left: 10px;vertical-align: middle; padding: 10px;\" [checked]=\"settings.allowRegisteration\" (change)=\"settings.allowRegisteration =! settings.allowRegisteration\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"showslider\" class=\"form-label\">ShowSlider</label>\n        <input type=\"checkbox\" name=\"showslider\" id=\"showslider\" style=\"margin-left: 10px;vertical-align: middle; padding: 10px;\" [checked]=\"settings.showSlider\" (change)=\"settings.showSlider =! settings.showSlider\">\n      </div>\n      <div class=\"card-footer\">\n        <input type=\"submit\" value=\"Save Settings\" class=\"btn btn-primary btn-block\">\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, flashMessagesService, router) {
        this.settingsService = settingsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getSettings().valueChanges().subscribe(function (settings) {
            _this.settings = settings;
        });
        this.flashMessagesService.show('Settings Updated', {
            cssClass: 'alert alert-success',
            timeout: 3000,
        });
        this.router.navigate(['/admin/settings']);
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this;
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/admin/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/admin/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <h2 class=\"card-header text-center\">\n        Login <i class=\"fas fa-unlock ml-1\"></i>\n      </h2>\n      <div class=\"card-body\">\n        <form (submit)=\"login()\">\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"form-label\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control form-control-lg\" [(ngModel)]=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" class=\"form-label\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control form-control-lg\" [(ngModel)]=\"password\" required>\n          </div>\n          <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-lg btn-block mb-2\">\n          <a href=\"/\" routerLink=\"/register\" class=\"btn btn-link btn-block btn-lg\">Have an account ? Login</a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthentiacted().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/admin']);
            }
        });
    };
    // Login
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function () {
            _this.flashMessagesService.show('You are logged in', {
                cssClass: 'alert alert-success',
                timeout: 3000,
            });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert alert-danger',
                timeout: 3000,
            });
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <h2 class=\"card-header text-center\">\n        Register <i class=\"fas fa-lock ml-1\"></i>\n      </h2>\n      <div class=\"card-body\">\n        <form (submit)=\"register()\">\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"form-label\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control form-control-lg\" [(ngModel)]=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" class=\"form-label\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control form-control-lg\" [(ngModel)]=\"password\" required>\n          </div>\n          <input type=\"submit\" value=\"Register\" class=\"btn btn-primary btn-lg btn-block mb-2\">\n          <a href=\"/\" routerLink=\"/login\" class=\"btn btn-link btn-block btn-lg\">Don't have an account yet ? Sign Up</a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuthentiacted().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/admin']);
            }
        });
    };
    // Register
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.email, this.password).then(function () {
            _this.flashMessagesService.show('You are successfully registered', {
                cssClass: 'alert alert-success',
                timeout: 3000,
            });
            _this.router.navigate(['/admin']);
        }).catch(function (err) {
            _this.flashMessagesService.show(err.message, {
                cssClass: 'alert alert-danger',
                timeout: 3000,
            });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/adminnav/adminnav.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/layouts/adminnav/adminnav.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9hZG1pbm5hdi9hZG1pbm5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layouts/adminnav/adminnav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/layouts/adminnav/adminnav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar justify-content-center bg-danger list-unstyled\">\n  <li class=\"nav-item\">\n    <a href=\"/\" routerLink=\"/admin\" class=\"nav-link text-white\">\n      Dashboard\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a href=\"/\" routerLink=\"/admin/posts\" class=\"nav-link text-white\">\n      Posts\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a href=\"/\" routerLink=\"/admin/posts/add\" class=\"nav-link text-white\">\n      Add Post\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a href=\"/\" routerLink=\"/admin/settings\" class=\"nav-link text-white\">\n      Settings\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/layouts/adminnav/adminnav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/layouts/adminnav/adminnav.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminnavComponent", function() { return AdminnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminnavComponent = /** @class */ (function () {
    function AdminnavComponent() {
    }
    AdminnavComponent.prototype.ngOnInit = function () {
    };
    AdminnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminnav',
            template: __webpack_require__(/*! ./adminnav.component.html */ "./src/app/components/layouts/adminnav/adminnav.component.html"),
            styles: [__webpack_require__(/*! ./adminnav.component.css */ "./src/app/components/layouts/adminnav/adminnav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminnavComponent);
    return AdminnavComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/navbar/navbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layouts/navbar/navbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-primary\">\n  <div class=\"container\">\n    <a href=\"/\" routerLink=\"/\" class=\"navbar-brand text-white\">{{branding}}</a>\n    <button class=\"navbar-toggler\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" type=\"button\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a href=\"/\" routerLink=\"/\" class=\"nav-link text-white\">Home</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn\">\n        <li class=\"nav-item\">\n          <a href=\"/\" routerLink=\"/admin\" class=\"nav-link text-white\">Admin</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\n        <li class=\"nav-item\">\n          <a href=\"/\" routerLink=\"/login\" class=\"nav-link text-white\">Login</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"allowRegisteration\">\n          <a href=\"/\" routerLink=\"/register\" class=\"nav-link text-white\">Register</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\n        <li class=\"nav-item\">\n          <span class=\"nav-link text-white\">{{currentUser}}</span>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/\" (click)=\"logout()\" class=\"nav-link text-white\">Logout</a>\n        </li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/layouts/navbar/navbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/navbar/navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessagesService, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
        this.isLoggedIn = false;
        this.branding = 'Blogon';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check For Registeration
        this.settingsService.getSettings().valueChanges().subscribe(function (res) {
            if (res.allowRegisteration) {
                _this.allowRegisteration = true;
            }
            else {
                _this.allowRegisteration = false;
            }
        });
        // Check Authentication
        this.authService.isAuthentiacted().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.currentUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    // Logout
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert alert-success',
            timeout: 3000,
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/layouts/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSlider\">\n  <app-slider></app-slider>\n</div>\n<app-postslist></app-postslist>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(settingsService) {
        this.settingsService = settingsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getSettings().valueChanges().subscribe(function (res) {
            if (res.showSlider) {
                _this.showSlider = true;
            }
            else {
                _this.showSlider = false;
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/post/post.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/post/post.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/post/post.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/post/post.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-5\">\n  <img [src]=\"post.image\" *ngIf=\"post.image\" alt=\"Post Image\" class=\"card-img-top\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      <a href=\"#\" style=\"text-decoration: none\" [routerLink]=\"'/post/' + post.$key\">{{post.title}}</a>\n    </h5>\n    <div class=\"card-text\">\n      <p class=\"text-muted font-weight-lighter\">\n        {{post.details}}\n      </p>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <small class=\"text-muted\">\n      {{post.createdAt | date}}\n    </small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/post/post.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/post/post.component.ts ***!
  \*********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/pages/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/pages/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/postslist/postslist.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/postslist/postslist.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcG9zdHNsaXN0L3Bvc3RzbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/postslist/postslist.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/postslist/postslist.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"text-center mb-4\" *ngIf=\"posts.length > 0\">\n    <h2>Our Latest Posts</h2>\n  </div>\n  <div class=\"row mb-3\" *ngIf=\"posts.length > 0; else noPosts\">\n    <div class=\"col-lg-4 col-md-6 col-sm-12\" *ngFor=\"let post of posts\">\n      <app-post [post]=\"post\"></app-post>\n    </div>\n  </div>\n  <ng-template #noPosts>\n    <div class=\"preloader-holder\">\n      <div class=\"lds-roller preloader\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/postslist/postslist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/postslist/postslist.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostslistComponent", function() { return PostslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ "./src/app/services/posts.service.ts");



var PostslistComponent = /** @class */ (function () {
    function PostslistComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts().snapshotChanges().subscribe(function (actions) {
            actions.forEach(function (action) {
                var key = action.payload.toJSON();
                key['$key'] = action.key;
                _this.posts.push(key);
                _this.posts.sort(function (a, b) {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
                _this.posts.map(function (post) {
                    post.details = post.details.substring(0, 80) + '....';
                });
            });
        });
    };
    PostslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postslist',
            template: __webpack_require__(/*! ./postslist.component.html */ "./src/app/components/pages/postslist/postslist.component.html"),
            styles: [__webpack_require__(/*! ./postslist.component.css */ "./src/app/components/pages/postslist/postslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostslistComponent);
    return PostslistComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/single/single.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/single/single.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/single/single.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/single/single.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\n  <div class=\"row text-center\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"text-center\">\n        <a href=\"#\" routerLink=\"'/post/'+ id\" style=\"text-decoration: none\">\n          {{postTitle}}\n        </a>\n      </h2>\n      <div class=\"mt-2 mb-2\">\n        <p class=\"badge badge-secondary\" style=\"float: none;\">\n          {{postDate | date}}\n        </p>\n      </div>\n      <img [src]=\"postImage\" *ngIf=\"postImage\" alt=\"Post Image\" class=\"img-thumbnail\" width=\"70%\">\n      <p class=\"lead mt-2 text-muted p-5\">\n        {{postDetails}}\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/single/single.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/single/single.component.ts ***!
  \*************************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleComponent = /** @class */ (function () {
    function SingleComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
    }
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.postsService.getPost(this.id).valueChanges().subscribe(function (post) {
            _this.postTitle = post.title;
            _this.postImage = post.image;
            _this.postDetails = post.details;
            _this.postDate = post.createdAt;
        });
    };
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/components/pages/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/components/pages/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/slider/slider.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/slider/slider.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/slider/slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/slider/slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-wrapper\">\n  <div *ngIf=\"slides.length > 0; else noSlides\">\n    <div class=\"slider\">\n        <div class=\"slides\" *ngFor=\"let slide of slides\">\n          <app-slides [slide]=\"slide\"></app-slides>\n        </div>\n    </div>\n  </div>\n  <ng-template #noPosts>\n    <div class=\"preloader-holder\">\n      <div class=\"lds-roller preloader\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/slider/slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/slider/slider.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ "./src/app/services/posts.service.ts");



var SliderComponent = /** @class */ (function () {
    function SliderComponent(postsService) {
        this.postsService = postsService;
        this.slides = [];
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getSlides(5).snapshotChanges().subscribe(function (actions) {
            actions.forEach(function (action) {
                var key = action.payload.toJSON();
                key['$key'] = action.key;
                _this.slides.push(key);
                _this.slides.sort(function (a, b) {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
            });
        });
        $(document).ready(function () {
            function waitElement(element) {
                if (document.querySelector(element) != null) {
                    $('.slider').slick({
                        autoplay: true,
                        centerMode: true,
                        arrows: false,
                        autoplaySpeed: 6000,
                        centerPadding: '60px',
                        slidesToShow: 3,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: '40px',
                                    slidesToShow: 3
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: '40px',
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });
                    return;
                }
                else {
                    setTimeout(function () {
                        waitElement(element);
                    }, 100);
                }
            }
            waitElement('.slider');
        });
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/pages/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/components/pages/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/slides/slides.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/slides/slides.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/slides/slides.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/slides/slides.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slide\">\n  <div class=\"slide-bg\" [ngStyle]=\"{'background-image': 'url(' + slide.image + ')' }\"></div>\n  <div class=\"slide-content\">\n    <h3 class=\"slide-heading\">{{slide.title}}</h3>\n    <div>\n      <a href=\"#\" [routerLink]=\"'/post/' + slide.$key\" class=\"btn custom-btn\">Read More...</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/slides/slides.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/slides/slides.component.ts ***!
  \*************************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlidesComponent = /** @class */ (function () {
    function SlidesComponent() {
    }
    SlidesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlidesComponent.prototype, "slide", void 0);
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.component.html */ "./src/app/components/pages/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.css */ "./src/app/components/pages/slides/slides.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlidesComponent);
    return SlidesComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router, flashMessagesService) {
        this.afAuth = afAuth;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (auth) {
                return true;
            }
            else {
                _this.flashMessagesService.show('You are not authenticated to view this page', {
                    cssClass: 'alert alert-danger',
                    timeout: 3000,
                });
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/settings.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/settings.guard.ts ***!
  \******************************************/
/*! exports provided: SettingsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsGuard", function() { return SettingsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SettingsGuard = /** @class */ (function () {
    function SettingsGuard(router, flashMessagesService, settingsService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
    }
    SettingsGuard.prototype.canActivate = function () {
        var _this = this;
        return this.settingsService.getSettings().valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.allowRegisteration) {
                return true;
            }
            else {
                _this.flashMessagesService.show('Regiseration Is Disabled', {
                    cssClass: 'alert alert-danger',
                    timeout: 3000,
                });
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    SettingsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], SettingsGuard);
    return SettingsGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    // Login
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (userCredentials) {
                resolve(userCredentials);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // Register
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (userCredentials) {
                resolve(userCredentials);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // Get Authentication
    AuthService.prototype.isAuthentiacted = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    // Logout
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var PostsService = /** @class */ (function () {
    function PostsService(afDB) {
        this.afDB = afDB;
        this.posts = this.afDB.list('/posts');
    }
    // Get Posts
    PostsService.prototype.getPosts = function () {
        return this.posts;
    };
    // Get Post
    PostsService.prototype.getPost = function (id) {
        return this.afDB.object("/posts/" + id);
    };
    // Add Post
    PostsService.prototype.addPost = function (post) {
        this.posts.push(post);
    };
    // Update Posts
    PostsService.prototype.updatePost = function (id, post) {
        this.posts.update(id, post);
    };
    // Get Slides
    PostsService.prototype.getSlides = function (numberOfSlides) {
        return this.afDB.list('/posts', function (ref) {
            return ref.limitToFirst(numberOfSlides);
        });
    };
    // Delet Post
    PostsService.prototype.deletePost = function (id) {
        this.posts.remove(id);
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var SettingsService = /** @class */ (function () {
    function SettingsService(afDB) {
        this.afDB = afDB;
        this.settings = this.afDB.object('/settings');
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.addSettings = function () {
        var _this = this;
        this.afDB.object('/settings').valueChanges().subscribe(function (res) {
            if (res == null) {
                _this.settings.set({
                    allowRegisteration: true,
                    showSlider: true,
                });
            }
        });
    };
    SettingsService.prototype.changeSettings = function (settings) {
        this.settings.update(settings);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBMCoyAyOVG9G8sUxdbJ7lIe_un7sMZtU4",
        authDomain: "blogon-f395d.firebaseapp.com",
        databaseURL: "https://blogon-f395d.firebaseio.com",
        projectId: "blogon-f395d",
        storageBucket: "blogon-f395d.appspot.com",
        messagingSenderId: "1056849721409"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Downloads\ffff\react blogon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map