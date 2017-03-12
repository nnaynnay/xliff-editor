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
import { XliffSegmentComponent } from './components/xliff-segment/xliff-segment.component';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { XliffGroupComponent } from './components/xliff-group/xliff-group.component';
import { XliffUnitComponent } from './components/xliff-unit/xliff-unit.component';
import { XliffFileComponent } from './components/xliff-file/xliff-file.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    XliffViewerComponent,
    XliffViewerItemComponent,
    ObjectToArrayPipe,
    XliffSegmentComponent,
    FileDownloadComponent,
    XliffGroupComponent,
    XliffUnitComponent,
    XliffFileComponent
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
