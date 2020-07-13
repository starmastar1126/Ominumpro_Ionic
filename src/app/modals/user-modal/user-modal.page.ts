import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams  } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {

  userData: object;

  @Input() public data: object;

  constructor(
    private modalController: ModalController,
    public navParams: NavParams
  ) {
    this.userData = this.navParams.get('data');
  }

  public dinner = {
    mainCourse: 'fried chicken',
    desert: 'chocolate cake'
  };

  ngOnInit() {
    
  }

  async closeModal() {
    await this.modalController.dismiss(this.dinner);
  }

}
