import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { ItemMeta } from 'src/app/models/item-meta';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {
  numberTypes = ['Integer', 'Decimal'];

  @Input() data: any;
  @Input() item: string;

  displayValue: string;

  precision = `1.0-${environment.precision}`;

  constructor(
    private dict: DictionaryService,
    private decimalPipe: DecimalPipe,
  ) { }

  ngOnInit(): void {
    if (!this.data) {
      this.displayValue = 'N/A'
    } else if (this.numberTypes.includes(this.getFromDict(this.item, 'dataType'))) {
      this.displayValue = this.decimalPipe.transform(this.data, this.precision);
    } else {
      this.displayValue = this.data;
    }
  }

  getFromDict(key: string, element: string): string {
    const itemDetails = this.dict.getItemDetails(key);
    if (itemDetails && itemDetails[element]) {
      return itemDetails[element];
    } else {
      return key;
    }
  }

}
