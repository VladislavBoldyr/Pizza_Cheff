import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

type InfoItem = {
  image: string;
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
  public showFlag: boolean = false;
  public selectedImageIndex: number = -1;
  public imageObject: Object[] = [];

  private baseUrlImg = './assets/img';

  public ngOnInit(): void {
    const list: InfoItem[] = [
      {
        image: `${this.baseUrlImg}/meat_deluxe.jpg`,
        title: 'Мясная Делюкс',
        text:'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      },
      {
        image: `${this.baseUrlImg}/marine_premium.jpg`,
        title: 'Морская Премиум',
        text:'Перец, сыр, креветки, кальмары, мидии, лосось',
      },
      {
        image: `${this.baseUrlImg}/bacon_sausages.jpg`,
        title: 'Бекон и Сосиски',
        text:'Бекон, сыр, сосиски, ананас, томатная паста',
      },
      {
        image: `${this.baseUrlImg}/chicken_deluxe.jpg`,
        title: 'Куриная Делюкс',
        text:'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      },
      {
        image: `${this.baseUrlImg}/premium_barbecue.jpg`,
        title: 'Барбекю Премиум',
        text:'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      },
      {
        image: `${this.baseUrlImg}/pepperoni_double.jpg`,
        title: 'Пепперони Дабл',
        text:'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      },
      {
        image: `${this.baseUrlImg}/chicken_trio.jpg`,
        title: 'Куриное трио',
        text:'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      },
      {
        image: `${this.baseUrlImg}/cheese.jpg`,
        title: 'Сырная',
        text:'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      },
    ];
    this.imageObject = list.map(item =>  {
      return {image: item.image}
    });
    this.listPizza$.next(list);
  }

  public onClickMenu(): void {
    this.isActive = !this.isActive;
  }

  public showLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  public closeEventHandler(): void {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  public get infoItems(): InfoItem[] {
    return [
        {
          image: './assets/img/hop.jpg',
          title: 'Лучшее тесто',
          text: 'Мы создаем тесто только из \n' +
            'отборной итальянской муки\n' +
            'наивысшего качества'
        },
      {
        image: './assets/img/kitchen_pack.jpg',
        title: 'лучшие повара',
        text: 'Пиццы готовят самые\n' +
          'профессиональные \n' +
          'итальянские повара'
      },
      {
        image: './assets/img/seo_and_web.jpg',
        title: 'гарантия качества',
        text: 'Наша пиццерия получила\n' +
          'множество наград и \n' +
          'признаний по всему миру'
      },
      {
        image: './assets/img/holidays.jpg',
        title: 'отборные рецепты',
        text: 'Мы используем рецепты\n' +
          'от мировых лидеров\n' +
          'в изготовлении пиццы'
      }
      ]
  }
}
