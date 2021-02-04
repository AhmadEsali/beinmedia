import React from 'react';
import Main from 'layouts/main/Main';
import Card from 'components/Card';
import AboutUsVideo from 'components/AboutUsVideo';

import {
  ShopContainer,
  ItemPreviewContainer,
  ShopItemsContainer,
} from './Shop.styles';
import { shopCards } from 'data/data';

const Shop = () => {
  return (
    <Main>
      <ShopContainer>
        <ItemPreviewContainer>
          <AboutUsVideo />
        </ItemPreviewContainer>
        <ShopItemsContainer>
          {React.Children.toArray(
            shopCards.map((c) => (
              <Card
                title={c.title}
                viewsNumber={c.views}
                price={c.price}
                type={c.type}
                image={c.image}
              />
            ))
          )}
        </ShopItemsContainer>
      </ShopContainer>
    </Main>
  );
};

export default Shop;
