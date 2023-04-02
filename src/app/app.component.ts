import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

type InfoItem = {
  img: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isActive = false;
  public listPizza$ = new BehaviorSubject<InfoItem[]>([]);

  private baseUrlImg = './assets/img';

  public ngOnInit(): void {
    const list: InfoItem[] = [
      {
        img: `${this.baseUrlImg}/meat_deluxe.jpg`,
        title: 'Мясная Делюкс',
        text:'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      },
      {
        img: `${this.baseUrlImg}/marine_premium.jpg`,
        title: 'Морская Премиум',
        text:'Перец, сыр, креветки, кальмары, мидии, лосось',
      },
      {
        img: `${this.baseUrlImg}/bacon_sausages.jpg`,
        title: 'Бекон и Сосиски',
        text:'Бекон, сыр, сосиски, ананас, томатная паста',
      },
      {
        img: `${this.baseUrlImg}/chicken_deluxe.jpg`,
        title: 'Куриная Делюкс',
        text:'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      },
      {
        img: `${this.baseUrlImg}/premium_barbecue.jpg`,
        title: 'Барбекю Премиум',
        text:'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      },
      {
        img: `${this.baseUrlImg}/pepperoni_double.jpg`,
        title: 'Пепперони Дабл',
        text:'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      },
      {
        img: `${this.baseUrlImg}/chicken_trio.jpg`,
        title: 'Куриное трио',
        text:'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      },
      {
        img: `${this.baseUrlImg}/cheese.jpg`,
        title: 'Сырная',
        text:'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      },
    ];
    this.listPizza$.next(list);
  }

  public onClickMenu(): void {
    this.isActive = !this.isActive;
  }

  public get infoItems(): InfoItem[] {
    return [
        {
          img: './assets/img/hop.jpg',
          title: 'Лучшее тесто',
          text: 'Мы создаем тесто только из \n' +
            'отборной итальянской муки\n' +
            'наивысшего качества'
        },
      {
        img: './assets/img/kitchen_pack.jpg',
        title: 'лучшие повара',
        text: 'Пиццы готовят самые\n' +
          'профессиональные \n' +
          'итальянские повара'
      },
      {
        img: './assets/img/seo_and_web.jpg',
        title: 'гарантия качества',
        text: 'Наша пиццерия получила\n' +
          'множество наград и \n' +
          'признаний по всему миру'
      },
      {
        img: './assets/img/holidays.jpg',
        title: 'отборные рецепты',
        text: 'Мы используем рецепты\n' +
          'от мировых лидеров\n' +
          'в изготовлении пиццы'
      }
      ]
  }
}
