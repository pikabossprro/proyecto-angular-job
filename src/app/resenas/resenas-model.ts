export class ReviewRegister {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];

  constructor(reviewRegister: ReviewRegister) {
    this.title= reviewRegister.title || "";
    this.price= reviewRegister.price ;
    this.description = reviewRegister.description ;
    this.categoryId = reviewRegister.categoryId ;
    this.images = reviewRegister.images || ["https://placeimg.com/640/480/any"];
    
  }
}
