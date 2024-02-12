import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';

import { TableComponent } from './table/table.component';
import { ProductComponent } from './product/product.component';




export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'product',
				component: ProductComponent
			},
			{
				path: 'user',
				component: UserComponent
			},
			
		]
	}
];
