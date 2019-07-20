import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { FileUploadModel } from './fileupload.model';

@Injectable()
export class FileUploadService {

    constructor(private apiService: ApiService) {
    }

    uploadFileContenttoDb(datatobeUploaded):Observable<any>{
        return this.apiService.post("Admin/FileUpload",JSON.stringify(datatobeUploaded));
    }
}
