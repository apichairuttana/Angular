import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NewsService } from "../services/news.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  @Input() news;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.getNewsDetail();
  }

  getNewsDetail() {
    const title = this.route.snapshot.paramMap.get('title');
    this.newsService.getNewsDetail(title).subscribe(news => this.news = news);
  }
}
