import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }



/*
 You generall don't declare components in a routing module so the
 originally generated CommonModule that was imported and the
 @NgModule.declarations array have been removed.

 Exporting RouterModule makes router directives available for
 use in the AppModule components that will need them.
 */
 