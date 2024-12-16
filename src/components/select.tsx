import * as RadixSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';
import styled from 'styled-components';

import {
  borderRadius,
  borderWidth,
  color,
  fontSize,
  fontWeight,
  space,
} from '@/styles/helpers';

const TriggerWrapper = styled(RadixSelect.Trigger)`
  color: ${color('base-content')};
  background-color: ${color('base-background')};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize('350')};
  font-weight: ${fontWeight('medium')};
  border: none;
  border-radius: ${borderRadius('100')};
  padding: ${space('400')} ${space('600')};
  box-shadow: 0rem 0rem 0.5rem ${color('shadow-50')};
  width: 12.5rem;
  cursor: pointer;

  &:focus-visible {
    outline: ${borderWidth('050')} solid ${color('body-content')};
  }
`;

const Trigger = ({ placeholder }: { placeholder: ReactNode }) => (
  <TriggerWrapper>
    <RadixSelect.Value placeholder={placeholder} />
    <RadixSelect.Icon>
      <ChevronDown size={16} />
    </RadixSelect.Icon>
  </TriggerWrapper>
);

const ContentWrapper = styled(RadixSelect.Content)`
  color: ${color('base-content')};
  background-color: ${color('base-background')};
  font-size: ${fontSize('350')};
  font-weight: ${fontWeight('medium')};
  border: none;
  border-radius: ${borderRadius('100')};
  padding: ${space('200')};
  box-shadow: 0.25rem 0.25rem 0.5rem ${color('shadow-50')};
  width: 12.5rem;
  cursor: pointer;
`;

const Content = ({ children }: { children: ReactNode }) => (
  <ContentWrapper position="popper" sideOffset={5}>
    {children}
  </ContentWrapper>
);

const ItemWrapper = styled(RadixSelect.Item)`
  padding: ${space('200')} ${space('400')};
  border-radius: ${borderRadius('100')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[data-highlighted] {
    outline: none;
    background-color: ${color('body-background')};
  }
`;

const Item = ({ children, ...props }: RadixSelect.SelectItemProps) => (
  <ItemWrapper {...props}>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    <RadixSelect.ItemIndicator>
      <Check size={16} />
    </RadixSelect.ItemIndicator>
  </ItemWrapper>
);

const Select = ({ children, ...props }: RadixSelect.SelectProps) => (
  <RadixSelect.Root {...props}>{children}</RadixSelect.Root>
);

Select.Trigger = Trigger;
Select.Content = Content;
Select.Item = Item;

export default Select;
