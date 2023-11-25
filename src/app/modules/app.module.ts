import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../components/main/footer/footer.component';
import { HeaderComponent } from '../components/main/header/header.component';
import { SubMenuComponent } from '../components/main/sub-menu/sub-menu.component';
import { MobileHeaderComponent } from '../components/main/mobile-header/mobile-header.component';
import { MenuComponent } from '../components/main/menu/menu.component';
import { SearchComponent } from '../views/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubMenuComponent,
    MobileHeaderComponent,
    MenuComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
