import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";
//import * as moment from 'moment'; 

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  public newList;
  public selectedNews;
  public filteredData;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews()
    .then((res:any)=>{
        this.newList = res;
    });
  }

  onSelect(news) {
    this.selectedNews = news;
  }

  updateSearch(searchTerm) {
    if (searchTerm !== 0 && searchTerm !== '' && searchTerm !== null) {
      this.filteredData = this.newList.filter((item: any) => {
        return (
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      });
    } else {
      this.filteredData = '';
    }
  }
}
