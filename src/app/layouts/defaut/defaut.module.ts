import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefautComponent } from './defaut.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from 'src/app/modules/user/user.component';
import { CandidateComponent } from 'src/app/modules/candidate/candidate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpAddEditComponent } from 'src/app/emp-add-edit/emp-add-edit.component';
@NgModule({
  declarations: [
    DefautComponent,
    DashboardComponent,
    UserComponent,
    CandidateComponent,
    EmpAddEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefautModule { }
