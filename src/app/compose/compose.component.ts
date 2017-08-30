import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

interface Method {
  image: {
    data: string;
    subTitle: string;
  };
  code: string;
  description: string;
}

interface Recipe {
  title: string;
  elements: string[];
  methods: Method[];
  circuit: string;
}

@Component({
  selector: 'cg-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.styl']
})
export class ComposeComponent implements OnInit {

  showDialog = false;

  image = '';

  title = '';
  elements: string[] = ['', '', '', ''];

  methods: Method[] = [
    {
      image: { data: '', subTitle: ''},
      code: '',
      description: ''
    }
  ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    const recipe = this.recipeService.getRecipe();
    if (!recipe) {
      return;
    }
    this.title = recipe.title || '';
    this.methods = recipe.methods;
    this.elements = recipe.elements;
    this.image = recipe.circuit;
  }

  customTrackBy(index: number, obj: any): any {
    return  index;
  }


  /**
   * 配線図エディタを開く
   */
  open() {
    this.showDialog = true;
  }

  /**
   * 配線図が保存されたとき
   * @param image
   */
  saved(image: string) {
    this.image = image;
    this.showDialog = false;
  }

  /**
   * 「準備するもの」を追加する
   */
  addElement() {
    this.elements.push('');
  }

  /**
   * 「手順」を追加する
   */
  addMethod() {
    const method = {
      image: { data: '', subTitle: ''},
      code: '',
      description: ''
    };
    this.methods.push(method);
  }

  /**
   * 送信する
   * (時間の関係でLocalStorageに保存します)
   */
  send() {
    const recipe = {
      title: this.title,
      methods: this.methods,
      elements: this.elements,
      circuit: this.image
    };
    this.recipeService.setRecipe(recipe);
  }

  /**
   * 画像が選択されたときに
   * @param file
   * @param index
   */
  onImageSelect(file, index) {
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.methods[index].image.data = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
}
