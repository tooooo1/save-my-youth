import styled from 'styled-components';
import { ListType, SubscriptionUsedFront } from '../types';
import SearchCardItem from './SearchCardItem';

export type SearchCardListProps = { type: ListType; subData: SubscriptionUsedFront[] };

const SearchCardList = ({ type, subData }: SearchCardListProps) => {
  return (
    <StyledSection type={type}>
      {subData &&
        subData.map((data, index) => {
          return (
            <SearchCardItem
              key={data.id}
              subscription={data}
              indexing={type === 'popular' ? true : false}
              index={index + 1}
            />
          );
        })}
    </StyledSection>
  );
};

export default SearchCardList;

const StyledSection = styled.article<{ type: ListType }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.type === 'popular' ? '0 12px 0 24px' : '0 12px')};
  gap: 12px;
  padding-bottom: 179px;
`;
