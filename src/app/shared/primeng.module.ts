import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MenubarModule, DataTableModule, MessagesModule, DialogModule,
    ConfirmDialogModule, PanelModule, ButtonModule, InputTextModule, MessageModule,
    ConfirmationService, DropdownModule, FileUploadModule, RadioButtonModule, MessageService
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        MenubarModule,
        DataTableModule,
        TableModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        ConfirmDialogModule,
        PanelModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        FileUploadModule,
        RadioButtonModule,
        ToastModule
    ],
    exports: [
        CommonModule,
        MenubarModule,
        DataTableModule,
        TableModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        ConfirmDialogModule,
        PanelModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        FileUploadModule,
        RadioButtonModule,
        ToastModule
    ],
    providers: [ConfirmationService, MessageService],
})
export class CustomPrimengModule { }