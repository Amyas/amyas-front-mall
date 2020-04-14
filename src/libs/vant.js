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
  TabbarItem
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
}
