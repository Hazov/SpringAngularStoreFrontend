export class CreateOrderRequest {
  phoneNumber: string;
  address: string;

  constructor(phoneNumber: string, address: string) {
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
