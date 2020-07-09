import { Component, OnInit } from '@angular/core';

import { Section } from 'src/app/models/page-meta';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { PageLayoutService } from 'src/app/services/page-layout.service';
import { AnimalService } from 'src/app/services/animal.service';
import { combineLatest } from 'rxjs';
import { AnimalData } from 'src/app/models/animal-data';
import { ItemMeta } from 'src/app/models/item-meta';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {
  sections: Section[];
  animal: AnimalData;

  constructor(
    private dict: DictionaryService,
    private pageLayout: PageLayoutService,
    private animalService: AnimalService,
  ) { }

  ngOnInit(): void {
    combineLatest(
      this.dict.getDictionary(),
      this.pageLayout.getPageLayout(),
      this.animalService.getAnimal()
    ).subscribe(
      ([dict, layout, animal]) => {
        this.sections = layout['sections'];
        this.animal = animal;
      }
    )
  }
}
