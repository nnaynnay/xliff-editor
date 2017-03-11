import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Logger } from './utility/logger';
import { FileHandlerService } from './file-handler/file-handler.service';
import { XliffParserService } from './xliff-parser/xliff-parser.service';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { XliffViewerComponent } from './components/xliff-viewer/xliff-viewer.component';
import { XliffViewerItemComponent } from './components/xliff-viewer-item/xliff-viewer-item.component';
import { ObjectToArrayPipe } from './utility/object-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    XliffViewerComponent,
    XliffViewerItemComponent,
    ObjectToArrayPipe
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
