import { Component, OnInit, Input } from '@angular/core';
import { AnimalData } from 'src/app/models/animal-data';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { ItemMeta } from 'src/app/models/item-meta';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
  @Input() title: string;
  @Input() items: string[];
  @Input() animal: AnimalData;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
