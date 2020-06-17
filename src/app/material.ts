import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTableModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule
  ],
})
export class MaterialModule { }
