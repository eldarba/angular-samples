import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { RootComponent } from './components/root/root.component';
import { ShortStringPipe } from './pipes/short-string.pipe';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    PipesDemoComponent, 
    RootComponent, ShortStringPipe, UserComponent, UsersComponent, ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent, UsersComponent]
})
export class AppModule { }
