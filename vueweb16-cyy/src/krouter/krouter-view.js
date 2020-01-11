export default {
  render(h) {
    const { routeMap, current } = this.$router;
    const component = routeMap[current].component || null;
    // this.$router.$options.routes.forEach(route=>{
    //     if(route.path === this.$router.current) {
    //         component = route.component
    //     }
    // })
    return h(component);
  }
};
