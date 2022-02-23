(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\youar\Documents\Sistema-Seguranca-Trabalho\Sistema-Seguranca-Trabalho\src\main.ts */"zUnb");


/***/ }),

/***/ "3zbm":
/*!*****************************************************!*\
  !*** ./src/app/Componetes/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");










function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "25rem", "margin": "auto", "text-align": "center" }; };
const _c1 = function () { return { "width": "100%" }; };
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.email = "";
        this.senha = "";
    }
    ngOnInit() {
    }
    irParaCadastro() {
        this.router.navigate(["cadastro"]);
    }
    login() {
        this.authService.SignIn(this.email, this.senha);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 21, consts: [[1, "center"], ["pTemplate", "header"], [1, "p-float-label"], ["id", "email-input", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "email-input"], ["id", "senha-input", "type", "password", "pPassword", "", 3, "ngModel", "feedback", "ngModelChange"], ["for", "senha-input"], ["pButton", "", "type", "button", "label", "Login", 3, "click"], ["pButton", "", "type", "button", "label", "Login com Google", "icon", "pi pi-google", 1, "p-button-outlined", "p-button-rounded", "p-button-info", 3, "click"], ["pButton", "", "type", "button", "label", "Cadastrar", 1, "p-button-outlined", "p-button-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_1_Template, 4, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.senha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.authService.GoogleAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.irParaCadastro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.senha)("feedback", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_3__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_password__WEBPACK_IMPORTED_MODULE_7__["PasswordDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: [".center[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: 0;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCOztBQUVuQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "7+Nv":
/*!***********************************************!*\
  !*** ./src/app/Servicos/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(afs, afAuth, router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.userReady = false;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                this.userData.admin = false;
                if (this.userData.uid == "LeUa9ybfQugsWBvitnKAg4Wau0X2") {
                    this.userData.admin = true;
                }
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', '{}');
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            var _a;
            this.ngZone.run(() => {
                this.router.navigate(['']);
            });
            this.userData = result.user;
            let user_cache = JSON.parse(localStorage.getItem('user'));
            user_cache.emailVerified = (_a = result.user) === null || _a === void 0 ? void 0 : _a.emailVerified;
            localStorage.setItem('user', JSON.stringify(user_cache));
            this.userReady = true;
            this.userData.admin = false;
            if (this.userData.uid == "LeUa9ybfQugsWBvitnKAg4Wau0X2") {
                this.userData.admin = true;
            }
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Sign up with email/password
    SignUp(email, password, nome) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            this.userReady = true;
            this.SendVerificationMail();
            this.SetUserData(result.user, nome);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => { if (u != undefined)
            u.sendEmailVerification(); })
            .then(() => {
            this.router.navigate(['validar-email']);
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Enviamos um email para a troca da senha para o endereço solicitado');
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        //console.log(1, user !== null);
        //console.log(2, user.emailVerified !== false);
        //console.log(3, user.emailVerified !== undefined);
        //console.log(4, user !== undefined);
        return (user !== null && user.emailVerified !== false && user.emailVerified !== undefined && user !== undefined) ? true : false;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider());
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['']);
            });
            this.userReady = true;
            this.SetUserData(result.user, '');
        }).catch((error) => {
            window.alert(error);
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user, nome) {
        const userRef = this.afs.doc(`Users/${user.uid}`);
        const userData = {
            id: user.uid,
            email: user.email,
            nome: user.displayName,
            email_verificado: user.emailVerified,
        };
        if (nome != '') {
            userData.nome = nome;
        }
        userRef.set(userData, {
            merge: true
        }).then(() => {
        }).catch((e) => {
            console.error("Falha ao Criar Aluno, Favor Contatar Suporte", e);
        });
    }
    // Sign out 
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.userData = null;
            localStorage.clear();
            this.userReady = false;
            this.router.navigate(['login']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "9HOZ":
/*!*******************************************************!*\
  !*** ./src/app/Componetes/rodape/rodape.component.ts ***!
  \*******************************************************/
/*! exports provided: RodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodapeComponent", function() { return RodapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ "QIUk");



class RodapeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RodapeComponent.ɵfac = function RodapeComponent_Factory(t) { return new (t || RodapeComponent)(); };
RodapeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RodapeComponent, selectors: [["app-rodape"]], decls: 9, vars: 0, consts: [[1, "footer"], [2, "text-align", "center"]], template: function RodapeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Vers\u00E3o 0.5 alpha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Equipe de Desenvolvimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Matheus de Carvalho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__["Card"]], styles: [".footer[_ngcontent-%COMP%], .push[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvZGFwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTs7SUFFRSxZQUFZO0VBQ2QiLCJmaWxlIjoicm9kYXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZm9vdGVyLFxyXG4gIC5wdXNoIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RodapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rodape',
                templateUrl: './rodape.component.html',
                styleUrls: ['./rodape.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseconfig: {
        apiKey: "AIzaSyDP4PI-jYkt8DOgncxUqO6hDqyqkWLu2tk",
        authDomain: "sistema-seguranca-trabalho.firebaseapp.com",
        projectId: "sistema-seguranca-trabalho",
        storageBucket: "sistema-seguranca-trabalho.appspot.com",
        messagingSenderId: "1057029791819",
        appId: "1:1057029791819:web:c477761a85e5f8128f2dce",
        measurementId: "G-QJH1CTRT39"
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

/***/ "B36T":
/*!***************************************************!*\
  !*** ./src/app/Componetes/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "IDV5");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rodape/rodape.component */ "9HOZ");






class HomeComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userReady = false;
    }
    ngOnInit() {
        // if(!this.authService.userData && !this.authService.userReady){ 
        //   this.router.navigate(["login"]);
        // }else{
        //   let time = timer(200, 1000).subscribe(() =>{
        //     if(this.authService.userData != undefined){
        //       this.userReady = true;
        //       time.unsubscribe();
        //     }
        //   });
        //   let time2 = timer(200, 1000).subscribe(() =>{
        //     if(this.userReady){
        //       if(this.authService.userData.admin !=undefined){
        //         time2.unsubscribe();
        //         if(this.authService.userData.admin){
        //           this.router.navigate(['admin']);
        //         }
        //       }
        //     }
        //   });
        // }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "wrapper"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-rodape");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100%;\r\n  \r\n    \r\n    margin-bottom: -50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7SUFFaEI7cUVBQ2lFO0lBQ2pFLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgLyogRXF1YWwgdG8gaGVpZ2h0IG9mIGZvb3RlciAvXHJcbiAgICAvIEJ1dCBhbHNvIGFjY291bnRpbmcgZm9yIHBvdGVudGlhbCBtYXJnaW4tYm90dG9tIG9mIGxhc3QgY2hpbGQgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "C5p/":
/*!*****************************************************************************************!*\
  !*** ./src/app/Componetes/configurar-jogo-memoria/configurar-jogo-memoria.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConfigurarJogoMemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarJogoMemoriaComponent", function() { return ConfigurarJogoMemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/Jogo */ "XDuE");
/* harmony import */ var src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicos/jogos/jogos.service */ "hT5v");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _subcomponents_pick_list_pick_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../subcomponents/pick-list/pick-list.component */ "jPBG");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/knob */ "EbAv");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");



















const _c0 = ["pick_list"];
const _c1 = function () { return { "width": "100%" }; };
function ConfigurarJogoMemoriaComponent_div_7_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.titulo = $event; })("input", function ConfigurarJogoMemoriaComponent_div_7_input_3_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.mudarTitulo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.titulo);
} }
function ConfigurarJogoMemoriaComponent_div_7_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_input_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.titulo = $event; })("input", function ConfigurarJogoMemoriaComponent_div_7_input_4_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.mudarTitulo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.titulo);
} }
function ConfigurarJogoMemoriaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfigurarJogoMemoriaComponent_div_7_input_3_Template, 1, 4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfigurarJogoMemoriaComponent_div_7_input_4_Template, 1, 4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00EDtulo do Jogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Selecione o quantas tentativas o jogador ter\u00E1 antes de come\u00E7ar a perder pontos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-slider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_slider_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.quantidade_tentativas = $event; })("onChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_slider_onChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.mudarQuantidadeTentativas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Selecione a prioridade para calculo do resultado em porcentagem entre quantidade de tentativas e tempo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p-slider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_slider_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.prioridade_tempo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Selecione o tempo que o jogador ter\u00E1 antes de come\u00E7ar a perder pontos(Em segundos) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p-knob", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_knob_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.tempo_inicio = $event; })("onChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_knob_onChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.mudarTempoInicio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Selecione o tempo m\u00E1ximo para o jogo(Em segundos) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p-knob", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_knob_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.tempo_max = $event; })("onChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_knob_onChange_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.mudarTempoMax(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Mostrar as cartas r\u00E1pidamente antes de iniciar? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p-inputSwitch", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_inputSwitch_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.mostrar_cartas_antes = $event; })("onChange", function ConfigurarJogoMemoriaComponent_div_7_Template_p_inputSwitch_onChange_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.mudarMostrarCartasAntes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Dificuldade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "p-progressBar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurarJogoMemoriaComponent_div_7_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.ativar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.tituloInvalido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tituloInvalido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quantidade_tentativas)("min", 1)("max", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Quantidade de tentativas: ", ctx_r0.quantidade_tentativas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.prioridade_tempo)("min", 0)("max", 100)("step", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tentativas(", 100 - ctx_r0.prioridade_tempo, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tempo(", ctx_r0.prioridade_tempo, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.tempo_inicio)("size", 100)("min", 0)("max", ctx_r0.tempo_max)("step", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.tempo_max)("size", 100)("min", 20)("max", 600)("step", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mostrar_cartas_antes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.dificuldade);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.buttonText);
} }
function ConfigurarJogoMemoriaComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-skeleton", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-skeleton", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-skeleton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-skeleton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { "width": "100%", "height": "100%" }; };
function ConfigurarJogoMemoriaComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Agora voc\u00EA pode enviar o jogo para as pessoas que v\u00E3o resolver utilizando o link abaixo! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurarJogoMemoriaComponent_div_8_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.copiarLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Guarde o link abaixo ele ser\u00E1 utilizado para visualizar os resultados do seu jogo! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigurarJogoMemoriaComponent_div_8_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.copiarLinkVisualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.titulo, " foi criado com sucesso! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/jogo-memoria?id=", ctx_r24.idJogo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r24.baseURL, "/jogo-memoria?id=", ctx_r24.idJogo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/jogo-memoria?id=", ctx_r24.idJogo, "&list=", ctx_r24.id_visualizar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r24.baseURL, "/jogo-memoria?id=", ctx_r24.idJogo, "&list=", ctx_r24.id_visualizar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
} }
function ConfigurarJogoMemoriaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfigurarJogoMemoriaComponent_div_8_div_1_Template, 10, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfigurarJogoMemoriaComponent_div_8_div_2_Template, 24, 15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
} }
function ConfigurarJogoMemoriaComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ConfigurarJogoMemoriaComponent {
    constructor(jogosService, messageService) {
        this.jogosService = jogosService;
        this.messageService = messageService;
        this.editMode = false;
        this.titleText = 'Criar Jogo da Memória';
        this.buttonText = 'Criar';
        this.titulo = '';
        this.tempo_inicio = 240;
        this.tempo_max = 310;
        this.quantidade_tentativas = 24;
        this.prioridade_tempo = 50;
        this.mostrar_cartas_antes = false;
        this.peso_tempo_inicio = 2;
        this.peso_tempo_max = 4;
        this.peso_quantidade_tentativas = 3;
        this.peso_mostrar_cartas_antes = 1;
        this.quantidade_cartas = 8;
        this.dificuldade = 0;
        this.tituloInvalido = false;
        this.viewJogo = false;
        this.loading = false;
        this.idJogo = '';
        this.id_visualizar = '';
        this.baseURL = window.location.origin;
        this.placehooders = [];
    }
    ngOnInit() {
        if (this.editMode) {
            this.titleText = 'Editar Jogo da Memória';
            this.buttonText = 'Editar';
        }
        this.calcularDificuldade();
        this.timerPlaceholders = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500, 1500).subscribe(() => {
            this.placehooders = Array(this.quantidade_cartas).fill(0);
        });
    }
    ativar() {
        if (this.editMode) {
            this.editar();
        }
        else {
            this.criar();
        }
    }
    criar() {
        console.log("pick_list", this.getCartasSelecionadas(this.pick_list.cartasSelecionadas));
        if (this.verificarCamposObrigatorios()) {
            this.viewJogo = true;
            this.loading = true;
            this.id_visualizar = this.jogosService.gerarUID();
            this.jogosService.criarJogo(new src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_3__["Jogo"](this.titulo, this.tempo_inicio, this.tempo_max, this.quantidade_tentativas, this.prioridade_tempo, this.mostrar_cartas_antes, this.getCartasSelecionadas(this.pick_list.cartasSelecionadas), this.quantidade_cartas), this.id_visualizar).subscribe((observer) => {
                this.loading = false;
                this.idJogo = observer;
            });
        }
        else {
            this.tituloInvalido = true;
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha todos os campos obrigatórios!' });
        }
    }
    editar() {
    }
    getCartasSelecionadas(cartas) {
        return cartas.map(carta => carta.conteudo);
    }
    selecionarCartas(pick_list) {
        console.log(pick_list.cartasSelecionadas);
    }
    verificarCamposObrigatorios() {
        this.titulo = this.titulo.replace(/\s+/g, ' ').trim();
        if (this.titulo == '' || this.titulo == ' ') {
            return false;
        }
        return true;
    }
    copiarLink() {
        const val = this.baseURL + '/jogo-memoria?id=' + this.idJogo;
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    copiarLinkVisualizar() {
        const val = this.baseURL + '/jogo-memoria?id=' + this.idJogo + '&list=' + this.id_visualizar;
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    mudarTitulo() {
        this.titulo = this.titulo.replace(/\s+/g, ' ').trim();
        if (this.titulo == '' || this.titulo == ' ') {
            this.tituloInvalido = true;
        }
        else {
            this.tituloInvalido = false;
        }
    }
    mudarTempoMax() {
        if (this.tempo_inicio > this.tempo_max) {
            this.tempo_inicio = this.tempo_max;
        }
        this.calcularDificuldade();
    }
    mudarQuantidadeTentativas() {
        this.calcularDificuldade();
    }
    mudarTempoInicio() {
        this.calcularDificuldade();
    }
    mudarMostrarCartasAntes() {
        this.calcularDificuldade();
    }
    calcularDificuldade() {
        let dificuldade_tempo_max = (1 - ((this.tempo_max - 20) / 580)) * this.peso_tempo_max;
        let dificuldade_tempo_inicio = (1 - (this.tempo_inicio / this.tempo_max)) * this.peso_tempo_inicio;
        let dificuldade_quantidade_tentativas = (1 - ((this.quantidade_tentativas - 1) / 49)) * this.peso_quantidade_tentativas;
        let dificuldade_mostrar_cartas_antes;
        if (this.mostrar_cartas_antes) {
            dificuldade_mostrar_cartas_antes = 0 * this.peso_mostrar_cartas_antes;
        }
        else {
            dificuldade_mostrar_cartas_antes = 1 * this.peso_mostrar_cartas_antes;
        }
        let media_dificuldade = (dificuldade_tempo_max + dificuldade_tempo_inicio + dificuldade_quantidade_tentativas + dificuldade_mostrar_cartas_antes) / 10;
        this.dificuldade = Math.round(media_dificuldade * 100);
    }
}
ConfigurarJogoMemoriaComponent.ɵfac = function ConfigurarJogoMemoriaComponent_Factory(t) { return new (t || ConfigurarJogoMemoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__["JogosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
ConfigurarJogoMemoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigurarJogoMemoriaComponent, selectors: [["app-configurar-jogo-memoria"]], viewQuery: function ConfigurarJogoMemoriaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pick_list = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 32, vars: 12, consts: [[1, "p-grid"], [1, "p-col-12"], [2, "text-align", "center"], ["header", "Configura\u00E7\u00F5es"], ["class", "p-grid", 4, "ngIf"], ["class", "p-grid p-formgrid", 4, "ngIf"], ["header", "Selecionar Cartas"], [1, "p-col-4"], [1, "p-col-4", 2, "text-align", "center"], [1, "texto-primario"], [1, "texto-selecionado"], [1, "texto-excluido"], [3, "ngModel", "min", "max", "step", "ngModelChange", "onChange"], [3, "quantidadeTotal"], ["pick_list", ""], ["header", "Pre-visualizar"], [1, "cartas-container"], ["class", "carta", 4, "ngFor", "ngForOf"], [1, "p-float-label"], ["id", "float-input", "type", "text", "pInputText", "", 3, "style", "ngModel", "ngModelChange", "input", 4, "ngIf"], ["id", "float-input", "type", "text", "pInputText", "", "class", "ng-invalid ng-dirty", 3, "style", "ngModel", "ngModelChange", "input", 4, "ngIf"], ["for", "float-input"], [1, "p-col-6"], [1, "p-col-12", "linhaSlider"], [3, "ngModel", "min", "max", "ngModelChange", "onChange"], [3, "ngModel", "min", "max", "step", "ngModelChange"], [2, "float", "right"], [1, "p-d-flex", "p-jc-center"], ["valueTemplate", "{value} s", 3, "ngModel", "size", "min", "max", "step", "ngModelChange", "onChange"], [3, "ngModel", "ngModelChange", "onChange"], [3, "value"], ["pButton", "", "type", "button", 1, "p-button-info", 3, "label", "click"], ["id", "float-input", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange", "input"], ["id", "float-input", "type", "text", "pInputText", "", 1, "ng-invalid", "ng-dirty", 3, "ngModel", "ngModelChange", "input"], [1, "p-grid", "p-formgrid"], ["class", "p-field p-col-12 p-md-6", "style", "margin: auto;", 4, "ngIf"], ["class", "p-grid p-col-12", 4, "ngIf"], [1, "p-field", "p-col-12", "p-md-6", 2, "margin", "auto"], ["height", "2.5rem", "styleClass", "p-mb-2"], ["styleClass", "p-mb-2"], [1, "p-col-8"], ["height", "3rem", "styleClass", "p-mb-2"], [1, "p-grid", "p-col-12"], [3, "href"], [1, "p-card", 2, "text-align", "center", "width", "100%"], [1, "link"], ["pButton", "", "type", "button", "label", "Copiar", 1, "p-button-info", 3, "click"], [1, "link2"], [1, "carta"], [1, "box", "box-stretched", "carta-virada"]], template: function ConfigurarJogoMemoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-tabPanel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConfigurarJogoMemoriaComponent_div_7_Template, 60, 28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfigurarJogoMemoriaComponent_div_8_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-tabPanel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Quantidade de cartas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfigurarJogoMemoriaComponent_Template_p_slider_ngModelChange_24_listener($event) { return ctx.quantidade_cartas = $event; })("onChange", function ConfigurarJogoMemoriaComponent_Template_p_slider_onChange_24_listener() { return ctx.mudarQuantidadeTentativas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-pick-list", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-tabPanel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConfigurarJogoMemoriaComponent_div_31_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titleText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewJogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewJogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(total: ", ctx.quantidade_cartas, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(selecionadas: ", _r2.cartasSelecionadas.length * 2, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(aleat\u00F3rias: ", ctx.quantidade_cartas - _r2.cartasSelecionadas.length * 2, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantidade_cartas)("min", 8)("max", 16)("step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quantidadeTotal", ctx.quantidade_cartas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.placehooders);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_slider__WEBPACK_IMPORTED_MODULE_8__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _subcomponents_pick_list_pick_list_component__WEBPACK_IMPORTED_MODULE_10__["PickListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], primeng_knob__WEBPACK_IMPORTED_MODULE_11__["Knob"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_12__["InputSwitch"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_13__["ProgressBar"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputText"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__["Skeleton"]], styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    color: #4FC3F7;\r\n    text-decoration: none;\r\n    height: 3rem;\r\n    line-height: 3rem;\r\n}\r\n\r\n.link2[_ngcontent-%COMP%]{\r\n    color: #4FC3F7;\r\n    text-decoration: none;\r\n    font-size: small;\r\n    height: 3rem;\r\n    line-height: 3rem;\r\n}\r\n\r\n.linhaSlider[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n}\r\n\r\n[_nghost-%COMP%]  .p-progressbar .p-progressbar-label{\r\n    color: rgb(37, 37, 37);\r\n}\r\n\r\n.texto-primario[_ngcontent-%COMP%]{\r\n    color: #81D4FA;\r\n}\r\n\r\n.texto-selecionado[_ngcontent-%COMP%]{\r\n    color: #AED581;\r\n}\r\n\r\n.texto-excluido[_ngcontent-%COMP%]{\r\n    color: #E57373;\r\n}\r\n\r\n.cartas-container[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 40rem;\r\n    height: 40rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.carta[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 8rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    margin: 1rem;\r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-e);\r\n    text-align: center;\r\n    padding: 65px 0;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: auto;\r\n\r\n}\r\n\r\n.carta-virada[_ngcontent-%COMP%]{\r\n    background-color: rgb(17, 54, 95);\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\n\r\n.box-stretched[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXItam9nby1tZW1vcmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQSxRQUFROztBQUNSO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO3NFQUNrRTtJQUNsRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbmZpZ3VyYXItam9nby1tZW1vcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIGNvbG9yOiAjNEZDM0Y3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5saW5rMntcclxuICAgIGNvbG9yOiAjNEZDM0Y3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4ubGluaGFTbGlkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG46aG9zdD4+PiAucC1wcm9ncmVzc2JhciAucC1wcm9ncmVzc2Jhci1sYWJlbHtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbn1cclxuXHJcbi50ZXh0by1wcmltYXJpb3tcclxuICAgIGNvbG9yOiAjODFENEZBO1xyXG59XHJcblxyXG4udGV4dG8tc2VsZWNpb25hZG97XHJcbiAgICBjb2xvcjogI0FFRDU4MTtcclxufVxyXG5cclxuLnRleHRvLWV4Y2x1aWRve1xyXG4gICAgY29sb3I6ICNFNTczNzM7XHJcbn1cclxuXHJcbi5jYXJ0YXMtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgaGVpZ2h0OiA0MHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJ0YXtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLyogLS0tICovXHJcbi5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1lKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDY1cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4uY2FydGEtdmlyYWRhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCA1NCwgOTUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uYm94LXN0cmV0Y2hlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurarJogoMemoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configurar-jogo-memoria',
                templateUrl: './configurar-jogo-memoria.component.html',
                styleUrls: ['./configurar-jogo-memoria.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
            }]
    }], function () { return [{ type: src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__["JogosService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, { pick_list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pick_list']
        }] }); })();


/***/ }),

/***/ "CSgF":
/*!***************************************************!*\
  !*** ./src/app/Componetes/jogo/jogo.component.ts ***!
  \***************************************************/
/*! exports provided: JogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoComponent", function() { return JogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Questao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/Questao */ "QnyP");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.component */ "IDV5");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rodape/rodape.component */ "9HOZ");











const _c0 = function () { return { "width": "100%", "height": "20%" }; };
function JogoComponent_p_tabPanel_6_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JogoComponent_p_tabPanel_6_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.checarResposta(i_r5, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resposta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", resposta_r4);
} }
function JogoComponent_p_tabPanel_6_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JogoComponent_p_tabPanel_6_div_7_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.checarResposta(i_r5, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resposta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", resposta_r4);
} }
function JogoComponent_p_tabPanel_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JogoComponent_p_tabPanel_6_div_7_button_1_Template, 1, 4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JogoComponent_p_tabPanel_6_div_7_button_2_Template, 1, 4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.indexEscolhido == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.indexEscolhido != i_r5);
} }
const _c1 = function () { return { "width": "100%" }; };
function JogoComponent_p_tabPanel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-tabPanel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Qual o Significado Desta Placa?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JogoComponent_p_tabPanel_6_div_7_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", i_r2 + 1 + "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.respostas);
} }
class JogoComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.questoes = [];
        this.questoesExistentes = [];
        this.userReady = false;
    }
    ngOnInit() {
        /* if(!this.authService.userData && !this.authService.userReady){
          this.router.navigate(["login"]);
        }else{
          let time = timer(200, 1000).subscribe(() =>{
            if(this.authService.userData != undefined){
              this.userReady = true;
              time.unsubscribe();
            }
          });
          let time2 = timer(200, 1000).subscribe(() =>{
            if(this.userReady){
              if(this.authService.userData.admin !=undefined){
                  time2.unsubscribe();
                if(this.authService.userData.admin){
                  this.router.navigate(['admin']);
                }
              }
            }
          });
        }*/
        for (let index = 0; index < 10; index++) {
            let questao = new src_app_Models_Questao__WEBPACK_IMPORTED_MODULE_1__["Questao"](this.questoesExistentes);
            this.questoes.push(questao);
            this.questoesExistentes.push(questao.id);
        }
    }
    checarResposta(index, questao) {
        questao.indexEscolhido = index;
    }
}
JogoComponent.ɵfac = function JogoComponent_Factory(t) { return new (t || JogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
JogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JogoComponent, selectors: [["app-jogo"]], decls: 15, vars: 1, consts: [[1, "wrapper"], [1, "card"], [2, "color", "white"], [3, "header", 4, "ngFor", "ngForOf"], ["header", "Submeter"], [2, "text-align", "center"], [1, "p-d-flex", "p-jc-center"], ["pButton", "", "type", "button", "label", "Submeter", 1, "p-button-warning"], [3, "header"], [3, "src"], [4, "ngFor", "ngForOf"], ["pButton", "", "type", "button", "class", "p-button-info", 3, "label", "style", "click", 4, "ngIf"], ["pButton", "", "type", "button", 3, "label", "style", "click", 4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-info", 3, "label", "click"], ["pButton", "", "type", "button", 3, "label", "click"]], template: function JogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Atividade Avaliativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JogoComponent_p_tabPanel_6_Template, 9, 6, "p-tabPanel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-tabPanel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Clique no Bot\u00E3o Abaixo Para Submeter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-rodape");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questoes);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabView"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_tabview__WEBPACK_IMPORTED_MODULE_5__["TabPanel"], primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_9__["RodapeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".imagem-placa[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n.botao-submeter[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0FBQ2pCIiwiZmlsZSI6ImpvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW0tcGxhY2F7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYm90YW8tc3VibWV0ZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jogo',
                templateUrl: './jogo.component.html',
                styleUrls: ['./jogo.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "HGQ1":
/*!*********************************!*\
  !*** ./src/app/Models/Carta.ts ***!
  \*********************************/
/*! exports provided: Carta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carta", function() { return Carta; });
class Carta {
    constructor() {
        this.id = "";
        this.tipo = "";
        this.conteudo = "";
        this.isSelecionada = false;
        this.isCorreto = false;
        // placas: string[] = [
        //     "001",
        //     "002",
        //     "003",
        //     "004",
        //     "005",
        //     "006",
        //     "007",
        //     "008",
        //     "009",
        //     "010",
        //     "011",
        //     "012",
        //     "013",
        //     "014",
        //     "015",
        //     "016",
        //     "017",
        //     "018",
        //     "019"
        // ];
        // placasNomes: string[] = [
        //     "Alta Temperatura",
        //     "Alta Voltagem",
        //     "Atmosfera Explosiva",
        //     "Campo Eletromagnetico",
        //     "Forte Campo Magnético",
        //     "Material Radioativo",
        //     "Raio Laser",
        //     "Substâncias Comburante",
        //     "Substâncias Explosivas",
        //     "Substâncias Toxicas",
        //     "Veiculo de Movimenta Carga",
        //     "Carga suspensa",
        //     "Perigo de tropeçamento",
        //     "Risco biológico",
        //     "Risco de queda em desnivelamento",
        //     "Substância nociva",
        //     "Substâncias corrosivas",
        //     "Temperatura baixa",
        //     "Vários perigos"
        // ];
        // constructor(cartasExistentes: Carta[]){
        //     if (cartasExistentes.length == 0) {
        //         this.getNovaCarta(cartasExistentes);
        //     }else if (cartasExistentes[cartasExistentes.length-1].tipo == "texto") {
        //         this.getNovaCarta(cartasExistentes);
        //     }else{
        //         this.getCartaTexto(cartasExistentes);
        //     }
        // }
        // private getNovaCarta(cartasExistentes: Carta[]){
        //     this.tipo = "imagem";
        //     this.id = this.placas[this.getRandomInt(0, this.placas.length)];
        //     this.conteudo = "/assets/Placas/"+this.id+".jpg";
        //     if (this.cartaExiste(cartasExistentes)) {
        //         this.conteudo = "";
        //         this.id = "";
        //         this.getNovaCarta(cartasExistentes);
        //     }
        // }
        // private getCartaTexto(cartasExistentes: Carta[]){
        //     this.tipo = "texto";
        //     this.id = cartasExistentes[cartasExistentes.length-1].id;
        //     this.conteudo = this.placasNomes[this.placas.indexOf(this.id)];
        // }
        // private cartaExiste(cartasExistentes: Carta[]){
        //     let existe = false;
        //     for (let i = 0; i < cartasExistentes.length; i++) {
        //         if (cartasExistentes[i].id == this.id) {
        //             existe = true;
        //         }
        //     }
        //     return existe;
        // }
        // private getRandomInt(min: number, max: number) {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min)) + min;
        // }
    }
}


/***/ }),

/***/ "IDV5":
/*!***************************************************!*\
  !*** ./src/app/Componetes/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configurar-jogo-memoria/configurar-jogo-memoria.component */ "C5p/");
/* harmony import */ var _visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visualizacao-jogo-memoria/visualizacao-jogo-memoria.component */ "cmSL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");











function MenuComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ng_template_2_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.authService.SignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(authService, router, dialogService) {
        this.authService = authService;
        this.router = router;
        this.dialogService = dialogService;
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Criar jogo',
                icon: 'pi pi-plus-circle',
                command: (event) => {
                    this.mostraResultado();
                }
            },
            {
                label: 'Visualizar meus jogos',
                icon: 'pi pi-users',
                command: (event) => {
                    this.mostraJogos();
                }
            },
        ];
    }
    mostraResultado() {
        const ref = this.dialogService.open(_configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurarJogoMemoriaComponent"], {
            header: '',
            width: '70%',
            closable: true,
        });
    }
    mostraJogos() {
        const ref = this.dialogService.open(_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_3__["VisualizacaoJogoMemoriaComponent"], {
            header: '',
            width: '50%',
            closable: true,
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 3, vars: 1, consts: [[3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["routerLink", "/", "routerLinkActive", "active"], ["src", "https://firebasestorage.googleapis.com/v0/b/sistema-seguranca-trabalho.appspot.com/o/logotipo300x300.png?alt=media&token=dd94a5b7-61cd-4f2c-9283-c2b27d968d1d", "height", "40", 1, "p-mr-2"], ["label", "Sair", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ng_template_1_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_6__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "QnyP":
/*!***********************************!*\
  !*** ./src/app/Models/Questao.ts ***!
  \***********************************/
/*! exports provided: Questao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questao", function() { return Questao; });
class Questao {
    constructor(questoesExistentes) {
        this.imagem = "";
        this.respostas = [];
        this.resposta = "";
        this.indexCorreto = 0;
        this.indexEscolhido = -1;
        this.id = "000";
        this.placas = [
            "001",
            "002",
            "003",
            "004",
            "005",
            "006",
            "007",
            "008",
            "009",
            "010",
            "011",
        ];
        this.placasNomes = [
            "Alta Temperatura",
            "Alta Voltagem",
            "Atmosfera Explosiva",
            "Campo Eletromagnetico",
            "Forte Campo Magnético",
            "Material Radioativo",
            "Raio Laser",
            "Substâncias Comburante",
            "Substâncias Explosivas",
            "Substâncias Toxicas",
            "Veiculo de Movimenta Carga"
        ];
        this.escolherPlaca(questoesExistentes);
        this.gerarRespostas();
    }
    escolherPlaca(questoesExistentes) {
        this.resposta = this.placasNomes[this.getRandomInt(0, this.placasNomes.length)];
        this.id = this.placas[this.placasNomes.indexOf(this.resposta)];
        this.imagem = "/assets/Placas/" + this.id + ".jpg";
        if (questoesExistentes.indexOf(this.id) != -1) {
            this.resposta = "";
            this.imagem = "";
            this.escolherPlaca(questoesExistentes);
        }
    }
    gerarRespostas() {
        let respostaCertaColocada = false;
        for (let i = 0; i < 5; i++) {
            let chance = this.getRandomInt(0, 5);
            if (i == 4 && !respostaCertaColocada) {
                this.respostas[i] = this.resposta;
                this.indexCorreto = i;
            }
            else if (chance == 0 && !respostaCertaColocada) {
                respostaCertaColocada = true;
                this.respostas[i] = this.resposta;
                this.indexCorreto = i;
            }
            else {
                this.respostas[i] = this.getRespostaErrada();
            }
        }
    }
    getRespostaErrada() {
        let respostaAtual = "";
        while (true) {
            if (this.respostas.indexOf(respostaAtual) == -1 && respostaAtual != "" && respostaAtual != this.resposta) {
                return respostaAtual;
            }
            else {
                respostaAtual = this.placasNomes[this.getRandomInt(0, this.placasNomes.length)];
            }
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.title = 'Sistema-Seguranca-Trabalho';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "XDuE":
/*!********************************!*\
  !*** ./src/app/Models/Jogo.ts ***!
  \********************************/
/*! exports provided: Jogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jogo", function() { return Jogo; });
class Jogo {
    constructor(titulo, tempo_inicio, tempo_max, quantidade_tentativas, prioridade_tempo, mostrar_cartas_antes, cartas_selecionadas, quantidade_cartas) {
        this.titulo = '';
        this.tempo_inicio = 240;
        this.tempo_max = 310;
        this.quantidade_tentativas = 10;
        this.prioridade_tempo = 50;
        this.mostrar_cartas_antes = false;
        this.cartas_selecionadas = [];
        this.quantidade_cartas = 0;
        this.jogadores = [];
        this.titulo = titulo;
        this.tempo_inicio = tempo_inicio;
        this.tempo_max = tempo_max;
        this.quantidade_tentativas = quantidade_tentativas;
        this.prioridade_tempo = prioridade_tempo;
        this.mostrar_cartas_antes = mostrar_cartas_antes;
        this.cartas_selecionadas = cartas_selecionadas;
        this.quantidade_cartas = quantidade_cartas;
        this.jogadores = [];
    }
    getTitulo() {
        return this.titulo;
    }
    getTempoInicio() {
        return this.tempo_inicio;
    }
    getTempoMax() {
        return this.tempo_max;
    }
    getQuantidadeTentativas() {
        return this.quantidade_tentativas;
    }
    getPrioridadeTempo() {
        return this.prioridade_tempo;
    }
    getMostrarCartasAntes() {
        return this.mostrar_cartas_antes;
    }
    getJogadores() {
        return this.jogadores;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setTempoInicio(tempo_inicio) {
        this.tempo_inicio = tempo_inicio;
    }
    setTempoMax(tempo_max) {
        this.tempo_max = tempo_max;
    }
    setQuantidadeTentativas(quantidade_tentativas) {
        this.quantidade_tentativas = quantidade_tentativas;
    }
    setPrioridadeTempo(prioridade_tempo) {
        this.prioridade_tempo = prioridade_tempo;
    }
    setMostrarCartasAntes(mostrar_cartas_antes) {
        this.mostrar_cartas_antes = mostrar_cartas_antes;
    }
    setJogadores(jogadores) {
        this.jogadores = jogadores;
    }
    getQuantidadeCartas() {
        return this.quantidade_cartas;
    }
    setQuantidadeCartas(quantidade_cartas) {
        this.quantidade_cartas = quantidade_cartas;
    }
    getCartasSelecionada() {
        return this.cartas_selecionadas;
    }
    setCartasSelecionada(cartas_selecionadas) {
        this.cartas_selecionadas = cartas_selecionadas;
    }
    addJogador(jogador) {
        this.jogadores.push(jogador);
    }
    removeJogador(jogador) {
        this.jogadores.splice(this.jogadores.indexOf(jogador), 1);
    }
    getJogador(index) {
        return this.jogadores[index];
    }
    getPontuacao(tempo, tentativas) {
        let pontuacao = 10;
        if (tempo > this.tempo_inicio) {
            const tempo_ultrapassado = tempo - this.tempo_inicio;
            console.log("tempo_ultrapassado", tempo_ultrapassado);
            const tempo_ultrapassado_porcentagem = tempo_ultrapassado / (this.tempo_max - this.tempo_inicio);
            console.log("tempo_ultrapassado_porcentagem", tempo_ultrapassado_porcentagem);
            const prioridade_tempo_porcentagem = this.prioridade_tempo / 100;
            console.log("prioridade_tempo_porcentagem", prioridade_tempo_porcentagem);
            pontuacao = pontuacao - (tempo_ultrapassado_porcentagem * 10) * prioridade_tempo_porcentagem;
            console.log("pontuacao", pontuacao);
        }
        if (tentativas > this.quantidade_tentativas) {
            const tentativas_excedidas = tentativas - this.quantidade_tentativas;
            console.log("tentativas_excedidas", tentativas_excedidas);
            const prioridade_tentativas_porcentagem = (100 - this.prioridade_tempo) / 100;
            console.log("prioridade_tentativas_porcentagem", prioridade_tentativas_porcentagem);
            let pontuacao_tentativas = pontuacao * prioridade_tentativas_porcentagem;
            console.log("pontuacao_tentativas", pontuacao_tentativas);
            const pontuacao_perdida_tentativas = Math.min(0.25 * tentativas_excedidas, pontuacao_tentativas);
            console.log("pontuacao_perdida_tentativas", pontuacao_perdida_tentativas);
            pontuacao = pontuacao - pontuacao_perdida_tentativas;
        }
        return parseFloat(pontuacao.toFixed(2));
    }
    toString() {
        return "Jogo: " + this.titulo + " | Tempo Inicio: " + this.tempo_inicio + " | Tempo Max: " + this.tempo_max + " | Quantidade Tentativas: " + this.quantidade_tentativas + " | Prioridade Tempo: " + this.prioridade_tempo + " | Mostrar Cartas Antes: " + this.mostrar_cartas_antes;
    }
}


/***/ }),

/***/ "YeSf":
/*!*******************************************************!*\
  !*** ./src/app/Componetes/turmas/turmas.component.ts ***!
  \*******************************************************/
/*! exports provided: TurmasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmasComponent", function() { return TurmasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TurmasComponent {
    constructor() { }
    ngOnInit() {
    }
}
TurmasComponent.ɵfac = function TurmasComponent_Factory(t) { return new (t || TurmasComponent)(); };
TurmasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurmasComponent, selectors: [["app-turmas"]], decls: 1, vars: 0, template: function TurmasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJtYXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurmasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-turmas',
                templateUrl: './turmas.component.html',
                styleUrls: ['./turmas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/splitter */ "ZZi9");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/knob */ "EbAv");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Componetes_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Componetes/login/login.component */ "3zbm");
/* harmony import */ var _Componetes_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Componetes/cadastro/cadastro.component */ "Zy0L");
/* harmony import */ var _Componetes_validar_email_validar_email_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Componetes/validar-email/validar-email.component */ "jVCA");
/* harmony import */ var _Componetes_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Componetes/menu/menu.component */ "IDV5");
/* harmony import */ var _Componetes_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Componetes/home/home.component */ "B36T");
/* harmony import */ var _Componetes_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Componetes/rodape/rodape.component */ "9HOZ");
/* harmony import */ var _Componetes_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Componetes/admin/admin.component */ "a78z");
/* harmony import */ var _Componetes_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Componetes/menu-admin/menu-admin.component */ "e/wr");
/* harmony import */ var _Componetes_turmas_turmas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Componetes/turmas/turmas.component */ "YeSf");
/* harmony import */ var _Componetes_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Componetes/jogo/jogo.component */ "CSgF");
/* harmony import */ var _Componetes_jogo_memoria_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Componetes/jogo-memoria/jogo-memoria.component */ "q1rB");
/* harmony import */ var _Componetes_fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Componetes/fim-jogo-memoria/fim-jogo-memoria.component */ "zI3q");
/* harmony import */ var _Componetes_iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Componetes/iniciar-jogo-memoria/iniciar-jogo-memoria.component */ "jpfG");
/* harmony import */ var _Componetes_configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Componetes/configurar-jogo-memoria/configurar-jogo-memoria.component */ "C5p/");
/* harmony import */ var _Componetes_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Componetes/visualizacao-jogo-memoria/visualizacao-jogo-memoria.component */ "cmSL");
/* harmony import */ var _Componetes_subcomponents_pick_list_pick_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Componetes/subcomponents/pick-list/pick-list.component */ "jPBG");
//Modulos do Angular






//Modulos do Firebase



//Modolos do Primeng















//Componetes do Sistema




















const routes = [
    { path: 'login', component: _Componetes_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
    { path: 'cadastro', component: _Componetes_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__["CadastroComponent"] },
    { path: '', component: _Componetes_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"] },
    { path: 'admin', component: _Componetes_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"] },
    { path: 'validar-email', component: _Componetes_validar_email_validar_email_component__WEBPACK_IMPORTED_MODULE_27__["ValidarEmailComponent"] },
    { path: 'atividade', component: _Componetes_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_34__["JogoComponent"] },
    { path: 'jogo-memoria', component: _Componetes_jogo_memoria_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_35__["JogoMemoriaComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseconfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_13__["MenubarModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_15__["DividerModule"],
            primeng_splitter__WEBPACK_IMPORTED_MODULE_16__["SplitterModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
            primeng_knob__WEBPACK_IMPORTED_MODULE_18__["KnobModule"],
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_20__["SliderModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__["InputSwitchModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__["ProgressBarModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_23__["ToastModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
        _Componetes_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _Componetes_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__["CadastroComponent"],
        _Componetes_validar_email_validar_email_component__WEBPACK_IMPORTED_MODULE_27__["ValidarEmailComponent"],
        _Componetes_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"],
        _Componetes_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
        _Componetes_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_30__["RodapeComponent"],
        _Componetes_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"],
        _Componetes_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_32__["MenuAdminComponent"],
        _Componetes_turmas_turmas_component__WEBPACK_IMPORTED_MODULE_33__["TurmasComponent"],
        _Componetes_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_34__["JogoComponent"],
        _Componetes_jogo_memoria_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_35__["JogoMemoriaComponent"],
        _Componetes_fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_36__["FimJogoMemoriaComponent"],
        _Componetes_iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_37__["IniciarJogoMemoriaComponent"],
        _Componetes_configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_38__["ConfigurarJogoMemoriaComponent"],
        _Componetes_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_39__["VisualizacaoJogoMemoriaComponent"],
        _Componetes_subcomponents_pick_list_pick_list_component__WEBPACK_IMPORTED_MODULE_40__["PickListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_13__["MenubarModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_15__["DividerModule"],
        primeng_splitter__WEBPACK_IMPORTED_MODULE_16__["SplitterModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
        primeng_knob__WEBPACK_IMPORTED_MODULE_18__["KnobModule"],
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_20__["SliderModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__["InputSwitchModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__["ProgressBarModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_23__["ToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                    _Componetes_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _Componetes_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__["CadastroComponent"],
                    _Componetes_validar_email_validar_email_component__WEBPACK_IMPORTED_MODULE_27__["ValidarEmailComponent"],
                    _Componetes_menu_menu_component__WEBPACK_IMPORTED_MODULE_28__["MenuComponent"],
                    _Componetes_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                    _Componetes_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_30__["RodapeComponent"],
                    _Componetes_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"],
                    _Componetes_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_32__["MenuAdminComponent"],
                    _Componetes_turmas_turmas_component__WEBPACK_IMPORTED_MODULE_33__["TurmasComponent"],
                    _Componetes_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_34__["JogoComponent"],
                    _Componetes_jogo_memoria_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_35__["JogoMemoriaComponent"],
                    _Componetes_fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_36__["FimJogoMemoriaComponent"],
                    _Componetes_iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_37__["IniciarJogoMemoriaComponent"],
                    _Componetes_configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_38__["ConfigurarJogoMemoriaComponent"],
                    _Componetes_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_39__["VisualizacaoJogoMemoriaComponent"],
                    _Componetes_subcomponents_pick_list_pick_list_component__WEBPACK_IMPORTED_MODULE_40__["PickListComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseconfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                    primeng_password__WEBPACK_IMPORTED_MODULE_12__["PasswordModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_13__["MenubarModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_15__["DividerModule"],
                    primeng_splitter__WEBPACK_IMPORTED_MODULE_16__["SplitterModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_17__["DynamicDialogModule"],
                    primeng_knob__WEBPACK_IMPORTED_MODULE_18__["KnobModule"],
                    primeng_skeleton__WEBPACK_IMPORTED_MODULE_19__["SkeletonModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_20__["SliderModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_21__["InputSwitchModule"],
                    primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__["ProgressBarModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_23__["ToastModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
                entryComponents: [
                    _Componetes_fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_36__["FimJogoMemoriaComponent"],
                    _Componetes_iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_37__["IniciarJogoMemoriaComponent"],
                    _Componetes_configurar_jogo_memoria_configurar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_38__["ConfigurarJogoMemoriaComponent"],
                    _Componetes_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_39__["VisualizacaoJogoMemoriaComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zy0L":
/*!***********************************************************!*\
  !*** ./src/app/Componetes/cadastro/cadastro.component.ts ***!
  \***********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










function CadastroComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cadastro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "25rem", "margin-bottom": "2em", "margin": "0 auto", "text-align": "center" }; };
const _c1 = function () { return { "width": "100%" }; };
class CadastroComponent {
    constructor(authService) {
        this.authService = authService;
        this.nome = "";
        this.email = "";
        this.senha = "";
        this.re_senha = "";
    }
    ngOnInit() {
    }
    cadastrar() {
        if (this.senha == this.re_senha) {
            this.authService.SignUp(this.email, this.senha, this.nome);
        }
    }
}
CadastroComponent.ɵfac = function CadastroComponent_Factory(t) { return new (t || CadastroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
CadastroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CadastroComponent, selectors: [["app-cadastro"]], decls: 30, vars: 26, consts: [[1, "center"], ["pTemplate", "header"], [1, "p-float-label"], ["id", "nome-input", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "nome-input"], ["id", "email-input", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "email-input"], ["id", "senha-input", "type", "password", "pPassword", "", 3, "ngModel", "ngModelChange"], ["for", "senha-input"], ["id", "re-senha-input", "type", "password", "pPassword", "", 3, "ngModel", "feedback", "ngModelChange"], ["for", "re-senha-input"], ["pButton", "", "type", "button", "label", "Cadastrar", 3, "click"], ["pButton", "", "type", "button", "label", "Cadastrar com Google", "icon", "pi pi-google", 1, "p-button-outlined", "p-button-rounded", "p-button-info", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active"]], template: function CadastroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CadastroComponent_ng_template_1_Template, 4, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_3_listener($event) { return ctx.nome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_8_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_13_listener($event) { return ctx.senha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_18_listener($event) { return ctx.re_senha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Repetir Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroComponent_Template_button_click_22_listener() { return ctx.cadastrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroComponent_Template_button_click_25_listener() { return ctx.authService.GoogleAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Voltar Para Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.senha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.re_senha)("feedback", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_password__WEBPACK_IMPORTED_MODULE_6__["PasswordDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"]], styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: 0;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjs7QUFFbkMiLCJmaWxlIjoiY2FkYXN0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cadastro',
                templateUrl: './cadastro.component.html',
                styleUrls: ['./cadastro.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "a78z":
/*!*****************************************************!*\
  !*** ./src/app/Componetes/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-admin/menu-admin.component */ "e/wr");






class AdminComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userReady = false;
    }
    ngOnInit() {
        if (!this.authService.userData && !this.authService.userReady) {
            this.router.navigate(["login"]);
        }
        else {
            let time = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000).subscribe(() => {
                if (this.authService.userData != undefined) {
                    this.userReady = true;
                    time.unsubscribe();
                }
            });
            let time2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000).subscribe(() => {
                if (this.userReady) {
                    if (this.authService.userData.admin != undefined) {
                        time2.unsubscribe();
                        if (!this.authService.userData.admin) {
                            this.router.navigate(['']);
                        }
                    }
                }
            });
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 1, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-admin");
    } }, directives: [_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__["MenuAdminComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "b43b":
/*!*************************************************!*\
  !*** ./src/app/Servicos/carta/carta.service.ts ***!
  \*************************************************/
/*! exports provided: CartaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaService", function() { return CartaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/Carta */ "HGQ1");



class CartaService {
    constructor() {
        this.cartasNomes = [
            "Alta Temperatura",
            "Alta Voltagem",
            "Atmosfera Explosiva",
            "Campo Eletromagnetico",
            "Forte Campo Magnético",
            "Material Radioativo",
            "Raio Laser",
            "Substâncias Comburante",
            "Substâncias Explosivas",
            "Substâncias Toxicas",
            "Veiculo de Movimenta Carga",
            "Carga suspensa",
            "Perigo de tropeçamento",
            "Risco biológico",
            "Risco de queda em desnivelamento",
            "Substância nociva",
            "Substâncias corrosivas",
            "Temperatura baixa",
            "Vários perigos"
        ];
    }
    getCartaPair(nome) {
        let cartas = [];
        let carta = new src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__["Carta"]();
        carta.conteudo = nome;
        carta.tipo = "texto";
        let index = this.cartasNomes.indexOf(nome) + "";
        carta.id = index;
        cartas.push(carta);
        carta = new src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__["Carta"]();
        carta.id = index;
        const indexSrc = ((parseInt(index) + 1) + "");
        if (indexSrc.length == 1) {
            index = "00" + (parseInt(index) + 1);
        }
        else if (indexSrc.length == 2) {
            index = "0" + (parseInt(index) + 1);
        }
        carta.conteudo = "/assets/Placas/" + index + ".jpg";
        carta.tipo = "imagem";
        cartas.push(carta);
        return cartas;
    }
    getRandomCartaPair() {
        let cartas = [];
        let cartaIndex = this.getRandomInt(0, this.cartasNomes.length);
        let carta = new src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__["Carta"]();
        carta.conteudo = this.cartasNomes[cartaIndex];
        carta.tipo = "texto";
        let index = cartaIndex + "";
        carta.id = index;
        cartas.push(carta);
        carta = new src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__["Carta"]();
        carta.id = index;
        const indexSrc = ((parseInt(index) + 1) + "");
        if (indexSrc.length == 1) {
            index = "00" + (parseInt(index) + 1);
        }
        else if (indexSrc.length == 2) {
            index = "0" + (parseInt(index) + 1);
        }
        carta.conteudo = "/assets/Placas/" + index + ".jpg";
        carta.tipo = "imagem";
        cartas.push(carta);
        return cartas;
    }
    getCartasLista() {
        let cartasLista = [];
        for (let i = 0; i < 19; i++) {
            let carta = new src_app_Models_Carta__WEBPACK_IMPORTED_MODULE_1__["Carta"]();
            carta.tipo = "texto";
            carta.conteudo = this.cartasNomes[i];
            cartasLista.push(carta);
        }
        return cartasLista;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
CartaService.ɵfac = function CartaService_Factory(t) { return new (t || CartaService)(); };
CartaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartaService, factory: CartaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cmSL":
/*!*********************************************************************************************!*\
  !*** ./src/app/Componetes/visualizacao-jogo-memoria/visualizacao-jogo-memoria.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VisualizacaoJogoMemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizacaoJogoMemoriaComponent", function() { return VisualizacaoJogoMemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/Jogo */ "XDuE");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Servicos/jogos/jogos.service */ "hT5v");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");








function VisualizacaoJogoMemoriaComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Lista de jogadores(", ctx_r0.jogo.getTitulo(), ") ");
} }
function VisualizacaoJogoMemoriaComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lista de jogos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizacaoJogoMemoriaComponent_span_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jogador_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jogador_r5.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.jogo.getPontuacao(jogador_r5.tempo, jogador_r5.tentativas), "/10 ");
} }
function VisualizacaoJogoMemoriaComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizacaoJogoMemoriaComponent_span_4_div_1_Template, 6, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.jogadores);
} }
function VisualizacaoJogoMemoriaComponent_span_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jogo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jogo_r8.jogo_nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jogo_r8.pontuacao, "/10 ");
} }
function VisualizacaoJogoMemoriaComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizacaoJogoMemoriaComponent_span_5_div_1_Template, 6, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.jogos);
} }
const _c0 = function () { return { "width": "100%" }; };
class VisualizacaoJogoMemoriaComponent {
    constructor(ref, config, jogoService, authService) {
        this.ref = ref;
        this.config = config;
        this.jogoService = jogoService;
        this.authService = authService;
        this.jogo = new src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_1__["Jogo"]("", 0, 0, 0, 0, false, [], 0);
        this.jogadores = [];
        this.jogos = [];
    }
    ngOnInit() {
        console.log(this.config.data);
        if (this.config.data) {
            this.jogo = this.config.data.jogo;
            this.jogadores = this.jogo.getJogadores();
        }
        else {
            console.log("Não foi possível carregar o jogo");
            this.jogoService.getJogosDeUmUsuario(this.authService.userData.uid).subscribe(jogos => {
                this.jogos = jogos;
                console.log("jogos: ", this.jogos);
            });
        }
    }
    iniciar() {
        this.ref.close();
    }
}
VisualizacaoJogoMemoriaComponent.ɵfac = function VisualizacaoJogoMemoriaComponent_Factory(t) { return new (t || VisualizacaoJogoMemoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_3__["JogosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
VisualizacaoJogoMemoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizacaoJogoMemoriaComponent, selectors: [["app-visualizacao-jogo-memoria"]], decls: 8, vars: 7, consts: [[1, "p-grid"], [1, "p-col-12"], ["style", "text-align: center;", 4, "ngIf"], ["class", "main-data", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Fechar", 3, "click"], [2, "text-align", "center"], [1, "main-data"], ["class", "p-col-12", 4, "ngFor", "ngForOf"], [1, "data-row"], [1, "data-name"], [1, "data-points"], [4, "ngFor", "ngForOf"]], template: function VisualizacaoJogoMemoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisualizacaoJogoMemoriaComponent_h1_2_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisualizacaoJogoMemoriaComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisualizacaoJogoMemoriaComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisualizacaoJogoMemoriaComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizacaoJogoMemoriaComponent_Template_button_click_7_listener() { return ctx.iniciar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogo.getTitulo() != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogos.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogo.getTitulo() != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogos.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".main-data[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.data-row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    transition: all 0.2s ease-in-out;\r\n\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.data-row[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6YWNhby1qb2dvLW1lbW9yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDIiwiZmlsZSI6InZpc3VhbGl6YWNhby1qb2dvLW1lbW9yaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRhdGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRhdGEtcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0YS1yb3c6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizacaoJogoMemoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visualizacao-jogo-memoria',
                templateUrl: './visualizacao-jogo-memoria.component.html',
                styleUrls: ['./visualizacao-jogo-memoria.component.css']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_3__["JogosService"] }, { type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "e/wr":
/*!***************************************************************!*\
  !*** ./src/app/Componetes/menu-admin/menu-admin.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");







function MenuAdminComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuAdminComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_ng_template_2_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.authService.SignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuAdminComponent {
    constructor(authService) {
        this.authService = authService;
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Turmas',
                icon: 'pi pi-users'
            },
            {
                label: 'Forum',
                icon: 'pi pi-book'
            },
            {
                label: 'Mural',
                icon: 'pi pi-users'
            },
        ];
    }
}
MenuAdminComponent.ɵfac = function MenuAdminComponent_Factory(t) { return new (t || MenuAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
MenuAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuAdminComponent, selectors: [["app-menu-admin"]], decls: 3, vars: 1, consts: [[3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["routerLink", "/", "routerLinkActive", "active"], ["src", "https://firebasestorage.googleapis.com/v0/b/sistema-seguranca-trabalho.appspot.com/o/logotipo300x300.png?alt=media&token=dd94a5b7-61cd-4f2c-9283-c2b27d968d1d", "height", "40", 1, "p-mr-2"], ["label", "Sair", 3, "click"]], template: function MenuAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuAdminComponent_ng_template_1_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuAdminComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_2__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-admin',
                templateUrl: './menu-admin.component.html',
                styleUrls: ['./menu-admin.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "eG0o":
/*!***********************************!*\
  !*** ./src/app/Models/Jogador.ts ***!
  \***********************************/
/*! exports provided: Jogador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jogador", function() { return Jogador; });
class Jogador {
    constructor(id, nome, tentativas, tempo) {
        this.id = '';
        this.nome = '';
        this.tentativas = 0;
        this.tempo = 0;
        this.id = id;
        this.nome = nome;
        this.tentativas = tentativas;
        this.tempo = tempo;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getTentativas() {
        return this.tentativas;
    }
    getTempo() {
        return this.tempo;
    }
    setId(id) {
        this.id = id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setTentativas(tentativas) {
        this.tentativas = tentativas;
    }
    setTempo(tempo) {
        this.tempo = tempo;
    }
    toString() {
        return "Nome: " + this.nome + " Tentativas: " + this.tentativas + " Tempo: " + this.tempo;
    }
}


/***/ }),

/***/ "hT5v":
/*!*************************************************!*\
  !*** ./src/app/Servicos/jogos/jogos.service.ts ***!
  \*************************************************/
/*! exports provided: JogosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosService", function() { return JogosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/Jogo */ "XDuE");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");






class JogosService {
    constructor(afs) {
        this.afs = afs;
    }
    getJogo(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const jogoRef = this.afs.doc(`Jogos/${id}`);
            jogoRef.get().subscribe(valor => {
                observer.next(valor.data());
            });
        });
    }
    getJogosDeUmUsuario(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const jogoRef = this.afs.collection('Jogos').get().subscribe(valor => {
                console.log("Query Snapshot: ", valor);
                let jogos = [];
                valor.forEach(function (doc) {
                    let jogo = doc.data();
                    let jogoO = new src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_2__["Jogo"](jogo.title, jogo.tempo_inicio, jogo.tempo_max, jogo.quantidade_tentativas, jogo.prioridade_tempo, jogo.mostrar_cartas_antes, jogo.cartas_seleciodadas, jogo.quantidade_cartas);
                    jogo.jogadores.forEach((jogador) => {
                        if (jogador.id == id) {
                            jogos.push({
                                jogo_nome: jogo.title,
                                pontuacao: jogoO.getPontuacao(jogador.tempo, jogador.tentativas)
                            });
                        }
                    });
                });
                observer.next(jogos);
            });
        });
    }
    criarJogo(jogo, id_visualizar) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.afs.collection('Jogos').add({
                id_visualizar: id_visualizar,
                title: jogo.getTitulo(),
                tempo_inicio: jogo.getTempoInicio(),
                tempo_max: jogo.getTempoMax(),
                quantidade_tentativas: jogo.getQuantidadeTentativas(),
                prioridade_tempo: jogo.getPrioridadeTempo(),
                mostrar_cartas_antes: jogo.getMostrarCartasAntes(),
                jogadores: jogo.getJogadores(),
                cartas_seleciodadas: jogo.getCartasSelecionada(),
                quantidade_cartas: jogo.getQuantidadeCartas(),
            }).then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                observer.next(docRef.id);
            })
                .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        });
    }
    adicionarJogador(id, jogador) {
        const novoJogador = {
            id: jogador.getId(),
            nome: jogador.getNome(),
            tentativas: jogador.getTentativas(),
            tempo: jogador.getTempo()
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const jogoRef = this.afs.doc(`Jogos/${id}`);
            // let jogadores: any[] = [];
            // jogoRef.get().subscribe(valor =>{
            //   jogadores = valor.data().jogadores;
            //   jogadores.push(novoJogador);
            //   console.log("Jogadores: ", jogadores);
            // });
            jogoRef.update({
                jogadores: firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.arrayUnion(novoJogador)
            }).then(function (docRef) {
                observer.next("adicionado");
            })
                .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        });
    }
    jogadorExiste(id, jogador_id) {
        let existe = false;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const jogoRef = this.afs.doc(`Jogos/${id}`);
            let jogadores = [];
            jogoRef.get().subscribe(valor => {
                jogadores = valor.data().jogadores;
                for (let i = 0; i < jogadores.length; i++) {
                    if (jogador_id == jogadores[i].id) {
                        existe = true;
                    }
                }
                observer.next(existe);
            });
        });
    }
    gerarUID() {
        let uid = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            uid += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return uid;
    }
}
JogosService.ɵfac = function JogosService_Factory(t) { return new (t || JogosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
JogosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JogosService, factory: JogosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JogosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "jPBG":
/*!***************************************************************************!*\
  !*** ./src/app/Componetes/subcomponents/pick-list/pick-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PickListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListComponent", function() { return PickListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Servicos/carta/carta.service */ "b43b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PickListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickListComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.adicionarSelecionada(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.conteudo);
} }
function PickListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickListComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removerSelecionada(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.conteudo);
} }
class PickListComponent {
    constructor(cartasService) {
        this.cartasService = cartasService;
        this.quantidadeTotal = 0;
        this.cartas = [];
        this.cartasSelecionadas = [];
    }
    ngOnInit() {
        this.cartas = this.cartasService.getCartasLista();
        this.timerCheckInvalidCartas = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000).subscribe(() => {
            if (this.cartasSelecionadas.length > (this.quantidadeTotal / 2)) {
                this.ajustarCartas();
            }
        });
    }
    ngOnDestroy() {
        this.timerCheckInvalidCartas.unsubscribe();
    }
    adicionarSelecionada(carta) {
        if (this.cartasSelecionadas.length < (this.quantidadeTotal / 2)) {
            this.cartasSelecionadas.push(carta);
            this.cartas = this.cartas.filter(c => c.conteudo != carta.conteudo);
        }
    }
    removerSelecionada(carta) {
        this.cartas.push(carta);
        this.cartasSelecionadas = this.cartasSelecionadas.filter(c => c.conteudo != carta.conteudo);
    }
    ajustarCartas() {
        for (let i = 0; i < Math.abs((this.quantidadeTotal / 2) - this.cartasSelecionadas.length); i++) {
            this.cartas.push(this.cartasSelecionadas.pop());
        }
    }
}
PickListComponent.ɵfac = function PickListComponent_Factory(t) { return new (t || PickListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_2__["CartaService"])); };
PickListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PickListComponent, selectors: [["app-pick-list"]], inputs: { quantidadeTotal: "quantidadeTotal" }, decls: 9, vars: 2, consts: [[1, "pickList"], [1, "info"], [1, "dragSide", "container"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropSide", "container"], [1, "item", 3, "click"]], template: function PickListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todas Cartas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cartas Selecionadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PickListComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PickListComponent_div_8_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartasSelecionadas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".pickList[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 35rem;\r\n    min-height: 0;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 40%;\r\n    height: 80%;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    overflow: auto;\r\n    font: 1.5rem 'Roboto', sans-serif;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]{\r\n    min-height: 3rem;\r\n    max-height: 3rem;\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 95%;\r\n    height: 3rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    margin-top: 0.5rem;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover{\r\n    background-color: #81d4fa;\r\n    color: #000;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InBpY2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2tMaXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250OiAxLjVyZW0gJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgIG1heC1oZWlnaHQ6IDNyZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxZDRmYTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLmluZm97XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pick-list',
                templateUrl: './pick-list.component.html',
                styleUrls: ['./pick-list.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_2__["CartaService"] }]; }, { quantidadeTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jVCA":
/*!*********************************************************************!*\
  !*** ./src/app/Componetes/validar-email/validar-email.component.ts ***!
  \*********************************************************************/
/*! exports provided: ValidarEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarEmailComponent", function() { return ValidarEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");







function ValidarEmailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Validar Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "100%" }; };
function ValidarEmailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Agora que voc\u00EA realizou o cadastro em nosso sistema, Por favor valide seu email no endere\u00E7o cadastrado abaixo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Caso n\u00E3o tenha recebido o email de valida\u00E7\u00E3o, Clique no bot\u00E3o acima. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", user_r2.email);
} }
const _c1 = function () { return { "width": "25rem", "margin-bottom": "2em", "margin": "0 auto", "text-align": "center" }; };
class ValidarEmailComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
ValidarEmailComponent.ɵfac = function ValidarEmailComponent_Factory(t) { return new (t || ValidarEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ValidarEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidarEmailComponent, selectors: [["app-validar-email"]], decls: 3, vars: 4, consts: [["pTemplate", "header"], [4, "ngIf"], ["pButton", "", "type", "button", 1, "p-button-outlined", "p-button-rounded", "p-button-info", 3, "label"]], template: function ValidarEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidarEmailComponent_ng_template_1_Template, 4, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidarEmailComponent_div_2_Template, 11, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGFyLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidarEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validar-email',
                templateUrl: './validar-email.component.html',
                styleUrls: ['./validar-email.component.css']
            }]
    }], function () { return [{ type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jpfG":
/*!***********************************************************************************!*\
  !*** ./src/app/Componetes/iniciar-jogo-memoria/iniciar-jogo-memoria.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IniciarJogoMemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarJogoMemoriaComponent", function() { return IniciarJogoMemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/Jogo */ "XDuE");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");






function IniciarJogoMemoriaComponent_h2_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " As cartas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ir\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " iniciar viradas para cima. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IniciarJogoMemoriaComponent_h2_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " As cartas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "n\u00E3o ir\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " iniciar viradas para cima. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "100%" }; };
class IniciarJogoMemoriaComponent {
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
        this.jogo = new src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_1__["Jogo"]("", 0, 0, 0, 0, false, [], 0);
    }
    ngOnInit() {
        this.jogo = this.config.data.jogo;
    }
    iniciar() {
        this.ref.close();
    }
    formatarTempo(tempo) {
        let tempoFormatado = "";
        let minutos = Math.floor(tempo / 60);
        let segundos = (tempo - Math.floor(tempo / 60) * 60);
        if (minutos < 10)
            tempoFormatado += "0" + minutos;
        else
            tempoFormatado += minutos;
        tempoFormatado += ":";
        if (segundos < 10)
            tempoFormatado += "0" + segundos;
        else
            tempoFormatado += segundos;
        return tempoFormatado;
    }
}
IniciarJogoMemoriaComponent.ɵfac = function IniciarJogoMemoriaComponent_Factory(t) { return new (t || IniciarJogoMemoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"])); };
IniciarJogoMemoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IniciarJogoMemoriaComponent, selectors: [["app-iniciar-jogo-memoria"]], decls: 41, vars: 11, consts: [[1, "p-grid"], [1, "p-col-12"], [2, "text-align", "center"], [1, "destaque"], ["style", "text-align: center;", 4, "ngIf"], ["pButton", "", "type", "button", "label", "Iniciar", 3, "click"]], template: function IniciarJogoMemoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Voc\u00EA poder\u00E1 usar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tentativas antes de come\u00E7ar a perder pontos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Voc\u00EA ter\u00E1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " minutos para finalizar o jogo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Voc\u00EA come\u00E7ara a perder pontos a partir de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " minutos no cron\u00F4metro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " O peso da pontua\u00E7\u00E3o ser\u00E1 de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " para tempo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " E o peso da pontua\u00E7\u00E3o ser\u00E1 de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " para quantidade de tentativas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, IniciarJogoMemoriaComponent_h2_33_Template, 5, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, IniciarJogoMemoriaComponent_h2_34_Template, 5, 0, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Clique no Bot\u00E3o Abaixo Para Iniciar o Jogo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IniciarJogoMemoriaComponent_Template_button_click_40_listener() { return ctx.iniciar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jogo.getTitulo(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jogo.getQuantidadeTentativas());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatarTempo(ctx.jogo.getTempoMax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatarTempo(ctx.jogo.getTempoMax() - ctx.jogo.getTempoInicio()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jogo.getPrioridadeTempo(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", 100 - ctx.jogo.getPrioridadeTempo(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogo.getMostrarCartasAntes());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jogo.getMostrarCartasAntes());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: [".destaque[_ngcontent-%COMP%]{\r\n    color: #81d4fa;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpYXItam9nby1tZW1vcmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImluaWNpYXItam9nby1tZW1vcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzdGFxdWV7XHJcbiAgICBjb2xvcjogIzgxZDRmYTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IniciarJogoMemoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iniciar-jogo-memoria',
                templateUrl: './iniciar-jogo-memoria.component.html',
                styleUrls: ['./iniciar-jogo-memoria.component.css']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }]; }, null); })();


/***/ }),

/***/ "q1rB":
/*!*******************************************************************!*\
  !*** ./src/app/Componetes/jogo-memoria/jogo-memoria.component.ts ***!
  \*******************************************************************/
/*! exports provided: JogoMemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoMemoriaComponent", function() { return JogoMemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fim-jogo-memoria/fim-jogo-memoria.component */ "zI3q");
/* harmony import */ var _iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iniciar-jogo-memoria/iniciar-jogo-memoria.component */ "jpfG");
/* harmony import */ var src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/Jogo */ "XDuE");
/* harmony import */ var _visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../visualizacao-jogo-memoria/visualizacao-jogo-memoria.component */ "cmSL");
/* harmony import */ var src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Servicos/auth/auth.service */ "7+Nv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Servicos/jogos/jogos.service */ "hT5v");
/* harmony import */ var src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Servicos/carta/carta.service */ "b43b");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../menu/menu.component */ "IDV5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rodape/rodape.component */ "9HOZ");
















function JogoMemoriaComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carta_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carta_r1.conteudo);
} }
function JogoMemoriaComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carta_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carta_r1.conteudo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function JogoMemoriaComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JogoMemoriaComponent_div_3_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const carta_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selecionarCarta(carta_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JogoMemoriaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JogoMemoriaComponent_div_3_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JogoMemoriaComponent_div_3_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JogoMemoriaComponent_div_3_div_3_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carta_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", carta_r1.tipo == "texto" && carta_r1.isSelecionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", carta_r1.tipo == "imagem" && carta_r1.isSelecionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !carta_r1.isSelecionada);
} }
class JogoMemoriaComponent {
    constructor(dialogService, authService, router, arouter, jogoService, cartasService) {
        this.dialogService = dialogService;
        this.authService = authService;
        this.router = router;
        this.arouter = arouter;
        this.jogoService = jogoService;
        this.cartasService = cartasService;
        this.debug_mode = false;
        this.visualizando = false;
        this.jogo_id = "";
        this.refJanela = null;
        this.cartas = [];
        this.cartasSelecionadas = [];
        this.tempoMaximo = 260;
        this.timerString = "";
        this.timerSegundos = 0;
        this.timerMostrarCartasInicio = 5;
        this.inicioJogo = false;
        this.fimDeJogo = false;
        this.userReady = false;
        this.jogador = {
            id: 0,
            nome: "",
            tentativas: 0,
            tempo: 0
        };
    }
    ngOnInit() {
        this.arouter.queryParamMap
            .subscribe((params) => {
            this.jogo_id = String(params.get("id"));
            const id_visualizar = String(params.get("list"));
            this.jogoService.getJogo(this.jogo_id).subscribe((jogo) => {
                if (jogo) {
                    this.tempoMaximo = jogo.tempo_max;
                    this.timerSegundos = this.tempoMaximo;
                    this.jogo = new src_app_Models_Jogo__WEBPACK_IMPORTED_MODULE_5__["Jogo"](jogo.title, jogo.tempo_inicio, jogo.tempo_max, jogo.quantidade_tentativas, jogo.prioridade_tempo, jogo.mostrar_cartas_antes, jogo.cartas_seleciodadas, jogo.quantidade_cartas);
                    this.jogo.setJogadores(jogo.jogadores);
                    this.inicializarCartas();
                    if (id_visualizar == jogo.id_visualizar) {
                        this.visualizando = true;
                        this.mostrarVisualizacao();
                    }
                    else {
                        this.mostrarIniciar();
                    }
                }
                else {
                    console.error("Jogo não encontrado");
                    // this.router.navigate(['/']);
                    // if(this.refJanela){
                    //   this.refJanela.close();
                    // }
                }
            });
        });
        let time = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000).subscribe(() => {
            if (this.authService.userData != undefined) {
                this.userReady = true;
                time.unsubscribe();
            }
        });
        let time2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000).subscribe(() => {
            if (this.userReady) {
                this.jogador = {
                    id: this.authService.userData.uid,
                    nome: this.authService.userData.displayName,
                    tentativas: 0,
                    tempo: 0
                };
                this.jogoService.jogadorExiste(this.jogo_id, this.jogador.id).subscribe((existe) => {
                    if (existe && !this.visualizando) {
                        if (this.refJanela) {
                            this.refJanela.close();
                        }
                        alert("Você já participou deste jogo!");
                        this.router.navigate(['']);
                    }
                });
                time2.unsubscribe();
            }
        });
        this.timerSegundos = this.tempoMaximo;
    }
    inicializarCartas() {
        console.log(this.jogo.getCartasSelecionada());
        if (this.jogo.getCartasSelecionada().length != 0) {
            for (let i = 0; i < this.jogo.getCartasSelecionada().length; i++) {
                this.cartas = this.cartas.concat(this.cartasService.getCartaPair(this.jogo.getCartasSelecionada()[i]));
            }
            if (this.cartas.length != this.jogo.getQuantidadeCartas()) {
                const quantidade_restante = this.jogo.getQuantidadeCartas() - this.cartas.length;
                for (let index = 0; index < quantidade_restante / 2; index++) {
                    do {
                        let cartas = this.cartasService.getRandomCartaPair();
                        let valido = true;
                        this.cartas.forEach((carta) => {
                            if (carta.id == cartas[0].id) {
                                valido = false;
                            }
                        });
                        if (valido) {
                            this.cartas = this.cartas.concat(cartas);
                            break;
                        }
                    } while (true);
                }
            }
        }
        else {
            for (let index = 0; index < this.jogo.getQuantidadeCartas() / 2; index++) {
                do {
                    let cartas = this.cartasService.getRandomCartaPair();
                    let valido = true;
                    this.cartas.forEach((carta) => {
                        if (carta.id == cartas[0].id) {
                            valido = false;
                        }
                    });
                    if (valido) {
                        this.cartas = this.cartas.concat(cartas);
                        break;
                    }
                } while (true);
            }
        }
        this.cartas = this.shuffle(this.cartas);
    }
    mostrarCartas(tempo) {
        this.timerSegundos = tempo;
        this.virarCartas("cima");
        this.executarCronometroExibirCartas();
    }
    virarCartas(lado) {
        switch (lado) {
            case "cima":
                for (let i = 0; i < this.cartas.length; i++) {
                    this.cartas[i].isSelecionada = true;
                }
                break;
            case "baixo":
                for (let i = 0; i < this.cartas.length; i++) {
                    this.cartas[i].isSelecionada = false;
                }
                break;
        }
    }
    selecionarCarta(carta) {
        if (this.cartasSelecionadas.length < 2 && this.cartasSelecionadas.indexOf(this.cartas.indexOf(carta)) == -1) {
            this.cartasSelecionadas.push(this.cartas.indexOf(carta));
            carta.isSelecionada = true;
            if (this.cartasSelecionadas.length == 2) {
                if (this.checarPar()) {
                    this.cartas[this.cartasSelecionadas[0]].isCorreto = true;
                    this.cartas[this.cartasSelecionadas[1]].isCorreto = true;
                    this.resertarCartasSelecionadas();
                    if (this.checarFimDeJogo()) {
                        this.fimDeJogo = true;
                        this.jogador.tempo = this.tempoMaximo - this.timerSegundos;
                        this.mostraResultado();
                    }
                }
                else {
                    let time = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000).subscribe(() => {
                        this.desSelecionarCartas();
                        this.resertarCartasSelecionadas();
                        time.unsubscribe();
                    });
                }
                this.jogador.tentativas++;
                if (this.debug_mode) {
                    this.fimDeJogo = true;
                    this.jogador.tempo = this.tempoMaximo - this.timerSegundos;
                    this.mostraResultado();
                }
            }
        }
    }
    checarFimDeJogo() {
        let fimDeJogo = true;
        for (let i = 0; i < this.cartas.length; i++) {
            if (!this.cartas[i].isCorreto) {
                fimDeJogo = false;
            }
        }
        return fimDeJogo;
    }
    checarPar() {
        if (this.cartas[this.cartasSelecionadas[0]].id == this.cartas[this.cartasSelecionadas[1]].id) {
            return true;
        }
        else {
            return false;
        }
    }
    desSelecionarCartas() {
        this.cartas[this.cartasSelecionadas[0]].isSelecionada = false;
        this.cartas[this.cartasSelecionadas[1]].isSelecionada = false;
    }
    resertarCartasSelecionadas() {
        this.cartasSelecionadas.splice(0, 2);
    }
    shuffle(array) {
        var currentIndex = array.length, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
    executarCronometro() {
        let timerCronometro = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000).subscribe(() => {
            if (this.fimDeJogo) {
                timerCronometro.unsubscribe();
                return;
            }
            if (this.inicioJogo) {
                this.timerSegundos--;
            }
            this.timerString = this.formatarTempo(this.timerSegundos);
            if (this.timerSegundos == 0) {
                this.fimDeJogo = true;
                this.jogador.tempo = this.tempoMaximo;
                this.mostraResultado();
            }
        });
    }
    executarCronometroExibirCartas() {
        let timerCronometro = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000).subscribe(() => {
            if (this.fimDeJogo) {
                timerCronometro.unsubscribe();
                return;
            }
            if (this.inicioJogo) {
                this.timerSegundos--;
            }
            this.timerString = this.formatarTempo(this.timerSegundos);
            if (this.timerSegundos == 0) {
                this.tempoMaximo = this.jogo.getTempoMax();
                this.timerSegundos = this.tempoMaximo;
                this.inicioJogo = true;
                timerCronometro.unsubscribe();
                this.executarCronometro();
                this.virarCartas("baixo");
            }
        });
    }
    formatarTempo(tempo) {
        let tempoFormatado = "";
        let minutos = Math.floor(tempo / 60);
        let segundos = (tempo - Math.floor(tempo / 60) * 60);
        if (minutos < 10)
            tempoFormatado += "0" + minutos;
        else
            tempoFormatado += minutos;
        tempoFormatado += ":";
        if (segundos < 10)
            tempoFormatado += "0" + segundos;
        else
            tempoFormatado += segundos;
        return tempoFormatado;
    }
    mostraResultado() {
        const ref = this.dialogService.open(_fim_jogo_memoria_fim_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_3__["FimJogoMemoriaComponent"], {
            header: '',
            width: '70%',
            closable: false,
            data: {
                jogador: this.jogador,
                jogo_id: this.jogo_id,
                jogo: this.jogo
            },
        });
        this.refJanela = ref;
    }
    mostrarIniciar() {
        const ref = this.dialogService.open(_iniciar_jogo_memoria_iniciar_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_4__["IniciarJogoMemoriaComponent"], {
            header: '',
            data: {
                jogo: this.jogo
            }
        });
        this.refJanela = ref;
        ref.onClose.subscribe(() => {
            if (this.jogo.getMostrarCartasAntes()) {
                this.mostrarCartas(this.timerMostrarCartasInicio);
                this.inicioJogo = true;
            }
            else {
                this.inicioJogo = true;
                this.executarCronometro();
            }
        });
    }
    mostrarVisualizacao() {
        const ref = this.dialogService.open(_visualizacao_jogo_memoria_visualizacao_jogo_memoria_component__WEBPACK_IMPORTED_MODULE_6__["VisualizacaoJogoMemoriaComponent"], {
            header: '',
            width: '50%',
            data: {
                jogo: this.jogo
            }
        });
        this.refJanela = ref;
        ref.onClose.subscribe(() => {
            this.router.navigate(['']);
        });
    }
}
JogoMemoriaComponent.ɵfac = function JogoMemoriaComponent_Factory(t) { return new (t || JogoMemoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_9__["JogosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_10__["CartaService"])); };
JogoMemoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JogoMemoriaComponent, selectors: [["app-jogo-memoria"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])], decls: 9, vars: 2, consts: [[1, "wrapper"], [1, "cartas-container"], ["class", "carta", 4, "ngFor", "ngForOf"], [1, "p-grid", "p-ai-stretch", "cronometro-container"], [1, "p-col-12"], [1, "cronometro", "box-stretched"], [1, "carta"], ["class", "box box-stretched carta-texto", 4, "ngIf"], ["class", "box box-stretched carta-imagem", 4, "ngIf"], ["class", "box box-stretched carta-virada", 3, "click", 4, "ngIf"], [1, "box", "box-stretched", "carta-texto"], [1, "box", "box-stretched", "carta-imagem"], [1, "imagem-carta", 3, "src"], [1, "box", "box-stretched", "carta-virada", 3, "click"]], template: function JogoMemoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JogoMemoriaComponent_div_3_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-rodape");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timerString, " ");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_13__["RodapeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], styles: [".cartas-container[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 40rem;\r\n    height: 40rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.carta[_ngcontent-%COMP%]{\r\n    width: 8rem;\r\n    height: 8rem;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    margin: 1rem;\r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-e);\r\n    text-align: center;\r\n    padding: 65px 0;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: auto;\r\n\r\n}\r\n\r\n.cronometro[_ngcontent-%COMP%] {\r\n    background-color: var(--surface-e);\r\n    text-align: center;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),\r\n      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\r\n    margin: auto;\r\n    font-size: xx-large;\r\n    color: white;\r\n    font-weight: bolder;\r\n    vertical-align: middle;\r\n    padding: 10px;\r\n}\r\n\r\n.carta-imagem[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: rgb(28, 146, 107);\r\n    padding: 0 0;\r\n}\r\n\r\n.imagem-carta[_ngcontent-%COMP%]{\r\n    max-width: 79%;\r\n    max-height: 79%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n}\r\n\r\n.carta-texto[_ngcontent-%COMP%]{\r\n    background-color: rgb(28, 146, 107);\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\n\r\n.carta-virada[_ngcontent-%COMP%]{\r\n    background-color: rgb(17, 54, 95);\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\n\r\n.box-stretched[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.cronometro-container[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    background: var(--surface-d);\r\n    border-radius: 4px;\r\n    height: 75px;\r\n    width: 1000px;\r\n    margin: auto;\r\n}\r\n\r\n.vertical-container[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    background: var(--surface-d);\r\n    border-radius: 4px;\r\n    height: 800px;\r\n    width: 1000px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvZ28tbWVtb3JpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQVFBLFFBQVE7O0FBQ1I7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7c0VBQ2tFO0lBQ2xFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjtzRUFDa0U7SUFDbEUsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoiam9nby1tZW1vcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydGFzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIGhlaWdodDogNDByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FydGF7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC0tLSAqL1xyXG4uYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2NXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG4uY3Jvbm9tZXRybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY2FydGEtaW1hZ2Vte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjgsIDE0NiwgMTA3KTtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxufVxyXG4uaW1hZ2VtLWNhcnRhe1xyXG4gICAgbWF4LXdpZHRoOiA3OSU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3OSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcnRhLXRleHRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxNDYsIDEwNyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jYXJ0YS12aXJhZGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDU0LCA5NSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5ib3gtc3RyZXRjaGVkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uY3Jvbm9tZXRyby1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnZlcnRpY2FsLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JogoMemoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jogo-memoria',
                templateUrl: './jogo-memoria.component.html',
                styleUrls: ['./jogo-memoria.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }, { type: src_app_Servicos_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_9__["JogosService"] }, { type: src_app_Servicos_carta_carta_service__WEBPACK_IMPORTED_MODULE_10__["CartaService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zI3q":
/*!***************************************************************************!*\
  !*** ./src/app/Componetes/fim-jogo-memoria/fim-jogo-memoria.component.ts ***!
  \***************************************************************************/
/*! exports provided: FimJogoMemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FimJogoMemoriaComponent", function() { return FimJogoMemoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Models_Jogador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/Jogador */ "eG0o");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicos/jogos/jogos.service */ "hT5v");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");







const _c0 = function () { return { "width": "100%" }; };
class FimJogoMemoriaComponent {
    constructor(ref, config, router, jogoService) {
        this.ref = ref;
        this.config = config;
        this.router = router;
        this.jogoService = jogoService;
        this.jogo_id = "";
    }
    ngOnInit() {
        const jogador_id = this.config.data.jogador.id;
        const jogador_nome = this.config.data.jogador.nome;
        const jogador_tentativas = this.config.data.jogador.tentativas;
        const jogador_tempo = this.config.data.jogador.tempo;
        this.jogador = new src_app_Models_Jogador__WEBPACK_IMPORTED_MODULE_1__["Jogador"](jogador_id, jogador_nome, jogador_tentativas, jogador_tempo);
        this.jogo_id = this.config.data.jogo_id;
        this.jogo = this.config.data.jogo;
        this.persistirDados();
    }
    persistirDados() {
        this.jogoService.adicionarJogador(this.jogo_id, this.jogador).subscribe((resposta) => {
            if (resposta != "adicionado") {
                alert("Erro ao adicionar jogador");
            }
        });
    }
    concluir() {
        this.router.navigate(['']);
        this.ref.close();
    }
    formatarTempo(tempo) {
        let tempoFormatado = "";
        let minutos = Math.floor(tempo / 60);
        let segundos = (tempo - Math.floor(tempo / 60) * 60);
        if (minutos < 10)
            tempoFormatado += "0" + minutos;
        else
            tempoFormatado += minutos;
        tempoFormatado += ":";
        if (segundos < 10)
            tempoFormatado += "0" + segundos;
        else
            tempoFormatado += segundos;
        return tempoFormatado;
    }
    getPontuacao() {
        return this.jogo.getPontuacao(this.jogador.getTempo(), this.jogador.getTentativas());
    }
}
FimJogoMemoriaComponent.ɵfac = function FimJogoMemoriaComponent_Factory(t) { return new (t || FimJogoMemoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__["JogosService"])); };
FimJogoMemoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FimJogoMemoriaComponent, selectors: [["app-fim-jogo-memoria"]], decls: 30, vars: 6, consts: [[1, "p-grid"], [1, "p-col-12"], [2, "text-align", "center"], [1, "destaque"], ["pButton", "", "type", "button", "label", "Concluir", 3, "click"]], template: function FimJogoMemoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Parab\u00E9ns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Aqui est\u00E3o as informa\u00E7\u00F5es sobre o seu desempenho: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Voc\u00EA concluiu em: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " minutos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Voc\u00EA utilizou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " tentativas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sua pontua\u00E7\u00E3o foi de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FimJogoMemoriaComponent_Template_button_click_29_listener() { return ctx.concluir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatarTempo(ctx.jogador.getTempo()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jogador.getTentativas());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getPontuacao(), "/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]], styles: [".destaque[_ngcontent-%COMP%]{\r\n    color: #81d4fa;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbS1qb2dvLW1lbW9yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZmltLWpvZ28tbWVtb3JpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc3RhcXVle1xyXG4gICAgY29sb3I6ICM4MWQ0ZmE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FimJogoMemoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fim-jogo-memoria',
                templateUrl: './fim-jogo-memoria.component.html',
                styleUrls: ['./fim-jogo-memoria.component.css']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogRef"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DynamicDialogConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_Servicos_jogos_jogos_service__WEBPACK_IMPORTED_MODULE_4__["JogosService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map