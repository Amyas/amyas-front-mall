import {
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  List,
  Image,
  Loading,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  Tabs,
  Tab,
  Card,
  Sticky
} from 'vant'

export default Vue => {
  Vue
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Grid)
    .use(GridItem)
    .use(List)
    .use(Image)
    .use(Loading)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Tabs)
    .use(Tab)
    .use(Card)
    .use(Sticky)
}
