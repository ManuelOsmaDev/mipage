import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-toolbar',
  templateUrl: './side-nav-toolbar.component.html',
  styleUrls: ['./side-nav-toolbar.component.css']
})
export class SideNavToolbarComponent   {

  @Output() menuToggle = new EventEmitter<boolean>();

  /**
   * menuToggleEnabled
   * Input menuToggleEnabled
   * Devextreme
   * @memberof HeaderComponent
   */
  @Input() menuToggleEnabled = false;

  /**
   * title
   * Input title
   * Devextreme
   * @type {string}
   * @memberof HeaderComponent
   */

  /**
   * user
   * user: IUser
   * Devextreme
   * @type {(IUser | null)}
   * @memberof HeaderComponent
   */

  /**
   * userMenuItems
   * Array de objeto de tipo userMenuItems
   * Devextreme
   * @memberof HeaderComponent
   */
  userMenuItems = [
    {
      text: 'Mi Perfil',
      icon: 'user',
      onClick: () => {
      }
    },
    {
      text: 'Cerrar sesión',
      icon: 'runner',
      onClick: () => {
      }
    }
  ];

  /**
   * constructor
   * Creates an instance of HeaderComponent.
   * @param {AuthService} authService
   * @param {Router} router
   * @memberof HeaderComponent
   */
  constructor(

  ) { }

  /**
   * ngOnInit
   * Funcion inical del componente
   * Devextreme
   * @memberof HeaderComponent
   */


  /**
   * toggleMenu
   * Funcion toggleMenu para la cabecera del menu
   * Devextreme
   * @memberof HeaderComponent
   */
  toggleMenu = () => {
    this.menuToggle.emit();
  }
}


