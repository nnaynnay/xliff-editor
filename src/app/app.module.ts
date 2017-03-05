import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from './utility/logger';
import { FileHandlerService } from './file-handler/file-handler.service';
import { XliffParserService } from './xliff-parser/xliff-parser.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FileHandlerService,
    XliffParserService,
    Logger
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
