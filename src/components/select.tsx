import * as RadixSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const TriggerWrapper = styled(RadixSelect.Trigger)`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.color.shadow};
  width: 12.5rem;
  cursor: pointer;

  &:focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.color.text};
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
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.element};
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.5rem ${({ theme }) => theme.color.shadow};
  width: 12.5rem;
  cursor: pointer;
`;

const Content = ({ children }: { children: ReactNode }) => (
  <ContentWrapper position="popper" sideOffset={5}>
    {children}
  </ContentWrapper>
);

const ItemWrapper = styled(RadixSelect.Item)`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.color.background};
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
