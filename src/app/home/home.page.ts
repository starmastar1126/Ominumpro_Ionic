import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';
import {LanguageService} from '../../services/language/language.service';
import {NavController} from '@ionic/angular';
import {CountriesService} from '../../services/countries/countries.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private http: HttpClient,
        private navController: NavController,
        private country: CountriesService,
        private language: LanguageService,
        private utils: UtilsService
    ) { }
    
    ngOnInit(): void {
        this.utils.showLoading({
            type: 1,
            position: 'bottom',
            message: this.language.getWordByLanguage('networkConnectionChecking') + '...',
            overlay: false
        }).then(() => {
            setTimeout(async () => {
                this.utils.hideLoading();
                await this.navController.navigateRoot('/language');
            }, 1500);
        });
    }

}
