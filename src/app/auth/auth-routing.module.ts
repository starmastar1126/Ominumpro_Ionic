import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthPage} from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
                    }
                ]
            },
            {
                path: 'register',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
                    }
                ]
            },
            {
                path: 'forgot-password',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
                    }
                ]
            },
            {
                path: 'reset-password',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
                    }
                ]
            },
            {
                path: 'confirmation',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationPageModule)
                    }
                ]
            },
            {
                path: 'edit-profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
