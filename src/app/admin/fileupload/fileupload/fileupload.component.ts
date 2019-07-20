import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequest } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { FileUploadModel } from './fileupload.model';
import { FileUploadService } from './fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
    arrayBuffer : any;
    file : File;
    data:any;
    fileupload:FileUploadModel =  new FileUploadModel();
  
    constructor(injector: Injector,
 
    private http: HttpClient,private fileservice:FileUploadService) { }

  ngOnInit() {    
    console.log("Test File Upload");
  }
  
  onFileChange(evt: any) {
    /* wire up file reader */
    let fileToUpload = evt.target.files[0];
    let filename = fileToUpload.name;    
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      this.fileupload.Filedata = this.data.splice(1,this.data.length);
      this.fileupload.Filename = filename;            
      this.fileservice.uploadFileContenttoDb(this.fileupload).
      subscribe(data => {
        console.log(data);
        console.log("FileUploaded Successfully");
      })
    };
    reader.readAsBinaryString(target.files[0]);    
    
    
  }
  
}

