import { Component, OnInit } from '@angular/core';
import { GiftItem } from 'src/app/models';
import { GiftDataService } from 'src/app/services/gift-data.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  data: GiftItem[] = [
    { for: 'Amy', holiday: 'Christmas', suggestions: 'Books And Movies' },
    { for: 'Sean', holiday: 'Kwanzaa', suggestions: 'Meat and Things' }
  ];

  constructor(private service: GiftDataService) { }

  ngOnInit(): void {
  }

  onItemAdded(item: GiftItem): void {
    this.data = [item, ...this.data];
  }

}
