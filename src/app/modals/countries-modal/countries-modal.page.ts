import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {UtilsService} from '../../../services/utils/utils.service';
import {CountriesService} from '../../../services/countries/countries.service';
import {Country} from '../../../interface/interface';

@Component({
  selector: 'app-countries-modal',
  templateUrl: './countries-modal.page.html',
  styleUrls: ['./countries-modal.page.scss'],
})
export class CountriesModalPage implements OnInit {

  countriesList: Country[];
  searchKey: string;

  constructor(
      private countries: CountriesService,
      private modalController: ModalController
  ) { }

  ngOnInit() {
    this.searchKey = '';
    this.countriesList = this.countries.getAllCountries();
  }

  searchCountries() {
    if (this.searchKey) {
      const countries = this.countries.getAllCountries();
      this.countriesList = this.countriesList.filter(
          x => x.name.toString().toUpperCase().includes(this.searchKey.toUpperCase())
              || x.iso2.toString().toUpperCase().includes(this.searchKey.toUpperCase()));
    } else {
      this.countriesList = this.countries.getAllCountries();
    }
  }

  dismissModal(country?: any) {
    if (country) {
      this.modalController.dismiss(country);
    } else {
      this.modalController.dismiss();
    }
  }

}
