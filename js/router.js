export class Router {
    routes = {} 
    pageBg = {}
  
    add(routeName, page, bgImage) {
      this.routes[routeName] = page
      this.pageBg[routeName] = bgImage
    }
    
    route(event) {
      event = event || window.event
      event.preventDefault()
  
      window.history.pushState({}, "", event.target.href)
  
      this.handle()
    }
  
    handle() {
      const { pathname }  = window.location
      const route = this.routes[pathname] || this.routes[404]
      fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        document.body.style.backgroundImage = this.pageBg[pathname]
      })
    }
  
  }