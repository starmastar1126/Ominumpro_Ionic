import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private navController: NavController
  ) { }

  currentUser(): Promise<any> {
    return new Promise(resolve => {
      const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
      this.http.get(environment.authApi + 'current_user_info', { params: { ...deviceInfo } }).subscribe((response: any) => {
        resolve(response.user);
      });
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
      this.http.get(environment.authApi + 'check_auth_user', { params: { ...deviceInfo } }).subscribe((response: any) => {
        if (response.user != null) {
          resolve(true);
        } else {
          this.navController.navigateBack('/auth').then(() => { });
          resolve(false);
        }
      });
    });
  }

  getTokenForZoom() {
    let url = 'http://localhost:3000';
    // this.http.get(url).subscribe(res => {
    //   console.log("authorize res:", JSON.stringify(res));      
    // }, error => {
    //   console.error("authorize res error:", error);
      
    // })
  }

}
