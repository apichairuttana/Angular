import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsDetailsComponent } from './news-detail/news-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DatePipe } from './DatePipe';
import { FooterComponent } from './shared/header/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewsCardComponent,
    NewsDetailsComponent,
    DatePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
