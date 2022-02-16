import { CartService } from './cart.service';

describe('CartService', () => {
  let service = new CartService();
  it('should be created', () => {
    expect(CartService).toBeTruthy();
  });

  describe('ProducList', () => {
    it('should set product', () => {
      const product = [
        {
          id: 1,
          name: 'Small Rubber Table',
          description:
            'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
          defaultImage: 'http://placeimg.com/640/480/cats',
          images: [
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
          ],
          price: 56599.41,
          discount: 44,
        },
      ];

      const productListSpy = spyOn(service.productList, 'next');

      service.setProduct(product);
      expect(productListSpy).toHaveBeenCalledWith(product);
    });
    it('should add to cart', () => {
      const product = {
        id: 1,
        name: 'Small Rubber Table',
        description:
          'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        defaultImage: 'http://placeimg.com/640/480/cats',
        images: [
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
        ],
        price: 56599.41,
        discount: 44,
      };
      const productList = [
        {
          id: 1,
          name: 'Small Rubber Table',
          description:
            'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
          defaultImage: 'http://placeimg.com/640/480/cats',
          images: [
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
            'http://placeimg.com/640/480/cats',
          ],
          price: 56599.41,
          discount: 44,
        },
      ];

      const productListSpy = spyOn(service.productList, 'next');

      service.addtoCart(product);
      expect(productListSpy).toHaveBeenCalledWith(productList);
    });
    it('should remove all the cart', () => {
      const product = {
        id: 1,
        name: 'Small Rubber Table',
        description:
          'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        defaultImage: 'http://placeimg.com/640/480/cats',
        images: [
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
        ],
        price: 56599.41,
        discount: 44,
      };
      const productListSpy = spyOn(service.productList, 'next');

      service.removeAllCart();
      expect(productListSpy).toHaveBeenCalledWith([]);
    });
    it('should remove single cart', () => {
      const product = {
        id: 1,
        name: 'Small Rubber Table',
        description:
          'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        defaultImage: 'http://placeimg.com/640/480/cats',
        images: [
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
          'http://placeimg.com/640/480/cats',
        ],
        price: 56599.41,
        discount: 44,
      };
      const productListSpy = spyOn(service.productList, 'next');

      service.removeCartItem(product);
      expect(productListSpy).toHaveBeenCalledWith([]);
    });
  });
});
