import React from 'react';
import Main from 'layouts/main/Main';
import Card from 'components/Card';
import AboutUsVideo from 'components/AboutUsVideo';

import {
  BroadcastContainer,
  ItemPreviewContainer,
  BroadcastItemsContainer,
} from './Broadcast.styles';
import { broadcastData } from 'data/data';

const BroadCast = () => {
  return (
    <Main>
      <BroadcastContainer>
        <ItemPreviewContainer>
          <AboutUsVideo />
        </ItemPreviewContainer>
        <BroadcastItemsContainer>
          {React.Children.toArray(
            broadcastData.map((c) => (
              <Card
                title={c.title}
                viewsNumber={c.views}
                price={c.price}
                type={c.type}
                image={c.image}
              />
            ))
          )}
        </BroadcastItemsContainer>
      </BroadcastContainer>
    </Main>
  );
};

export default BroadCast;
