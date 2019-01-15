import { Component } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
@Component({
    moduleId: module.id,
    selector: 'social',
    templateUrl: 'social.component.pug',
    styleUrls: ['social.component.styl']
})
export class SocialComponent {

    constructor( private auth: AuthService, private router: Router, private active: ActivatedRoute) {
        this.active.params.subscribe(params => {
			console.log(params)
			params.token ? this.auth.loginFacebook(params.token).then(res => {
				console.log(res)
				res ?
					this.router.navigate(['/']) : this.router.navigate(['/'])
			}) : null;
		});
    }
}
