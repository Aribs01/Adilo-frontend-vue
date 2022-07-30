<template>
<div class='banner'>
	<nav class='navbar navbar-inverse navbar-expand-md navbar-fixed-top'>
    	<div class='container-fluid'>
    		<div class='navbar-header nav-header'>
    		  <button type='button' class='navbar-toggle barrs' data-toggle='collapse' data-target='#mainNavBar'>
    		    <span class='icon-bar'></span>
    		    <span class='icon-bar'></span>
    		    <span class='icon-bar'></span>
    		  </button>
			<div class="logo-img">
				<div class="logo-img-inner"></div>
			</div>
    		  <a href='#' class='header-text'><span class=''>Adilo</span></a>
    		</div>
    		<div class='collapse navbar-collapse' id='mainNavBar'>
    			<ul class='nav navbar-nav  testing'>
    				<li class="ggg"><a href='#'>Projects</a></li>
    				<li class='dropdown ggg'>
    					<a class='dropdown=toggle' data-toggle='dropdown'>Tools & App <span class='caret'></span></a>
    					<ul class='dropdown-menu'>
    					  <li class="topbar-menu-items"><a href='/'>Snapbyte Recorder</a></li>
    					  <li class="topbar-menu-items"><a href='#'>AudioBounce</a></li>
    					  <li class="topbar-menu-items"><a href='#'>Sugar Voice</a></li>
    					</ul>
    				</li>
    				<li class="ggg"><a href='#'>Channels</a></li>
    				<li class="ggg"><a href='#'>Contacts</a></li>
    				<li class="ggg"><a href='#'>Analytics</a></li>
    				<li class="ggg"><a href='#'>Settings</a></li>
    			</ul>
    		  	<div class='navbar-form navbar-right header-name-container' role='search'>
    				<div class=" help-button-container">
					<RouterLink to='#' class="help-button-text">
    				  		<span class="ppp">Help</span>
					</RouterLink>
    				</div>
					<Avatar image="images/1.svg"  class="mr-2 header-user-img" size="large" shape="circle" />
    				<div class="form-group header-user-name">
    				  <span><b>Cody Fisher</b></span>
    				</div>
    			</div>
    		</div>
    	</div>
    </nav>
</div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>