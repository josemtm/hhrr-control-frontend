import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/notificaciones',     title: 'Notificaciones',         icon:'nc-bell-55',       class: '' },
    { path: '/empresas',         title: 'Empresas',             icon:'nc-bank',    class: '' },
    { path: '/profesionales',          title: 'Profesionales',              icon:'nc-single-02',      class: '' },
    { path: '/vacantes', title: 'Vacantes',     icon:'nc-tile-56',    class: '' },
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
