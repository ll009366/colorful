import { FC } from 'react';
import { TabsProps } from './Tabs';
import { TabItemProps } from './tabItem';
export declare type ITabsComponent = FC<TabsProps> & {
    Item: FC<TabItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
