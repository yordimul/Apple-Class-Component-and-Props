import React, { Component } from 'react'
import img from './../../assets/images/icons/logo-sm.png'
import search from './../../assets/images/icons/search-icon-sm.png'
import cart from './../../assets/images/icons/cart-sm.png'
import Navalink from './Navalink.jsx'

export default class Header
 extends Component {
  render() {
    return (
      <div>
        <div class="nav-wrapper fixed-top">
		<div class="container">
			<nav class="navbar navbar-toggleable-sm navbar-expand-md">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a class="navbar-brand mx-auto" href="#"><img src={img}/></a>

			    <div class="navbar-collapse collapse">
			        <ul class="navbar-nav nav-justified w-100 nav-fill">
						
                        <Navalink link="/mac/" text="mac"/>
                        <Navalink link="#" text="iphone"/>
                        <Navalink link="#" text="ipad"/>
                        <Navalink link="#" text="watch"/>
                        <Navalink link="#" text="tv"/>
                        <Navalink link="#" text="music"/>
                        <Navalink link="#" text="Support"/>

                      
						<li class="nav-item" ><a class="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
						<li class="nav-item"><a  class="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
        
      </div>
    )
  }
}
