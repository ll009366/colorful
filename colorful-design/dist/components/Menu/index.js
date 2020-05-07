import Menu from './Menu';
import SubMenu from './Submenu';
import MenuItem from './MenuItem';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
