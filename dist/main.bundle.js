webpackJsonp([0,3],{

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Xliff; });
var Xliff = (function () {
    function Xliff() {
    }
    return Xliff;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff.model.js.map

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_x2js_xml2json__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_x2js_xml2json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_x2js_xml2json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xliff_data_xliff_model__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffParserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XliffParserService = (function () {
    function XliffParserService(logger) {
        this.logger = logger;
        this.x2js = new __WEBPACK_IMPORTED_MODULE_2__node_modules_x2js_xml2json__({
            stripWhitespaces: false,
            useDoubleQuotes: true
        });
    }
    XliffParserService.prototype.parseToXliff = function (contentXml) {
        var contentJson = this.x2js.xml_str2json(contentXml);
        if (contentJson.length <= 0) {
            return null;
        }
        var xliff = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__xliff_data_xliff_model__["a" /* Xliff */](), contentJson);
        // TODO: Validate xliff format.
        this.logger.log('parse: ', xliff);
        return xliff;
    };
    XliffParserService.prototype.convertToXmlStr = function (xliffData) {
        return this.x2js.json2xml_str(xliffData);
    };
    XliffParserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */]) === 'function' && _a) || Object])
    ], XliffParserService);
    return XliffParserService;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-parser.service.js.map

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileHandlerService = (function () {
    function FileHandlerService(logger) {
        this.logger = logger;
        this._fileContent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.fileContent = this._fileContent.asObservable();
    }
    FileHandlerService.prototype.readContent = function (file) {
        var _this = this;
        this.logger.log('readContent:', file);
        this.fileReader = new FileReader();
        this.fileReader.onloadend = function (e) {
            _this._fileContent.next(_this.fileReader.result);
        };
        this.fileReader.readAsText(file);
    };
    FileHandlerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */]) === 'function' && _a) || Object])
    ], FileHandlerService);
    return FileHandlerService;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/file-handler.service.js.map

/***/ },

/***/ 347:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 347;


/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(456);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/main.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(logger, xliffParserService) {
        this.logger = logger;
        this.xliffParserService = xliffParserService;
        this.title = 'Xliff editor';
    }
    AppComponent.prototype.handleFileChange = function ($event) {
        this.xliffData = this.xliffParserService.parseToXliff($event);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */]],
            selector: 'app-root',
            template: __webpack_require__(630),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__["a" /* XliffParserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__["a" /* XliffParserService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/app.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_handler_file_handler_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__xliff_parser_xliff_parser_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_file_upload_file_upload_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_xliff_viewer_xliff_viewer_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_xliff_viewer_item_xliff_viewer_item_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utility_object_to_array_pipe__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_xliff_segment_xliff_segment_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_file_download_file_download_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_xliff_group_xliff_group_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_xliff_unit_xliff_unit_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_xliff_file_xliff_file_component__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_file_upload_file_upload_component__["a" /* FileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_xliff_viewer_xliff_viewer_component__["a" /* XliffViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_xliff_viewer_item_xliff_viewer_item_component__["a" /* XliffViewerItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__utility_object_to_array_pipe__["a" /* ObjectToArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_xliff_segment_xliff_segment_component__["a" /* XliffSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_file_download_file_download_component__["a" /* FileDownloadComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_xliff_group_xliff_group_component__["a" /* XliffGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_xliff_unit_xliff_unit_component__["a" /* XliffUnitComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_xliff_file_xliff_file_component__["a" /* XliffFileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__file_handler_file_handler_service__["a" /* FileHandlerService */],
                __WEBPACK_IMPORTED_MODULE_7__xliff_parser_xliff_parser_service__["a" /* XliffParserService */],
                __WEBPACK_IMPORTED_MODULE_5__utility_logger__["a" /* Logger */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/app.module.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_logger__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileDownloadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileDownloadComponent = (function () {
    function FileDownloadComponent(logger, xliffParserService) {
        this.logger = logger;
        this.xliffParserService = xliffParserService;
    }
    FileDownloadComponent.prototype.ngOnInit = function () {
    };
    /**
     * Convert the ready xliff data to xml string format for download.
     */
    FileDownloadComponent.prototype.download = function () {
        var blob = new Blob([this.xliffParserService.convertToXmlStr(this.xliffData)], { type: 'application/octet-stream' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */]) === 'function' && _a) || Object)
    ], FileDownloadComponent.prototype, "xliffData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], FileDownloadComponent.prototype, "enabled", void 0);
    FileDownloadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__utility_logger__["a" /* Logger */]],
            selector: 'app-file-download',
            template: __webpack_require__(631),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__utility_logger__["a" /* Logger */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__["a" /* XliffParserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__xliff_parser_xliff_parser_service__["a" /* XliffParserService */]) === 'function' && _c) || Object])
    ], FileDownloadComponent);
    return FileDownloadComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/file-download.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_logger__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_handler_file_handler_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadComponent = (function () {
    function FileUploadComponent(logger, fileHandlerService, renderer) {
        this.logger = logger;
        this.fileHandlerService = fileHandlerService;
        this.renderer = renderer;
        /** For notify parent component, when the input file content changed. */
        this.fileChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.fileChanged = function ($fileInput) {
        var _this = this;
        this.logger.log('fileUpload fileChanged: ', $fileInput);
        this.subscription = this.fileHandlerService.fileContent.subscribe(function (val) { return (val) ? _this.fileChange.emit(val) : null; }, function (err) { return _this.logger.error(err); });
        this.fileHandlerService.readContent($fileInput.target.files[0]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('fileInput'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object)
    ], FileUploadComponent.prototype, "fileInput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], FileUploadComponent.prototype, "fileChange", void 0);
    FileUploadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_2__file_handler_file_handler_service__["a" /* FileHandlerService */]
            ],
            selector: 'app-file-upload',
            template: __webpack_require__(632),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__utility_logger__["a" /* Logger */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__file_handler_file_handler_service__["a" /* FileHandlerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__file_handler_file_handler_service__["a" /* FileHandlerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */]) === 'function' && _d) || Object])
    ], FileUploadComponent);
    return FileUploadComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/file-upload.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_file_model__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XliffFileComponent = (function () {
    function XliffFileComponent() {
    }
    XliffFileComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(XliffFileComponent.prototype, "updateParentKeys", {
        get: function () {
            return (this.xliffFile._id) ? this.parentKeys.concat(this.xliffFile._id) : this.parentKeys;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_file_model__["a" /* XliffFile */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_file_model__["a" /* XliffFile */]) === 'function' && _a) || Object)
    ], XliffFileComponent.prototype, "xliffFile", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], XliffFileComponent.prototype, "parentKeys", void 0);
    XliffFileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-xliff-file',
            template: __webpack_require__(633)
        }), 
        __metadata('design:paramtypes', [])
    ], XliffFileComponent);
    return XliffFileComponent;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-file.component.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_group_model__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XliffGroupComponent = (function () {
    function XliffGroupComponent() {
    }
    XliffGroupComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(XliffGroupComponent.prototype, "updateParentKeys", {
        get: function () {
            return (this.xliffGroup._id) ? this.parentKeys.concat(this.xliffGroup._id) : this.parentKeys;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_group_model__["a" /* XliffGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_group_model__["a" /* XliffGroup */]) === 'function' && _a) || Object)
    ], XliffGroupComponent.prototype, "xliffGroup", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], XliffGroupComponent.prototype, "parentKeys", void 0);
    XliffGroupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-xliff-group',
            template: __webpack_require__(634)
        }), 
        __metadata('design:paramtypes', [])
    ], XliffGroupComponent);
    return XliffGroupComponent;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-group.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_segment_model__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffSegmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XliffSegmentComponent = (function () {
    function XliffSegmentComponent() {
    }
    XliffSegmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_segment_model__["a" /* XliffSegment */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_segment_model__["a" /* XliffSegment */]) === 'function' && _a) || Object)
    ], XliffSegmentComponent.prototype, "xliffSegment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], XliffSegmentComponent.prototype, "parentKeys", void 0);
    XliffSegmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-xliff-segment',
            template: __webpack_require__(635),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [])
    ], XliffSegmentComponent);
    return XliffSegmentComponent;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-segment.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_unit_model__ = __webpack_require__(469);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffUnitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XliffUnitComponent = (function () {
    function XliffUnitComponent() {
    }
    XliffUnitComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(XliffUnitComponent.prototype, "updateParentKeys", {
        get: function () {
            return (this.xliffUnit._id) ? this.parentKeys.concat(this.xliffUnit._id) : this.parentKeys;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_unit_model__["a" /* XliffUnit */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_unit_model__["a" /* XliffUnit */]) === 'function' && _a) || Object)
    ], XliffUnitComponent.prototype, "xliffUnit", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], XliffUnitComponent.prototype, "parentKeys", void 0);
    XliffUnitComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-xliff-unit',
            template: __webpack_require__(636)
        }), 
        __metadata('design:paramtypes', [])
    ], XliffUnitComponent);
    return XliffUnitComponent;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-unit.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffViewerItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var XliffViewerItemComponent = (function () {
    function XliffViewerItemComponent() {
    }
    XliffViewerItemComponent.prototype.ngOnInit = function () {
    };
    XliffViewerItemComponent.prototype.isArrayKey = function (key) {
        return /^\d+$/.test(key);
    };
    Object.defineProperty(XliffViewerItemComponent.prototype, "updateParentKeys", {
        get: function () {
            return (this.xliffItem['_id']) ? this.parentKeys.concat(this.xliffItem['_id']) : this.parentKeys;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */]) === 'function' && _a) || Object)
    ], XliffViewerItemComponent.prototype, "xliffItem", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], XliffViewerItemComponent.prototype, "parentKeys", void 0);
    XliffViewerItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-xliff-viewer-item',
            template: __webpack_require__(637),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [])
    ], XliffViewerItemComponent);
    return XliffViewerItemComponent;
    var _a;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-viewer-item.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_logger__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var XliffViewerComponent = (function () {
    function XliffViewerComponent(logger) {
        this.logger = logger;
    }
    Object.defineProperty(XliffViewerComponent.prototype, "enableDownloadFile", {
        /** Enable download file when xliff data is ready. */
        get: function () {
            return (this.xliffData) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    XliffViewerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__xliff_data_xliff_model__["a" /* Xliff */]) === 'function' && _a) || Object)
    ], XliffViewerComponent.prototype, "xliffData", void 0);
    XliffViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__utility_logger__["a" /* Logger */]],
            selector: 'app-xliff-viewer',
            template: __webpack_require__(638),
            styles: [__webpack_require__(629)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utility_logger__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__utility_logger__["a" /* Logger */]) === 'function' && _b) || Object])
    ], XliffViewerComponent);
    return XliffViewerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-viewer.component.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectToArrayPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectToArrayPipe = (function () {
    function ObjectToArrayPipe() {
    }
    ObjectToArrayPipe.prototype.transform = function (value, args) {
        if (typeof value !== 'object') {
            return value;
        }
        var arr = [];
        Object.keys(value).forEach(function (key) {
            arr.push({
                $key: key,
                $value: value[key]
            });
        });
        return arr;
    };
    ObjectToArrayPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'objectToArray'
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectToArrayPipe);
    return ObjectToArrayPipe;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/object-to-array.pipe.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffFile; });
var XliffFile = (function () {
    function XliffFile() {
    }
    return XliffFile;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-file.model.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffGroup; });
var XliffGroup = (function () {
    function XliffGroup() {
    }
    return XliffGroup;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-group.model.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffSegment; });
var XliffSegment = (function () {
    function XliffSegment() {
    }
    return XliffSegment;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-segment.model.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XliffUnit; });
var XliffUnit = (function () {
    function XliffUnit() {
    }
    return XliffUnit;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/xliff-unit.model.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/environment.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/polyfills.js.map

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Logger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        console.log(msg);
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        console.error(msg);
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i - 0] = arguments[_i];
        }
        console.warn(msg);
    };
    Logger = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], Logger);
    return Logger;
}());
//# sourceMappingURL=/Users/maymaywong/workspace/playground/xliff-editor/src/logger.js.map

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "/* global */\n.ui.text.container,\n.ui.header,\nh1, h2, h3, h4, h5 {\n    font-family: \"Courier\";\n}\n\n.ui.header {\n    font-size: 6rem;\n    font-weight: 500;\n    line-height: 130%;\n}\n\n.ui.header .wrapper {\n    color: #ccc;\n    display: block;\n}\n\n.ui.masthead {\n    margin: 10rem 0 2rem;\n}\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = ":host {\n    display: block;\n    margin-bottom: 10rem;\n}"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "h1, h2, h3, h4, h5 {\n    font-family: \"Courier\";\n}\n\n.ui.horizontal.divider{\n    margin: 2rem 0;\n    color: #ccc;\n}"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<div class=\"ui vertical masthead center aligned basic segment\">\n  <div class=\"ui text container\">\n    <h1 class=\"ui header\">\n      <span class=\"wrapper\">&lt;/&gt;</span>Xliff\n      <span>Editor</span>\n    </h1>\n    <h3>A simple tool for human translator. Support <a href=\"http://docs.oasis-open.org/xliff/xliff-core/v2.0/xliff-core-v2.0.html\" target=\"_blank\">XLIFF 2.0</a></h3>\n  </div>\n</div>\n\n<div class=\"ui container\">\n  <app-file-upload (fileChange)=\"handleFileChange($event)\"></app-file-upload>\n  <app-xliff-viewer [xliffData]=\"xliffData\"></app-xliff-viewer>\n</div>"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = "<div class=\"ui basic clearing segment\">\n  <a (click)=\"download()\" class=\"ui right floated download primary button\" file=\"xliff-file.xml\" >DOWNLOAD</a>\n</div>"

/***/ },

/***/ 632:
/***/ function(module, exports) {

module.exports = "<div class=\"ui basic segment center aligned\">\n    <div class=\"ui left icon action input labeled\">\n        <div class=\"ui label\">\n            <i class=\"file icon\"></i>\n            .xlf\n        </div>\n        <input #fileInput type=\"file\" (change)=\"fileChanged($event)\"/>\n        <div class=\"ui red submit button\" (click)=\"fileInput.click()\">UPLOAD</div>\n    </div>\n</div>"

/***/ },

/***/ 633:
/***/ function(module, exports) {

module.exports = "<app-xliff-viewer-item\n   class=\"row\"\n    [xliffItem]=\"xliffFile\"\n    [parentKeys]=\"updateParentKeys\">\n</app-xliff-viewer-item>"

/***/ },

/***/ 634:
/***/ function(module, exports) {

module.exports = "<app-xliff-viewer-item\n    class=\"row\"\n    [xliffItem]=\"xliffGroup\"\n    [parentKeys]=\"updateParentKeys\">\n</app-xliff-viewer-item>"

/***/ },

/***/ 635:
/***/ function(module, exports) {

module.exports = "<div class=\"ui grid form\">\n    <div class=\"sixteen wide column\">\n        <div class=\"ui small breadcrumb\">\n            <ng-container *ngFor=\"let parentKey of parentKeys; let i=index\">\n                <i *ngIf=\"i !== 0\" class=\"right angle icon divider\"></i>\n                <a class=\"section\">{{parentKey}}</a>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"seven wide column\">\n        {{xliffSegment.source}}\n    </div>\n    <div class=\"seven wide column\">\n        <textarea rows=\"2\"[(ngModel)]=\"xliffSegment.target\"></textarea>\n    </div>\n</div>"

/***/ },

/***/ 636:
/***/ function(module, exports) {

module.exports = "<app-xliff-viewer-item\n   class=\"row\"\n    [xliffItem]=\"xliffUnit\"\n    [parentKeys]=\"updateParentKeys\">\n</app-xliff-viewer-item>"

/***/ },

/***/ 637:
/***/ function(module, exports) {

module.exports = "<ng-container *ngFor=\"let item of xliffItem | objectToArray\">\n\n  <ng-container [ngSwitch]=\"item.$key\">\n    <app-xliff-segment *ngSwitchCase=\"'segment'\" [xliffSegment]=\"item.$value\" [parentKeys]=\"updateParentKeys\"></app-xliff-segment>\n    <app-xliff-unit *ngSwitchCase=\"'unit'\" [xliffUnit]=\"item.$value\" [parentKeys]=\"updateParentKeys\"></app-xliff-unit>\n    <app-xliff-group *ngSwitchCase=\"'group'\" [xliffGroup]=\"item.$value\" [parentKeys]=\"updateParentKeys\"></app-xliff-group>\n    <app-xliff-file *ngSwitchCase=\"'file'\" [xliffFile]=\"item.$value\" [parentKeys]=\"updateParentKeys\"></app-xliff-file>\n  </ng-container>\n\n  <app-xliff-viewer-item\n   class=\"row\"\n    *ngIf=\"item.$key === 'xliff'\"\n    [xliffItem]=\"item.$value\"\n    [parentKeys]=\"updateParentKeys\">\n  </app-xliff-viewer-item>\n  <app-xliff-viewer-item\n   class=\"row\"\n    *ngIf=\"isArrayKey(item.$key)\"\n    [xliffItem]=\"item.$value\"\n    [parentKeys]=\"parentKeys\">\n  </app-xliff-viewer-item>\n</ng-container>"

/***/ },

/***/ 638:
/***/ function(module, exports) {

module.exports = "<h4 *ngIf=\"xliffData\" class=\"ui horizontal divider header\">\n  <i class=\"edit icon\"></i> Edit translation\n</h4>\n\n<!-- Xliff items -->\n<div *ngIf=\"xliffData\">\n  <div class=\"ui grid\">\n    <div class=\"two wide column\">#</div>\n    <div class=\"seven wide column\">Source</div>\n    <div class=\"seven wide column\">Target</div>\n  </div>\n  <app-xliff-viewer-item [(xliffItem)]=\"xliffData\" [parentKeys]=\"[]\"></app-xliff-viewer-item>\n\n</div>\n\n<h4 *ngIf=\"xliffData\" class=\"ui horizontal divider header\">\n  <i class=\"download icon\"></i> Download file\n</h4>\n<app-file-download *ngIf=\"xliffData\" [xliffData]=\"xliffData\"></app-file-download>\n\n<!-- Debug -->\n<h4 *ngIf=\"xliffData\" class=\"ui horizontal divider header\">\n  <i class=\"bug icon\"></i> Debug\n</h4>\n\n<div *ngIf=\"xliffData\" class=\"ui container basic segment\">\n  <h3>Debug</h3>\n  <pre>{{xliffData | json}}</pre>\n</div>"

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);


/***/ }

},[651]);
//# sourceMappingURL=main.bundle.map