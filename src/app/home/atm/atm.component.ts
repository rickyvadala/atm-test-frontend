import { Component, OnInit } from '@angular/core';
import {AtmService} from '../../shared/services/atm.service';
import {AtmDto} from '../../model/atm-dto';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor(private atmService: AtmService,
              private fb: FormBuilder) { }

  get atmList(): Array<any> {
    return this.data
        .map((atm, i) => ({id: i + 1, ...atm}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  filterForm: FormGroup;
  atmDto: AtmDto;
  data: Array<any> = [];
  page = 1;
  pageSize = 25;
  collectionSize = 0;

  ngOnInit(): void {
    this.getAllAtm();
    this.atmDto = new AtmDto();
    this.filterForm = this.fb.group({
      city: [''],
      postalcode: [''],
      street: [''],
      housenumber: [''],
      lat: [''],
      lng: ['']
    });
  }

  search() {
    if (this.filterForm.value.city
        || this.filterForm.value.postalcode
        || this.filterForm.value.street
        || this.filterForm.value.housenumber
        || this.filterForm.value.lat
        || this.filterForm.value.lng) {
      this.getFilteredAtm();
    } else {
      this.getAllAtm();
    }
  }

  getAllAtm() {
    this.atmService.getAllAtm().subscribe((data: any) => {
      this.data = data;
      this.collectionSize = data.length;
    });
  }

  getFilteredAtm() {
    this.atmService.getFilteredAtm(this.filterForm.value).subscribe((data: any) => {
      this.data = data;
      this.collectionSize = data.length;
    });
  }
}
