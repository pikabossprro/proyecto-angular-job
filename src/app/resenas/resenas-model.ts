export class ReviewRegister {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;

  constructor(reviewRegister: Partial<ReviewRegister> = {}) {
    this.id = reviewRegister.id || 0;
    this.email = reviewRegister.email || '';
    this.password = reviewRegister.password || '';
    this.name = reviewRegister.name || '';
    this.role = reviewRegister.role || 'customer';
    this.avatar = reviewRegister.avatar || '';
  }
}
