export class PedidoRegister {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  
    constructor(pedidoRegister: PedidoRegister) {
      this.title= pedidoRegister.title || "";
      this.price= pedidoRegister.price ;
      this.description = pedidoRegister.description ;
      this.categoryId = pedidoRegister.categoryId ;
      this.images = pedidoRegister.images || ["https://placeimg.com/640/480/any"];
      
    }
  }
  